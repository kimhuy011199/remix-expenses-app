import { json, redirect } from '@remix-run/node';
import type { LoaderArgs, ActionArgs, V2_MetaFunction } from '@remix-run/node';
import { compare } from 'bcryptjs';
import { validationError } from 'remix-validated-form';
import AuthForm, { validator } from '~/components/auth/AuthForm';
import { createUserSession, getUserId } from '~/utils/session.server';
import { getUser } from '~/utils/user.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix - Login' },
    { name: 'description', content: 'Welcome to Remix - Login page' },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect('/expenses');
  }
  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const redirectTo = formData.get('redirectTo')?.toString() || '/expenses';

  const result = await validator.validate(formData);

  if (result.error) {
    return validationError(result.error);
  }

  const { username, password } = result.data;
  const user = await getUser(username);

  if (!user) {
    return json({ msg: 'User is not existed' }, { status: 401 });
  }

  const isCorrectPassword = await compare(password, user.password);

  if (!isCorrectPassword) {
    return json({ msg: 'Password does not match' }, { status: 400 });
  }

  return createUserSession({
    redirectTo,
    remember: false,
    request,
    userId: user.id,
  });
};

export default function Index() {
  return (
    <AuthForm
      action="/login"
      heading="Login to continue"
      optionText="Don't have an account?"
      optionAction="Register"
      optionLink="/register"
      btnLabel="Login"
    />
  );
}
