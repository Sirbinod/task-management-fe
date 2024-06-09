import { Table } from 'antd';
import { FC } from 'react';

interface ATableInterface {
  headers?: React.ReactNode;
  columns?: any;
  datas: Array<any>;
  rowSelection?: boolean;
  pagination?: any;
  onChange?: (e: any) => void;
}

const ATable: FC<ATableInterface> = ({ headers, columns, datas, rowSelection = false, pagination, onChange }) => {
  return (
    <div className="table-wrapper">
      <div className="table-header">{headers}</div>
      <div className="table-conatin">
        <Table
          // scroll={{ x: 600, y: 500 }}
          rowSelection={rowSelection ? { checkStrictly: rowSelection } : undefined}
          columns={columns}
          dataSource={datas}
          pagination={pagination || false}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ATable;
