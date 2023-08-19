import { isRouteErrorResponse, useRouteError } from '@remix-run/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export function ToastError() {
  const error = useRouteError();

  const notify = () => {
    let message = 'Something went wrong';
    if (isRouteErrorResponse(error)) {
      message = error?.data;
    }
    if (error instanceof Error) {
      message = error.message;
    }

    toast(message, { type: 'error' });
  };

  useEffect(() => {
    notify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
