import { useNavigate } from '@remix-run/react';
import type { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const { children } = props;
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('..');
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div className="fixed inset-0 bg-gray-800 bg-opacity-90 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-hidden">
        <div className="flex min-h-full justify-center text-center items-center p-0">
          <div
            className="relative transform overflow-hidden w-96 rounded-lg bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            onClick={(event) => event.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
