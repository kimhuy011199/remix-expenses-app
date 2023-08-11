import { Link } from '@remix-run/react';

const ExpenseItem = (props: any) => {
  const { expense } = props;
  const linkTo = `/expenses/${expense.id}`;

  return (
    <Link to={linkTo}>
      <div className="px-5 py-3 flex justify-between">
        <div className="flex flex-col">
          <span className="font-normal">{expense.title}</span>
          <span className="text-gray-400 text-sm pt-1">{expense.date}</span>
        </div>
        <div className="flex gap-2">
          <h3 className="text-2xl sm:text-3xl font-semibold">
            {expense.amount}
          </h3>
          <span className="text-gray-400">$</span>
        </div>
      </div>
    </Link>
  );
};

export default ExpenseItem;
