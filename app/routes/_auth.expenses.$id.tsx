import type { Expense } from '@prisma/client';
import { json, redirect } from '@remix-run/node';
import type { LoaderArgs, ActionArgs, V2_MetaFunction } from '@remix-run/node';
import { Outlet, useMatches, useParams } from '@remix-run/react';
import { validationError } from 'remix-validated-form';
import ExpenseForm, { validator } from '~/components/expenses/ExpenseForm';
import Modal from '~/components/shared/Modal';
import { ToastError } from '~/components/shared/ToastError';
import { deleteExpense, updateExpense } from '~/utils/expense.server';
import { requireUserId } from '~/utils/session.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Edit Expenses' },
    { name: 'description', content: 'Expenses edition page' },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);
  return json({});
};

const handleUpdate = async (request: any, expenseId: any) => {
  const result = await validator.validate(await request.formData());

  if (result.error) {
    return validationError(result.error);
  }

  if (expenseId) {
    await updateExpense(expenseId, { ...result.data });
  }

  return redirect('/expenses');
};

const handleDelete = async (expenseId: any) => {
  await deleteExpense(expenseId);
  return redirect('/expenses');
};

export const action = async ({ request, params }: ActionArgs) => {
  const expenseId = params.id;

  switch (request.method) {
    case 'PATCH':
      return handleUpdate(request, expenseId);

    case 'DELETE':
      return handleDelete(expenseId);

    default:
      break;
  }
};

export default function Index() {
  const params = useParams();
  const matches = useMatches();

  const expensesList = matches.find(
    (item) => item.id === 'routes/_auth.expenses'
  )?.data;
  const expense = expensesList.find((item: Expense) => item.id === params.id);

  if (!expense) {
    return null;
  }

  return (
    <>
      <Modal>
        <ExpenseForm title="Update expense" defaultValue={expense} />
      </Modal>
      <Outlet />
    </>
  );
}

export function ErrorBoundary() {
  return <ToastError />;
}
