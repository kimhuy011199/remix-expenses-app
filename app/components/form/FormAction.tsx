import SubmitButton from './SubmitButton';

interface FormActionProps {
  isDisabled: boolean;
}

const FormAction = (props: FormActionProps) => {
  const { isDisabled } = props;

  return (
    <div className="bg-gray-900 px-5 py-3 flex gap-2 flex-row-reverse border-t border-t-gray-800">
      <SubmitButton label="Save" isDisabled={isDisabled} />
    </div>
  );
};

export default FormAction;
