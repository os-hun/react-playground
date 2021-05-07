import { useCustomContext } from '../hooks/useCustomContext';

export const Wrapper = () => {
  const { user } = useCustomContext();

  return (
    <div>
      {user && (
        <div>
          {user.name}<br/>
          {user.email}
        </div>
      )}
    </div>
  );
}
