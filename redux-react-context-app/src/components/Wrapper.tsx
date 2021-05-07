import { useCustomContext } from '../hooks/useCustomContext';

export const Wrapper = () => {
  const { is_logged_in } = useCustomContext();

  return (
    <div>
      {is_logged_in}
    </div>
  );
}
