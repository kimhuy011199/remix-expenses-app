interface SubmitButtonProps {
  isSubmitting: boolean;
  label: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { isSubmitting, label } = props;

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="inline-flex justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 w-auto disabled:cursor-not-allowed disabled:opacity-30"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
