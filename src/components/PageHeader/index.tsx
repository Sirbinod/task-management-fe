import { FC } from 'react';

interface PageHeaderInterface {
  title: string;
  button?: React.ReactNode;
}

const PageHeader: FC<PageHeaderInterface> = ({ title, button }) => {
  return (
    <div className="page-header">
      <h1 className="page-title">{title}</h1>
      {button}
    </div>
  );
};

export default PageHeader;
