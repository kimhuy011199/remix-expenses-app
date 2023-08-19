import { hash } from 'bcryptjs';
import { json, redirect } from '@remix-run/node';
import type { LoaderArgs, ActionArgs, V2_MetaFunction } from '@remix-run/node';
import { validationError } from 'remix-validated-form';
import AuthForm, { validator } from '~/components/auth/AuthForm';
import { createUser, getUser } from '~/utils/user.server';
import { createUserSession, getUserId } from '~/utils/session.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix - Register' },
    { name: 'description', content: 'Welcome to Remix - Register page' },
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

  if (user) {
    return json({ msg: 'User is existed' }, { status: 422 });
  }

  const hashedPassword = await hash(password, 12);
  const userData = { username, password: hashedPassword };
  const createdUser = await createUser(userData);

  return createUserSession({
    request,
    userId: createdUser.id,
    remember: false,
    redirectTo,
  });
};

export default function Index() {
  return (
    <>
      <AuthForm
        action="/register"
        heading="Create new account"
        optionText="Already have an account?"
        optionAction="Login"
        optionLink="/login"
        btnLabel="Register"
      />
    </>
  );
}
