import { json } from '@remix-run/node';
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import { getExpenses } from '~/utils/expense.server';
import ExpensesList from '~/components/expenses/ExpensesList';
import { requireUserId } from '~/utils/session.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Expenses' },
    { name: 'description', content: 'Welcome to Remix - Expenses page' },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const expensesList = await getExpenses(userId);
  return json(expensesList);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="w-full max-w-xl mx-auto mt-12 px-4">
      <ExpensesList expensesList={data} />
      <Outlet />
    </div>
  );
}
