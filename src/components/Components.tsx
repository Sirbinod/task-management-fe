import { Flex, Form } from 'antd';
import FormInput from './Input';
import FormSelect from './Select';
import ButtonComponent from './Button';
// import FileUpload from './Upload';
import { IconUser } from '@tabler/icons-react';

const Components = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Flex gap={10}>
        <FormInput
          handleChange={() => {}}
          label="Text"
          name=""
          icon={<IconUser size={24} />}
          type="text"
          placeholder="Normal Input"
        />
        <FormInput
          handleChange={() => {}}
          label="Text"
          name=""
          icon={<IconUser size={24} />}
          type="text"
          placeholder="Error State"
        />
        <FormInput
          handleChange={() => {}}
          label="Text"
          name=""
          icon={<IconUser size={24} />}
          type="text"
          placeholder="Warning state"
        />

        <FormInput handleChange={() => {}} label="Number" name="" type="number" icon={<IconUser size={24} />} />
        <FormInput handleChange={() => {}} label="Textarea" name="" type="textarea" />
        <FormInput handleChange={() => {}} label="password" name="" type="password" />
      </Flex>
      <br />
      <Flex gap={10}>
        <FormSelect
          placeholder="Choose Option"
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
          showSearch={true}
          name="brand"
          // value={certificationData.brand}
          // error={errors.brand}
          className="brand"
          form={form}
        />
        <FormSelect
          placeholder="Choose Option"
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
          showSearch={true}
          name="brand"
          // value={certificationData.brand}
          // error={errors.brand}
          className="brand"
          form={form}
        />
        <FormSelect
          placeholder="Choose Option"
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
          showSearch={true}
          name="brand"
          // value={certificationData.brand}
          // error={errors.brand}
          className="brand"
          form={form}
        />
      </Flex>
      <br />
      <Flex gap={10}>
        <ButtonComponent type="primary"> Primary-lg</ButtonComponent>
        <ButtonComponent type="secondary"> Secondary-lg</ButtonComponent>
        <ButtonComponent type="primary" disabled>
          Disabled-lg
        </ButtonComponent>
      </Flex>
      <br />
      <Flex gap={10}>
        <ButtonComponent type="primary" size="md">
          {' '}
          Primary-md
        </ButtonComponent>
        <ButtonComponent type="secondary" size="md">
          {' '}
          Secondary-md
        </ButtonComponent>
        <ButtonComponent type="primary" disabled size="md">
          Disabled-md
        </ButtonComponent>
      </Flex>
      <br />
      <Flex gap={10}>
        <ButtonComponent type="primary" size="sm">
          {' '}
          Primary-sm
        </ButtonComponent>
        <ButtonComponent type="secondary" size="sm">
          {' '}
          Secondary-sm
        </ButtonComponent>
        <ButtonComponent type="primary" disabled size="sm">
          Disabled-sm
        </ButtonComponent>
      </Flex>
      <br />
      {/* <FileUpload handleChange={() => {}} value={[]} name="images" accept="image/*" isMulti required={false} label="" /> */}
      <Flex gap={10}>
        <FormInput handleChange={() => {}} label="Text" name="" type="text" placeholder="Normal Input" />
        <FormInput handleChange={() => {}} label="Text" name="" type="text" placeholder="Warning state" />
        <FormInput handleChange={() => {}} label="Number" name="" type="number" />
        <FormInput handleChange={() => {}} label="Textarea" name="" type="textarea" />
        <FormInput handleChange={() => {}} label="password" name="" type="password" />
      </Flex>
      <br />
      <Flex gap={10}>
        <FormSelect
          placeholder="Choose Option"
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
          showSearch={true}
          name="brand"
          // value={certificationData.brand}
          // error={errors.brand}
          className="brand"
          form={form}
        />
        <FormSelect
          placeholder="Choose Option"
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
          showSearch={true}
          name="brand"
          // value={certificationData.brand}
          // error={errors.brand}
          className="brand"
          form={form}
        />
        <FormSelect
          placeholder="Choose Option"
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
          showSearch={true}
          name="brand"
          // value={certificationData.brand}
          // error={errors.brand}
          className="brand"
          form={form}
        />
      </Flex>
      <br />
      <Flex gap={10}>
        <ButtonComponent type="primary"> Primary-lg</ButtonComponent>
        <ButtonComponent type="secondary"> Secondary-lg</ButtonComponent>
        <ButtonComponent type="primary" disabled>
          Disabled-lg
        </ButtonComponent>
      </Flex>
      <br />
      <Flex gap={10}>
        <ButtonComponent type="primary" size="md">
          {' '}
          Primary-md
        </ButtonComponent>
        <ButtonComponent type="secondary" size="md">
          {' '}
          Secondary-md
        </ButtonComponent>
        <ButtonComponent type="primary" disabled size="md">
          Disabled-md
        </ButtonComponent>
      </Flex>
      <br />
      <Flex gap={10}>
        <ButtonComponent type="primary" size="sm">
          {' '}
          Primary-sm
        </ButtonComponent>
        <ButtonComponent type="secondary" size="sm">
          {' '}
          Secondary-sm
        </ButtonComponent>
        <ButtonComponent type="primary" disabled size="sm">
          Disabled-sm
        </ButtonComponent>
      </Flex>
      <br />
      {/* <FileUpload handleChange={() => {}} value={[]} name="images" accept="image/*" isMulti required={false} label="" /> */}
    </>
  );
};

export default Components;
