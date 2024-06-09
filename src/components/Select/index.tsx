import { Form, Select } from 'antd';
import { FC, useState } from 'react';
import { ICommonFormPropTypes, ISelectPropTypes } from '../../interfaces/form.interface';

export interface ISelectProps extends ICommonFormPropTypes, ISelectPropTypes {}

const FormSelect: FC<ISelectProps> = (props) => {
  const { Option } = Select;

  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(props?.form?.getFieldValue(props?.name) || '');

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  const handleOnChange = (e: any) => {
    setValue(e);
    props.handleChange && props.handleChange(e);
  };

  return (
    <>
      <Form.Item
        label={props.label}
        name={props.name}
        rules={
          props.required
            ? [{ required: true, message: props.errorMsg ?? `Please select a ${props?.label?.toLowerCase()}` }]
            : []
        }
        className={`select-wrapper ${props.className} ${focused || value ? props.labelCSS : ''}`}
      >
        <Select
          placeholder={props.placeholder}
          showSearch={props.showSearch ?? true}
          optionFilterProp="children"
          disabled={props.disabled}
          mode={props.mode}
          // dropdownRender={props?.dropdownRender}
          maxTagCount={props?.maxTagCount}
          popupClassName="select-dropdown"
          defaultValue={props.defaultValue}
          allowClear={props.allowClear ?? (props.mode !== 'multiple' && true)}
          notFoundContent={props?.notFoundContent}
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          getPopupContainer={(trigger) => trigger.parentNode}
        >
          {props?.options?.map((items: any, index: any) => {
            return (
              <Option value={items.value} key={index}>
                {props.colors && (
                  <div
                    className="option-color"
                    style={{
                      backgroundColor: items.backgroundcolor,
                    }}
                  ></div>
                )}
                {items.label}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </>
  );
};

export default FormSelect;
