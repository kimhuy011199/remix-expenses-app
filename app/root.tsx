import type { PropsWithChildren } from 'react';
import { json, type LinksFunction, type LoaderArgs } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useMatches,
  useRouteError,
} from '@remix-run/react';
import { ToastContainer } from 'react-toastify';
import Background from './components/shared/Background';
import stylesheet from '~/tailwind.css';
import toastStylesheet from 'react-toastify/dist/ReactToastify.css';
import ServerError from './components/shared/ServerError';
import { getUser } from './utils/session.server';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: toastStylesheet },
];

export const loader = async ({ request }: LoaderArgs) => {
  return json({ user: await getUser(request) });
};

function Document({
  children,
  title = '',
}: PropsWithChildren<{ title?: string }>) {
  const matches = useMatches();
  const disabledJS = matches.some((item) => item?.handle?.disabledJS);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {title && <title>{title}</title>}
      </head>
      <body className="bg-[#111827] text-white font-light">
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          theme="dark"
        />
        <Background />
        <ScrollRestoration />
        {!disabledJS && <Scripts />}
        <LiveReload />
        {children}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    const notFoundMsg = error?.status === 404 ? 'NOT FOUND!' : '';
    return (
      <Document title="Error">
        <ServerError
          statusCode={error.status}
          msg={notFoundMsg || error?.data}
        />
      </Document>
    );
  }

  return (
    <Document title="Error">
      <ServerError statusCode={500} msg="Something went wrong" />
    </Document>
  );
}
