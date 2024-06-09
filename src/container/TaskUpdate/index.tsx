import { FC, useEffect } from 'react';
import AModal from '../../components/Modal';
import { Col, Form, Row } from 'antd';
import FormInput from '../../components/Input';
import DatePickerInput from '../../components/DatePicker';
import { disabledDate, disabledTime } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { updateData } from '../../redux/features/taskSlice';
import FormSelect from '../../components/Select';
import { statusOpt } from '../../utils/options';
import SwitchInput from '../../components/Switch';
import dayjs from 'dayjs';

interface TaskUpdateInterface {
  open: boolean;
  setOpen: (e: boolean) => void;
  data: any;
}

const TaskUpdate: FC<TaskUpdateInterface> = ({ open, setOpen, data }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      const { id, dueDate, ...rest } = data;
      const newObj = { dueDate: dayjs(data.dueDate), ...rest };

      form.setFieldsValue(newObj);
    }
  }, []);

  const handelSubmit = () => {
    form.validateFields().then(async (values: any) => {
      try {
        const newObj = { id: data?.id, ...values };
        dispatch(updateData(newObj) as any);
        setOpen(false);
      } catch (error) {
        console.error('Failed to update data:', error);
      }
    });
  };
  return (
    <AModal
      open={open}
      width={515}
      cancelBtn="Cancel"
      submitBtn="Done"
      onCancel={() => {
        setOpen(false);
      }}
      onSubmit={handelSubmit}
    >
      <Form form={form} layout="vertical">
        <div className="update-task">
          <Row gutter={[16, 16]} className="update-task__form">
            <Col xs={24}>
              <FormInput
                label="Title:"
                placeholder="Enter Title"
                name="title"
                type="text"
                required
                errorMsg="Please enter title!"
              />
            </Col>
            <Col xs={24}>
              <FormInput
                label="Description:"
                name="description"
                type="textarea"
                required
                placeholder="Enter Description"
                errorMsg="Please enter description!"
              />
            </Col>
            <Col xs={24}>
              <DatePickerInput
                label="Due Date:"
                name="dueDate"
                required={true}
                placeholder="Due Date Time"
                picker="date"
                showTime={{ format: 'HH:mm' }}
                disabledDate={disabledDate}
                disabledTime={disabledTime}
                // onChange={setSelectDate}
              />
            </Col>
            <Col xs={12}>
              <FormSelect
                name="status"
                label="Status:"
                options={statusOpt}
                showSearch={true}
                required={true}
                errorMsg="Please chose Status!"
                // icon={<IconCar size={24} />}
                form={form}
              />
            </Col>
            <Col xs={12} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
              <SwitchInput name="isArchived" label="Archived" />
            </Col>
          </Row>
        </div>
      </Form>
    </AModal>
  );
};

export default TaskUpdate;
