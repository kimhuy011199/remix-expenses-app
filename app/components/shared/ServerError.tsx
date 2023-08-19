import { Link } from '@remix-run/react';

interface ServerErrorProps {
  statusCode: number;
  msg: string;
}

const ServerError = (props: ServerErrorProps) => {
  const { statusCode, msg } = props;
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center text-center gap-4 mt-20">
      <h2 className="text-4xl text-gray-400">{statusCode}</h2>
      <span className="text-5xl font-semibold uppercase">{msg}</span>
      <Link className="text-indigo-500 font-normal text-xl" to="/">
        Go to home
      </Link>
    </div>
  );
};

export default ServerError;
