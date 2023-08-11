import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Raw expenses data' }];
};

export const loader = async () => {
  const raw = [];

  return raw;
};
