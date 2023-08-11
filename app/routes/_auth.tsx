import { Outlet } from '@remix-run/react';
import AuthenticatedNavigation from '~/components/navigation/AuthenticatedNavigation';

export default function Index() {
  return (
    <>
      <AuthenticatedNavigation />
      <Outlet />
    </>
  );
}
