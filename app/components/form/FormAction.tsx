import { useIsSubmitting } from 'remix-validated-form';
import SubmitButton from './SubmitButton';

interface FormActionProps {
  onClose: () => void;
}

const FormAction = (props: FormActionProps) => {
  const { onClose } = props;
  const isSubmitting = useIsSubmitting();

  return (
    <div className="bg-gray-900 px-5 py-3 flex gap-2 flex-row-reverse border-t border-t-gray-800">
      <SubmitButton label="Save" isSubmitting={isSubmitting} />
      <button
        type="button"
        onClick={onClose}
        className="inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-gray-100 shadow-sm ring-1 ring-inset ring-slate-700 hover:bg-gray-600 mt-0 w-auto"
      >
        Cancel
      </button>
    </div>
  );
};

export default FormAction;
