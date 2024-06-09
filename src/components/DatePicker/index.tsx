import { FC, useState } from 'react';
import { Form, DatePicker, FormInstance } from 'antd';

interface CustomDatePickerProps {
  label?: string;
  name: string;
  required: boolean;
  className?: string;
  labelCSS?: string;
  rules?: any;
  form?: FormInstance<any>;
  placeholder?: string;
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
  disabledDate?: any;
  disabledTime?: any;
  showTime?: any;
  onChange?: (e: any) => void;
  disabled?: boolean;
}

const DatePickerInput: FC<CustomDatePickerProps> = ({
  label,
  name,
  rules,
  required,
  form,
  className,
  labelCSS,
  placeholder,
  onChange,

  ...datePickerProps
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(form?.getFieldValue(name || ''));

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
    onChange && onChange(e);
  };
  return (
    <Form.Item
      label={label}
      name={name}
      rules={required ? [{ required: true, message: 'Please select a date' }] : []}
      className={`date-picker-wrapper ${className} ${focused || value ? labelCSS : ''}`}
    >
      <DatePicker
        {...datePickerProps}
        onChange={handleOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder ?? ''}
      />
    </Form.Item>
  );
};

export default DatePickerInput;
