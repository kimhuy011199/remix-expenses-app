import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { withZod } from '@remix-validated-form/with-zod';
import { ValidatedForm } from 'remix-validated-form';
import { z } from 'zod';
import Input from '~/components/form/Input';
import SubmitButton from '~/components/form/SubmitButton';
import Logo from '~/components/shared/Logo';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix - Login' },
    { name: 'description', content: 'Welcome to Remix - Login page' },
  ];
};

export const validator = withZod(
  z.object({
    username: z.string().min(1, { message: 'Username is required' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
  })
);

export default function Index() {
  return (
    <div className="mx-auto max-w-sm w-full">
      <ValidatedForm validator={validator} method="post">
        <div className="px-5 py-3 flex flex-col items-center justify-center mt-20 gap-8">
          <Logo />
          <h2 className="text-center font-normal text-2xl">
            Login to your account
          </h2>
        </div>
        <div className="px-5 py-3 flex flex-col gap-3">
          <Input name="username" label="Username" iconSrc="/assets/user.svg" />
          <Input
            name="password"
            label="Password"
            iconSrc="/assets/password.svg"
          />
          <SubmitButton label="Login" isSubmitting={false} />
        </div>
      </ValidatedForm>
      <div className="flex justify-center text-center gap-2 mt-2">
        <span>Not a member?</span>
        <Link className="text-indigo-500 font-normal" to="/register">
          Create new account
        </Link>
      </div>
    </div>
  );
}
