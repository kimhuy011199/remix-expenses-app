import type { V2_MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import ExpensesList from '~/components/expenses/ExpensesList';

export const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Buy coffee',
    amount: 10,
    date: '22-08-2023',
  },
  {
    id: 2,
    title: 'Buy books',
    amount: 20.22,
    date: '02-08-2023',
  },
  {
    id: 3,
    title: 'Go to the cinema',
    amount: 900,
    date: '02-08-2023',
  },
];

const DUMMY_EXPENSES_EMPTY = [];

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Expenses' },
    { name: 'description', content: 'Welcome to Remix - Expenses page' },
  ];
};

export default function Index() {
  return (
    <div className="w-full max-w-xl mx-auto mt-12 px-4">
      <ExpensesList expensesList={DUMMY_EXPENSES} />
      <Outlet />
    </div>
  );
}
