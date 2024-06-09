import { FC } from 'react';
import { Form, Switch } from 'antd';

interface SwitchProps {
  label: string;
  name: string;
}

const SwitchInput: FC<SwitchProps> = ({ label, name, ...switchProps }) => (
  <Form.Item label={label} name={name}>
    <Switch {...switchProps} />
  </Form.Item>
);

export default SwitchInput;
