import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Analysis Expenses' },
    { name: 'description', content: 'Expenses analysis page' },
  ];
};

const DATA = [
  { label: 'Total Amount', value: '222.9' },
  { label: 'Average Amount', value: '12.9' },
  { label: 'Min. Amount', value: '30.5' },
  { label: 'Max. Amount', value: '12.5' },
];

export default function Index() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="mt-10">
        <h2>Summary Statistic</h2>
        <ul className="grid grid-cols-4">
          {DATA.map((item) => (
            <li key={item.value}>
              <div className="flex flex-col">
                <div className="flex items-end gap-2">
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
