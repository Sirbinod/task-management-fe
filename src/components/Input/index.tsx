import { Input, Radio, Form } from 'antd';
import {
  ICommonFormPropTypes,
  INPUT_TYPE,
  IIconFormPropTypes,
  ITextAreaPropTypes,
  ITextSearchPropTypes,
  IRadioPropTypes,
  IInputPropTypes,
} from '../../interfaces/form.interface';
import { useState } from 'react';

export interface IFormInputProps
  extends ICommonFormPropTypes,
    IInputPropTypes,
    ITextAreaPropTypes,
    ITextSearchPropTypes,
    IRadioPropTypes,
    IIconFormPropTypes {}

const FormInput = (props: IFormInputProps) => {
  const {
    label,
    type = INPUT_TYPE.text,
    name,
    disabled = false,
    required,
    id,
    errorMsg,
    className,
    icon,
    handleChange,
    labelCSS,
    ref,
    form,
    ...rest
  } = props;
  form?.getFieldValue(name);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(form?.getFieldValue(name) || '');

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  const handleOnChange = (e: any) => {
    setValue(e?.target?.value);
    handleChange && handleChange(e);
  };

  function renderField() {
    switch (type) {
      case INPUT_TYPE.textarea:
        return (
          <Input.TextArea
            name={name}
            onChange={handleOnChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            rows={rest?.rows ?? 2}
            placeholder={rest.placeholder}
            disabled={disabled}
          />
        );

      case INPUT_TYPE.search:
        return (
          <Input.Search
            name={name}
            type={type}
            onChange={handleOnChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={rest.placeholder}
            disabled={disabled}
            enterButton
            onSearch={rest?.handleSearch}
          />
        );

      case INPUT_TYPE.radio:
        return (
          <Radio.Group name={name} disabled={disabled} onChange={handleChange} defaultValue={rest.defaultValue}>
            {rest.radioOptions &&
              rest.radioOptions.map((radioOpt, index) => (
                <Radio key={index} value={radioOpt?.value}>
                  {radioOpt?.label}
                </Radio>
              ))}
          </Radio.Group>
        );

      case INPUT_TYPE.password:
        return (
          <Input.Password
            name={name}
            onChange={handleOnChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={rest.placeholder}
            disabled={disabled}
            ref={ref}
            {...rest}
          />
        );

      default:
        return (
          <Input
            type={type}
            placeholder={rest.placeholder}
            disabled={disabled}
            suffix={rest.suffix ?? null}
            defaultValue={rest?.defaultValue}
            onChange={handleOnChange}
            prefix={icon}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
        );
    }
  }

  return (
    <Form.Item
      label={label}
      name={name}
      rules={required ? [{ required: true, message: errorMsg ?? `Please enter ${label?.toLowerCase()}` }] : []}
      className={`input-wrapper ${className} ${focused || value ? labelCSS : ''}`}
    >
      {rest.children ?? renderField()}
    </Form.Item>
  );
};

export default FormInput;
