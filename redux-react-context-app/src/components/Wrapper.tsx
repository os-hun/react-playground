import { useCustomContext } from '../hooks/useCustomContext';

export const Wrapper = () => {
  const { user } = useCustomContext();

  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
}
