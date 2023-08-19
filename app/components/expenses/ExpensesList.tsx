import type { Expense } from '~/utils/expense.server';
import LinkButton from '../shared/LinkButton';
import ExpenseEmpty from './ExpenseEmpty';
import ExpenseItem from './ExpenseItem';

interface ExpensesListProps {
  expensesList: Expense[];
}

const ExpensesList = (props: ExpensesListProps) => {
  const { expensesList } = props;

  if (!expensesList.length) {
    return <ExpenseEmpty />;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <LinkButton linkTo="new" label="New expense" />
        <a className="hover:text-indigo-500" href="/expenses/raw">
          Download raw data &nbsp; &darr;
        </a>
      </div>
      <div className="mt-5 border border-gray-700 rounded-xl overflow-hidden">
        <ul className="divide-y divide-gray-700">
          {expensesList.map((item: any) => (
            <li
              key={item.id}
              className="cursor-pointer bg-gray-900 hover:bg-gray-800"
            >
              <ExpenseItem expense={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExpensesList;
