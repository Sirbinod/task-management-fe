import { Modal } from 'antd';
import { FC } from 'react';
import ButtonComponent from '../Button';

interface PageHeaderInterface {
  children: React.ReactNode;
  open: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  width?: number;
  cancelBtn?: string;
  submitBtn?: string;
  className?: string;
}

const AModal: FC<PageHeaderInterface> = ({
  children,
  open,
  onCancel,
  onSubmit,
  width,
  cancelBtn,
  submitBtn,
  className,
}) => {
  return (
    <Modal width={width ? width : 639} open={open} closable={false} footer={null} className={className}>
      {children}
      <div className="model-btn">
        <ButtonComponent
          type="secondary"
          className="form-buttons__child"
          onClick={onCancel}
          children={cancelBtn || 'Cancel'}
        />
        <ButtonComponent
          type="primary"
          className="form-buttons__child"
          onClick={onSubmit}
          children={submitBtn || 'Next'}
        />
      </div>
    </Modal>
  );
};

export default AModal;
