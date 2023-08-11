import { ValidatedForm } from 'remix-validated-form';
import { withZod } from '@remix-validated-form/with-zod';
import { z } from 'zod';
import Input from '../form/Input';
import FormAction from '../form/FormAction';

export const validator = withZod(
  z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    amount: z.coerce
      .number({
        required_error: 'Amount is required',
        invalid_type_error: 'Amount must be a number',
      })
      .positive({ message: 'Amount must be a positive number' }),
  })
);

interface ExpenseFormProps {
  onClose: () => void;
  title: string;
  defaultValue?: any;
}

const ExpenseForm = (props: ExpenseFormProps) => {
  const { onClose, defaultValue, title } = props;

  return (
    <ValidatedForm
      validator={validator}
      method="post"
      defaultValues={defaultValue}
    >
      <div className="px-5 py-4 flex border-b border-gray-800 bg-gray-900">
        <h2 className="text-lg">{title}</h2>
      </div>
      <div className="bg-gray-900 px-5 pb-6 pt-4 flex flex-col gap-2">
        <Input name="title" label="Title" iconSrc="/assets/title.svg" />
        <Input name="amount" label="Amount" iconSrc="/assets/amount.svg" />
      </div>
      <FormAction onClose={onClose} />
    </ValidatedForm>
  );
};

export default ExpenseForm;
