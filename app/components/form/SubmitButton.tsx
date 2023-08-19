interface SubmitButtonProps {
  isDisabled: boolean;
  label: string;
  type?: 'submit' | 'button';
  handleClick?: () => void;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { isDisabled, label, type = 'submit', handleClick = undefined } = props;

  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={isDisabled}
      className="inline-flex justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 w-auto disabled:cursor-not-allowed disabled:opacity-30"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
