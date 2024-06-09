import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { AppRoutes } from './routes';

const App: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
          className="spin"
        >
          <Spin size="large" />
        </div>
      }
    >
      <AppRoutes />
    </Suspense>
  );
};

export default App;
