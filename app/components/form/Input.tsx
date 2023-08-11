import { useField } from 'remix-validated-form';

type InputProps = {
  name: string;
  label: string;
  iconSrc: string;
};

const Input = (props: InputProps) => {
  const { name, label, iconSrc } = props;
  const { error, getInputProps } = useField(name);

  return (
    <div>
      <label htmlFor={name} className="block leading-6 text-gray-200">
        {label}
      </label>
      <div className="relative mt-1.5 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img className="w-5 h-5" src={iconSrc} alt="alt" />
        </div>
        <input
          type="text"
          name={name}
          id={name}
          className={`bg-slate-800 block w-full rounded-md border-0 py-1.5 px-3 pl-10 text-gray-100 ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-inset ${
            error
              ? 'ring-red-400 focus:ring-red-400'
              : 'ring-gray-700 focus:ring-indigo-500'
          }`}
          {...getInputProps({ id: name })}
        />
      </div>
      <div className="mt-1">
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </div>
  );
};

export default Input;
