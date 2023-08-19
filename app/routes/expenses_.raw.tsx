import { json } from '@remix-run/node';
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { getExpenses } from '~/utils/expense.server';
import { requireUserId } from '~/utils/session.server';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Raw expenses data' }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const expensesList = await getExpenses(userId);

  const data = expensesList.map((item) => {
    const { userId, ...expense } = item;
    return expense;
  });

  return json(data);
};
