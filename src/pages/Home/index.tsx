import { Form, Space, Tooltip, Typography } from 'antd';
import ButtonComponent from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import ATable from '../../components/Table';
import { IconEdit, IconSearch, IconTrash } from '@tabler/icons-react';
import { SortingType } from '../../interfaces/general';

import { useEffect, useState } from 'react';

import FormInput from '../../components/Input';
import TableHeader from '../../container/TableHeader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, fetchData, selectTasksState } from '../../redux/features/taskSlice';
import TaskForm from '../../container/TaskForm';
import TaskUpdate from '../../container/TaskUpdate';
import { sortingOption } from '../../utils/options';
const { Text } = Typography;

const TaskList = () => {
  const [taskStatus, setTaskStatus] = useState('InProgress');
  const [openUpdate, setOpenUpdate] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState(false);
  const [updateData, setUpdateData] = useState<any>();
  const [searchKey, setSearchKey] = useState<string>('');
  const [sortKey, setSortKey] = useState<SortingType>('title_desc');
  const [pagination, setPagination] = useState<{ page: number; limit: number }>({ page: 1, limit: 10 });
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const { loading, error, data: tasks } = useSelector(selectTasksState);
  console.log(loading, error, tasks);

  useEffect(() => {
    dispatch(
      fetchData(
        `status=${taskStatus}&search=${searchKey}&sort=${sortKey}&page=${pagination.page}&pageSize=${pagination?.limit}`,
      ) as any,
    );
  }, [taskStatus, searchKey, sortKey, pagination]);

  const handleDelete = async (id: number) => {
    dispatch(deleteData(id) as any);
  };

  const handleEdit = async (item: any) => {
    setOpenUpdate(true);
    setUpdateData(item);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      width: 400,
    },
    {
      title: 'description',
      dataIndex: 'description',
      width: 260,
    },

    {
      title: 'status',
      dataIndex: 'status',
      width: 200,
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      width: 300,
    },

    {
      title: 'Archived',
      dataIndex: 'isArchived',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      fixed: 'right',
      width: 120,
    },
  ];

  const data = tasks?.tasks || [];
  const dataSource = data?.map((item: any, index: number) => ({
    key: index,
    title: item?.title,
    description: (
      <Tooltip placement="top">
        <Text ellipsis style={{ width: '250px' }}>
          {item?.description}
        </Text>
      </Tooltip>
    ),
    status: item?.status,
    dueDate: item?.dueDate,
    isArchived: item?.isArchived,

    actions: (
      <Space>
        <IconEdit style={{ cursor: 'pointer' }} size={20} onClick={() => handleEdit(item)} />
        <IconTrash size={20} style={{ cursor: 'pointer', color: 'red' }} onClick={() => handleDelete(item?.id)} />
      </Space>
    ),
  }));

  const changeStatus = (e: string) => {
    if (e !== taskStatus) setTaskStatus(e);
  };

  const handleSearch = (e: any) => {
    setSearchKey(e.target.value);
    setPagination((preState) => ({ ...preState, page: 1, limit: 10 }));
  };

  const handleClear = () => {
    setSortKey('title_desc');
    setSearchKey('');
    form.resetFields();
  };

  const handlePagination = (pagination: any) => {
    setPagination((preState) => ({ ...preState, page: pagination.current, limit: pagination.pageSize }));
  };

  const TaskTableHeader = () => {
    return (
      <div className="task__header">
        <div className="task__header__contain">
          <ButtonComponent
            type="tertiary"
            className={taskStatus === 'InProgress' ? 'status-btn status-active' : 'status-btn'}
            onClick={() => changeStatus('InProgress')}
            children="Inprogress"
            size="sm"
          />
          <ButtonComponent
            type="tertiary"
            className={taskStatus === 'Pending' ? 'status-btn status-active' : 'status-btn'}
            onClick={() => changeStatus('Pending')}
            children="Pending"
            size="sm"
          />
          <ButtonComponent
            type="tertiary"
            className={taskStatus === 'Completed' ? 'status-btn status-active' : 'status-btn'}
            onClick={() => changeStatus('Completed')}
            children="Completed"
            size="sm"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="task">
        <PageHeader
          title="Task List"
          button={
            <ButtonComponent
              type="primary"
              className="form-buttons__child"
              onClick={() => setOpenForm(true)}
              children="Add Task"
              size="sm"
            />
          }
        />
        <ATable
          headers={
            <Form form={form}>
              <TableHeader
                handleClear={handleClear}
                setSortKey={setSortKey}
                sortKey={sortKey}
                tab={<TaskTableHeader />}
                sortOption={sortingOption}
                search2={
                  <FormInput
                    name="search"
                    icon={<IconSearch size={16} />}
                    placeholder="input search text"
                    handleChange={handleSearch}
                  />
                }
              />
            </Form>
          }
          datas={dataSource}
          columns={columns}
          pagination={{
            current: pagination.page,
            pageSize: pagination.limit,
            total: tasks?.totalPages,
          }}
          onChange={handlePagination}
        />
      </div>
      {openUpdate && updateData && <TaskUpdate open={openUpdate} setOpen={setOpenUpdate} data={updateData} />}
      {openForm && <TaskForm open={openForm} setOpen={setOpenForm} />}
    </>
  );
};

export default TaskList;
