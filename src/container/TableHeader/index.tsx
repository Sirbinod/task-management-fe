import { FC } from 'react';
import FormSelect from '../../components/Select';
import { IconX } from '@tabler/icons-react';
import { SortingType } from '../../interfaces/general';

interface TableHeaderInterface {
  title?: string;
  tab?: React.ReactNode;
  search?: React.ReactNode;
  search2?: React.ReactNode;
  handleClear: () => void;
  sortKey: string;
  setSortKey: (e: SortingType) => void;
  sortOption?: Array<{ label: string; value: string }>;
}

const TableHeader: FC<TableHeaderInterface> = ({
  title,
  tab,
  search,
  search2,
  handleClear,
  sortKey,
  sortOption,
  setSortKey,
}) => {
  return (
    <div className="table-header-wrapper">
      {tab}
      <div className="table-header-left">
        <h3 className="table-header-title">{title}</h3>
        {search && search}
      </div>
      <div className="table-header-right">
        {search2 && search2}
        <span className="sort-title">Sort By:</span>
        <FormSelect
          name="sort"
          placeholder="Latest First"
          options={sortOption}
          defaultValue={sortKey}
          handleChange={(value) => setSortKey(value)}
          allowClear={false}
        />

        <div className="clear-all" onClick={handleClear}>
          <IconX size={16} />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
