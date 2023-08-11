import { Link } from '@remix-run/react';

const Logo = () => {
  return (
    <Link to="/" className="text-xl text-indigo-500 flex items-center gap-1">
      <img className="w-6 h-6" src="/assets/logo.svg" alt="Logo" />
      <span className="text-indigo-500 font-semibold">EXPENSES</span>
    </Link>
  );
};

export default Logo;
