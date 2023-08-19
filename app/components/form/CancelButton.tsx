import { useNavigate } from '@remix-run/react';

const CancelButton = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('..');
  };

  return (
    <button
      type="button"
      onClick={handleClose}
      className="inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-gray-100 shadow-sm ring-1 ring-inset ring-slate-700 hover:bg-gray-600 mt-0 w-auto"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
