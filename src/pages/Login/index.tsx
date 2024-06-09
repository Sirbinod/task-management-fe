import { Checkbox, Flex, Form, notification } from 'antd';
import FormInput from '../../components/Input';
import ButtonComponent from '../../components/Button';
import { useState } from 'react';
import { apiRequest } from '../../requests';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { API_LIST, API_METHODS } from '../../requests/apiList';

const Login = () => {
  const navigate = useNavigate();
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const RanderForm = () => {
    const [form] = Form.useForm();
    // const [email, setEmail] = useState<string>();
    // const [password, setPassword] = useState<string>();
    const [isRemember, setIsRemember] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
      try {
        setIsLoad(true);
        const response = await apiRequest({ url: `${API_LIST.auth}/login`, method: API_METHODS.post }, values);
        if (response.data.status) {
          const { token, name, role } = response?.data?.data;
          const newObj = {
            isLogged: true,
            token,
            name,
            role,
          };

          if (isRemember) Cookies.set('authentication', JSON.stringify(newObj), { expires: 1 });
          else Cookies.set('authentication', JSON.stringify(newObj));

          notification.success({ message: response.data.message });
          navigate('/', { replace: true });
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

            <div className="remember-me">
              <Checkbox className="check-box" id="rememberMe" onChange={(e) => setIsRemember(e.target.checked)} />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
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
            Not a member? <a onClick={() => navigate('/signup')}>Sign Up</a>
          </p>
        </Form>
      </div>
    );
  };
  return (
    <div className="login">
      <div className="login_contain">
        <div className="login_contain__left">
          <div>
            <h1 style={{ lineHeight: '0.4' }}>Task</h1>
            <h3 style={{ marginLeft: '8px' }}>Management</h3>
          </div>
        </div>
        <div className="login_contain__right">
          <RanderForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
