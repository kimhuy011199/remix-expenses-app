import { useRouteLoaderData } from '@remix-run/react';

function isUser(user: any) {
  return user && typeof user === 'object' && typeof user.username === 'string';
}

export function useUser() {
  const rootLoaderData = useRouteLoaderData('root');

  if (!rootLoaderData || !isUser(rootLoaderData.user)) {
    return undefined;
  }
  return rootLoaderData.user;
}
