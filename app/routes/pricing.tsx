import type { V2_MetaFunction } from '@remix-run/node';
import LinkButton from '~/components/shared/LinkButton';
import Logo from '~/components/shared/Logo';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix - Pricing' },
    { name: 'description', content: 'Welcome to Remix - Pricing page' },
  ];
};

export default function Index() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="flex flex-col justify-center items-center mt-20 mb-6 gap-6">
        <Logo />
        <h1 className="text-center text-3xl sm:text-4xl font-semibold tracking-wide">
          Save time on expense reports
        </h1>
        <p className="text-center max-w-xl text-gray-400">
          Cut down on fraud by conducting regular receipt audits and keeping an
          eye out for overstated or mischaracterized expenses.
        </p>
        <div className="border border-gray-700 rounded-2xl w-full bg-gray-900 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2">
            <div className="md:col-span-2 p-6">
              <h2 className="text-2xl font-semibold">Lifetime membership</h2>
              <p className="py-5 text-gray-400">
                Expense app is a simple but powerful expense management app
                that's designed to benefit small businesses just getting
                started, Fortune 500 companies with complex financial systems,
                and everything in between.
              </p>
              <span className="text-indigo-500 font-normal">
                What's included
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-3">
                <li className="flex gap-3">
                  <span className="text-indigo-500 font-thin">&#10004;</span>
                  <span>One-click receipt scanning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 font-thin">&#10004;</span>
                  <span>Automatic credit card import</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 font-thin">&#10004;</span>
                  <span>PCI-compliant security</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 font-thin">&#10004;</span>
                  <span>Customizable workflows</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 py-6 border border-indigo-500 rounded-xl bg-gray-800">
              <div className="flex flex-col gap-6 items-center justify-center text-center">
                <span className="text-gray-400">Pay once, own it forever</span>
                <div className="flex items-end gap-2">
                  <h2 className="text-5xl font-semibold">$19.99</h2>
                  <span className="text-gray-400 font-normal">USD</span>
                </div>
                <LinkButton linkTo="/login" label="Get access" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
