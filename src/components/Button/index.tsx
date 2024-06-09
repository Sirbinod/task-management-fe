import { Button } from 'antd';

interface Props {
  type: 'primary' | 'secondary' | 'tertiary' | 'fourthiary';
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  loading?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
}

const ButtonComponent = ({
  type = 'primary',
  children,
  disabled = false,
  className,
  size = 'lg',
  loading = false,
  onClick,
  htmlType = 'submit',
}: Props) => {
  return (
    <Button
      disabled={disabled}
      className={`button-wrapper 
      ${
        type === 'primary'
          ? 'button-primary'
          : type === 'secondary'
          ? 'button-secondary'
          : type === 'tertiary'
          ? 'button-ternary'
          : 'button-fourthiary'
      }
      ${size === 'sm' ? 'btn-sm' : size === 'md' ? 'btn-md' : 'btn-lg'}
      ${className ?? ''}`}
      onClick={onClick}
      htmlType={htmlType}
      loading={loading}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
