import type { V2_MetaFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/shared/Modal';
import { DUMMY_EXPENSES } from './_auth.expenses';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Edit Expenses' },
    { name: 'description', content: 'Expenses edition page' },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('..');
  };

  return (
    <>
      <Modal onClose={handleClose}>
        <ExpenseForm
          onClose={handleClose}
          title="Create expense"
          defaultValue={DUMMY_EXPENSES[1]}
        />
      </Modal>
    </>
  );
}
