import { Link, useActionData, useSearchParams } from '@remix-run/react';
import { withZod } from '@remix-validated-form/with-zod';
import { ValidatedForm, useIsSubmitting } from 'remix-validated-form';
import { z } from 'zod';
import Logo from '../shared/Logo';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

interface AuthFormProps {
  action: string;
  heading: string;
  optionText: string;
  optionAction: string;
  btnLabel: string;
  optionLink: string;
}

export const validator = withZod(
  z.object({
    username: z
      .string()
      .min(6, { message: 'Username must be at least 6 characters' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
  })
);

const AuthForm = (props: AuthFormProps) => {
  const { action, heading, optionText, optionAction, btnLabel, optionLink } =
    props;
  const actionData = useActionData();
  const isSubmitting = useIsSubmitting('auth-form');
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/expenses';

  return (
    <div className="mx-auto max-w-sm w-full">
      <ValidatedForm
        validator={validator}
        method="post"
        action={action}
        id="auth-form"
      >
        <div className="px-5 py-3 flex flex-col items-center justify-center mt-20 gap-8">
          <Logo />
          <h2 className="text-center font-normal text-2xl">{heading}</h2>
        </div>
        <div className="px-5 py-3 flex flex-col gap-3">
          <Input
            name="username"
            label="Username"
            iconSrc="/assets/user.svg"
            placeholder="Username"
          />
          <Input
            name="password"
            label="Password"
            iconSrc="/assets/password.svg"
            type="password"
            placeholder="Password"
          />
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <SubmitButton label={btnLabel} isDisabled={isSubmitting} />
        </div>
      </ValidatedForm>
      {actionData?.msg && (
        <div className="px-5 py-2">
          <span className="flex justify-center text-center font-normal px-3 py-2 bg-red-500 text-white border border-red-600 rounded-md">
            {actionData?.msg}
          </span>
        </div>
      )}
      <div className="flex justify-center text-center gap-2 mt-2">
        <span>{optionText}</span>
        <Link className="text-indigo-500 font-normal" to={optionLink}>
          {optionAction}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
