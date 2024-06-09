import { Avatar, Dropdown, Flex, Layout, MenuProps } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { IconChevronDown } from '@tabler/icons-react';
import Cookies from 'js-cookie';

const Header = () => {
  const { Header } = Layout;
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    Cookies.remove('authentication');
    navigate('/login');
  };
  const items: MenuProps['items'] = [
    {
      label: 'Logout',
      key: '0',
      onClick: handleLogoutClick,
    },
  ];

  const authDataString = Cookies.get('authentication');
  const authData = authDataString ? JSON.parse(authDataString) : null;
  return (
    <Header className="header" style={{}}>
      <Flex align="center" justify="center">
        <Link to={'/'} className="header__logo-link">
          <h3 style={{ lineHeight: '0.4' }}>Task</h3>
          <h6 style={{ marginLeft: '8px' }}>Management</h6>
        </Link>
      </Flex>

      <div className="header__user-menu">
        <Dropdown menu={{ items }} trigger={['click']}>
          <Flex gap={12} align="center">
            <Avatar icon={<UserOutlined />} />

            <Flex align="center" gap={4}>
              <span style={{ lineHeight: '100%', textTransform: 'uppercase' }}>{authData?.name}</span>
              <IconChevronDown size={16} />
            </Flex>
          </Flex>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Header;
