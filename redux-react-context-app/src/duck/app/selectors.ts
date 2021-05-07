import { useSelector } from 'react-redux';
import { IStore } from '../reducer';

export const AppSelectors = () => {
  const app = useSelector(({ app }: IStore) => app);
  return { ...app };
};
