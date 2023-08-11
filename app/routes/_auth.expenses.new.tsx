import type { ActionArgs, V2_MetaFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import { validationError } from 'remix-validated-form';
import ExpenseForm, { validator } from '~/components/expenses/ExpenseForm';
import Modal from '~/components/shared/Modal';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Expenses' },
    { name: 'description', content: 'Expenses creation page' },
  ];
};

export const action = async ({ request }: ActionArgs) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const result = await validator.validate(await request.formData());

  if (result.error) {
    return validationError(result.error);
  }

  console.log('result.data', result.data);

  return null;
};

export default function Index() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('..');
  };

  return (
    <>
      <Modal onClose={handleClose}>
        <ExpenseForm onClose={handleClose} title="Create expense" />
      </Modal>
    </>
  );
}
