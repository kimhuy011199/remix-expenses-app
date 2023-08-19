import { NavLink, useSubmit } from '@remix-run/react';
import Logo from '../shared/Logo';
import { useUser } from '~/hooks/useRootUser';

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

  const submit = useSubmit();
  const user = useUser();

  const handleLogout = () => {
    submit(null, {
      method: 'post',
      action: '/logout',
    });
  };

  return (
    <div className="border-b border-b-gray-800 bg-[#111827] py-4 md:py-0">
      <div className="w-full mx-auto max-w-4xl flex justify-between items-center px-4">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="hidden md:flex gap-10">
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
        <div className="flex gap-2">
          <span className="font-normal">{user.username}</span>
          <button
            className="text-gray-400 hover:text-gray-100"
            onClick={handleLogout}
          >
            (logout)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedNavigation;
