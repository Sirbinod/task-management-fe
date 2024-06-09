import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const ProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
