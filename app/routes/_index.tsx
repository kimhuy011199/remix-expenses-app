import { type V2_MetaFunction } from '@remix-run/node';
import LinkButton from '~/components/shared/LinkButton';
import Logo from '~/components/shared/Logo';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Remix - Expense App' },
    {
      name: 'description',
      content:
        'Our cutting-edge expense tracking app empowers you to take control of your finances. Say goodbye to the hassle of manual tracking and hello to streamlined expense management.',
    },
  ];
};

export default function Index() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 lg:mt-40 gap-10">
        <div className="flex flex-col gap-6">
          <Logo />
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide">
            Simplify your finances with expenses app
          </h1>
          <p>
            Our cutting-edge expense tracking app empowers you to take control
            of your finances. Say goodbye to the hassle of manual tracking and
            hello to streamlined expense management.
          </p>
          <div className="md:mt-3 flex gap-3">
            <LinkButton linkTo="/expenses" label="Get started" />
            <LinkButton
              linkTo="/pricing"
              label="See pricing"
              variant="outline"
            />
          </div>
        </div>
        <div className="mx-auto w-full md:w-4/5 lg:w-full overflow-hidden rounded-2xl border border-gray-800 shadow">
          <img className="" src="/assets/home.png" alt="Home" />
        </div>
      </div>
    </div>
  );
}

export const handle = { disabledJS: true };
