import { json, redirect } from '@remix-run/node';
import type { LoaderArgs, ActionArgs, V2_MetaFunction } from '@remix-run/node';
import { validationError } from 'remix-validated-form';
import ExpenseForm, { validator } from '~/components/expenses/ExpenseForm';
import Modal from '~/components/shared/Modal';
import { ToastError } from '~/components/shared/ToastError';
import getCurrentDate from '~/functions/getCurrentDate';
import { createExpense } from '~/utils/expense.server';
import { requireUserId } from '~/utils/session.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Expenses' },
    { name: 'description', content: 'Expenses creation page' },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);
  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request);
  const result = await validator.validate(await request.formData());

  if (result.error) {
    return validationError(result.error);
  }

  await createExpense({ ...result.data }, userId);

  return redirect('/expenses');
};

export default function Index() {
  const date = getCurrentDate();

  return (
    <>
      <Modal>
        <ExpenseForm
          title="Create expense"
          defaultValue={{
            title: '',
            amount: '',
            date,
          }}
        />
      </Modal>
    </>
  );
}

export function ErrorBoundary() {
  return <ToastError />;
}
