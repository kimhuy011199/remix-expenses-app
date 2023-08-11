import { Link } from '@remix-run/react';

interface LinkButtonProps {
  label: string;
  linkTo: string;
  variant?: 'primary' | 'outline' | 'danger';
}

const LinkButton = (props: LinkButtonProps) => {
  const { label, linkTo, variant = 'primary' } = props;

  const defaultBtnCssClass =
    'font-normal inline-flex gap-2 justify-center rounded-md px-4 py-2 w-auto ';

  const getCssClass = () => {
    switch (variant) {
      case 'outline':
        return 'text-white hover:text-indigo-500';

      case 'danger':
        return 'text-white bg-red-500 shadow-sm hover:bg-red-400';

      default:
        return 'text-white bg-indigo-500 shadow-sm hover:bg-indigo-400';
    }
  };

  return (
    <Link className={defaultBtnCssClass + getCssClass()} to={linkTo}>
      {label}
    </Link>
  );
};

export default LinkButton;
