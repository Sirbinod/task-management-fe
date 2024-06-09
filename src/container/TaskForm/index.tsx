import { FC } from 'react';
import AModal from '../../components/Modal';
import { Col, Form, Row } from 'antd';
import FormInput from '../../components/Input';
import DatePickerInput from '../../components/DatePicker';
import { disabledDate, disabledTime } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { createData } from '../../redux/features/taskSlice';

interface TaskFormInterface {
  open: boolean;
  setOpen: (e: boolean) => void;
}

const TaskForm: FC<TaskFormInterface> = ({ open, setOpen }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handelSubmit = () => {
    form.validateFields().then(async (values: any) => {
      try {
        dispatch(createData(values) as any);
        setOpen(false);
      } catch (error) {
        console.error('Failed to create data:', error);
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
          </Row>
        </div>
      </Form>
    </AModal>
  );
};

export default TaskForm;
