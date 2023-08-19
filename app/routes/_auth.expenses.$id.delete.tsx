import { json, type LoaderArgs, type V2_MetaFunction } from '@remix-run/node';
import { useFetcher, useParams } from '@remix-run/react';
import CancelButton from '~/components/form/CancelButton';
import SubmitButton from '~/components/form/SubmitButton';
import Modal from '~/components/shared/Modal';
import { requireUserId } from '~/utils/session.server';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Delete Expenses' },
    { name: 'description', content: 'Expenses deletion page' },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);
  return json({});
};

export default function Index() {
  const params = useParams();
  const fetcher = useFetcher();
  const isDisabled = fetcher.state !== 'idle';

  const handleDeleteExpense = async () => {
    fetcher.submit(null, {
      method: 'delete',
      action: `/expenses/${params.id}`,
    });
  };

  return (
    <>
      <Modal>
        <div className="px-5 flex flex-col justify-between items-center bg-gray-900 py-8">
          <span className="mb-6">Are you sure to delete this expense?</span>
          <div className="flex gap-3">
            <CancelButton />
            <SubmitButton
              label="Yes"
              isDisabled={isDisabled}
              handleClick={handleDeleteExpense}
              type="button"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
