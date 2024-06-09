import { FC } from 'react';
interface SuccessNotificationInterface {
  title: string;
}
const SuccessNotification: FC<SuccessNotificationInterface> = ({ title }) => {
  return (
    <div className="success-notification">
      <h2>{title}</h2>
    </div>
  );
};

export default SuccessNotification;
