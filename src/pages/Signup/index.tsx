import { Flex, Form, notification } from 'antd';
import FormInput from '../../components/Input';
import ButtonComponent from '../../components/Button';
import { useState } from 'react';
import { apiRequest } from '../../requests';
import { useNavigate } from 'react-router-dom';
import { API_LIST, API_METHODS } from '../../requests/apiList';

const Login = () => {
  const navigate = useNavigate();
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const RenderForm = () => {
    const [form] = Form.useForm();

    const handleSubmit = async (values: any) => {
      try {
        setIsLoad(true);
        const response = await apiRequest({ url: `${API_LIST.auth}/signup`, method: API_METHODS.post }, values);
        if (response.data.status) {
          notification.success({ message: response.data.message });
          navigate('/login', { replace: true });
        } else notification.error({ message: response.data.message });
        setIsLoad(false);
      } catch (error) {
        setIsLoad(false);
      }
    };
    return (
      <div className="login-form-wrapper">
        <div className="title-top-bar">
          <span className="title-top-bar__left"></span>
          <span className="title-top-bar__right"></span>
        </div>
        <h3>Login</h3>
        <Form onFinish={handleSubmit} form={form}>
          <Flex className="login-form-content" vertical gap={24}>
            <FormInput
              name="name"
              type="text"
              placeholder="Enter Full Name"
              required
              errorMsg="Please enter email!"
              // handleChange={(value) => setEmail(value)}
            />
            <FormInput
              name="email"
              type="text"
              placeholder="Enter email"
              required
              errorMsg="Please enter email!"
              // handleChange={(value) => setEmail(value)}
            />
            <FormInput
              name="password"
              type="password"
              placeholder="Enter Password"
              required
              errorMsg="please enter password!"
              // handleChange={(value) => setPassword(value)}
            />
            <ButtonComponent
              children="LOGIN"
              type="primary"
              className="vehicleImage_button"
              htmlType="submit"
              size="lg"
              loading={isLoad}
              // disabled={!email && !password ? true : false}
            />
          </Flex>
          <p style={{ textAlign: 'center', marginTop: '8px' }}>
            Already member? <a onClick={() => navigate('/login')}>Login</a>
          </p>
        </Form>
      </div>
    );
  };
  return (
    <div className="login">
      <div className="login_contain">
        <div className="login_contain__left">
          <div style={{ color: '#fff' }}>
            <h1 style={{ lineHeight: '0.4' }}>Task</h1>
            <h3 style={{ marginLeft: '8px' }}>Management</h3>
          </div>
        </div>
        <div className="login_contain__right">
          <RenderForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
