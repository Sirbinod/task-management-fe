import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import ProviderWrapper from './redux/StoreProvider';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider direction="ltr">
      <ProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProviderWrapper>
    </ConfigProvider>
  </React.StrictMode>,
);
