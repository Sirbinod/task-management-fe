import { FC } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const TLayout: FC = () => {
  return (
    <Layout>
      <Header />
      <Layout>
        <div style={{ width: '100%', padding: '3rem 3.2rem' }}>
          <Content>
            <Outlet />
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};

export default TLayout;
