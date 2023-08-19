import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { json } from 'react-router';
import analysisExpenses from '~/functions/analysisExpenses';
import { getExpenses } from '~/utils/expense.server';
import { requireUserId } from '~/utils/session.server';

export interface StatictisItemInterface {
  label: string;
  value: number;
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Analysis Expenses' },
    { name: 'description', content: 'Expenses analysis page' },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const expensesList = await getExpenses(userId);

  const data = analysisExpenses(expensesList);

  return json(data);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="">
        <h2 className="text-4xl font-semibold tracking-wide text-center mt-12 mb-16">
          Summary Statistic
        </h2>
        <ul className="grid grid-cols-2 gap-10 md:gap-0 md:grid-cols-4">
          {data.map((item: StatictisItemInterface) => (
            <li key={item.label}>
              <div className="flex flex-col border-l border-l-indigo-500 pl-5">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-semibold">{item.value}</span>
                  <span className="text-gray-400 font-normal">USD</span>
                </div>
                <span className="text-gray-400">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
