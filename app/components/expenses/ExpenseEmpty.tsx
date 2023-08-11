import LinkButton from '../shared/LinkButton';

const ExpenseEmpty = () => {
  return (
    <div className="mt-20 flex flex-col items-center text-center mx-auto gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
      </svg>

      <h2 className="text-xl">No expenses</h2>
      <p className="text-gray-400 font-light pb-2">
        Get started by creating a new expense.
      </p>
      <LinkButton linkTo="new" label="New expense" />
    </div>
  );
};

export default ExpenseEmpty;
