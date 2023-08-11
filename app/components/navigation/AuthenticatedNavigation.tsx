import { NavLink } from '@remix-run/react';

export interface NavLinkInterface {
  id: number;
  label: string;
  link: string;
}

const AuthenticatedNavigation = () => {
  const navLinks: NavLinkInterface[] = [
    { id: 1, label: 'Manage Expenses', link: '/expenses' },
    { id: 2, label: 'Analyze Expenses', link: '/expenses/analyze' },
  ];

  return (
    <div className="border-b border-b-gray-800 bg-[#111827]">
      <div className="w-full mx-auto max-w-4xl flex justify-between">
        <div></div>
        <nav>
          <ul className="flex gap-10">
            {navLinks.map((item: NavLinkInterface) => (
              <li key={item.id} className="py-4">
                <NavLink
                  className="py-4 text-gray-400 hover:text-gray-200 hover:border-b-[3px] hover:border-b-gray-200"
                  to={item.link}
                  end
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div></div>
      </div>
    </div>
  );
};

export default AuthenticatedNavigation;
