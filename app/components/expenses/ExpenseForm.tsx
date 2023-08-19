import { Link } from '@remix-run/react';
import { ValidatedForm, useIsSubmitting } from 'remix-validated-form';
import { withZod } from '@remix-validated-form/with-zod';
import { z } from 'zod';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import CancelButton from '../form/CancelButton';
import validateDate from '~/functions/validateDate';

export const validator = withZod(
  z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    amount: z.coerce
      .number({
        required_error: 'Amount is required',
        invalid_type_error: 'Amount must be a number',
      })
      .positive({ message: 'Amount must be a positive number' }),
    date: z.string().refine(validateDate, {
      message: 'Invalid date',
    }),
  })
);

interface ExpenseFormProps {
  title: string;
  defaultValue?: any;
}

const ExpenseForm = (props: ExpenseFormProps) => {
  const { defaultValue, title } = props;
  const isDisabled = useIsSubmitting('form');

  return (
    <>
      <div className="px-5 py-4 flex justify-between items-center border-b border-gray-800 bg-gray-900">
        <h2 className="text-lg font-normal">{title}</h2>
        {defaultValue?.title && (
          <Link className="text-red-500 hover:text-red-400" to="delete">
            Delete
          </Link>
        )}
      </div>
      <ValidatedForm
        id="form"
        validator={validator}
        method={defaultValue?.title ? 'patch' : 'post'}
        defaultValues={defaultValue}
      >
        <div className="bg-gray-900 px-5 pb-6 pt-4 flex flex-col gap-2">
          <Input
            name="title"
            label="Title"
            iconSrc="/assets/title.svg"
            placeholder="Expense title"
          />
          <Input
            name="amount"
            label="Amount"
            iconSrc="/assets/amount.svg"
            placeholder="Expense amount"
          />
          <Input
            name="date"
            label="Date"
            iconSrc="/assets/date.svg"
            placeholder="DD-MM-YYYY"
          />
        </div>
        <div className="bg-gray-900 px-5 py-3 flex gap-2 flex-row-reverse border-t border-t-gray-800">
          <SubmitButton label="Save" isDisabled={isDisabled} />
          <CancelButton />
        </div>
      </ValidatedForm>
    </>
  );
};

export default ExpenseForm;
