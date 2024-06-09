import { FormInstance } from 'antd';
import { ReactNode } from 'react';

export const INPUT_TYPE = {
  text: 'text',
  number: 'number',
  textarea: 'textarea',
  radio: 'radio',
  search: 'search',
  password: 'password',
} as const;

export type TInputType = keyof typeof INPUT_TYPE;

export interface ICommonFormPropTypes {
  id?: string;
  label?: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  errorMsg?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  touched?: any;
  children?: React.ReactNode;
  suffix?: string;
  icon?: React.ReactNode;
  rules?: any;
  ref?: any;
  labelCSS?: string;
  handleChange?: (...args: any) => void;
  form?: FormInstance<any>;
}

export interface IIconFormPropTypes {
  icon?: ReactNode;
}

export interface IInputPropTypes {
  type?: TInputType;
}

export interface ITextAreaPropTypes {
  rows?: number;
}

export interface ITextSearchPropTypes {
  handleSearch?: (...args: any) => void;
}

export interface IRadioPropTypes {
  radioOptions?: { [key: string]: string }[];
}

export interface ISelectPropTypes {
  options?: { label: string; value: string }[];
  showSearch?: boolean;
  allowClear?: boolean;
  mode?: 'multiple' | 'tags';
  maxTagCount?: number;
  colors?: string;
  notFoundContent?: React.ReactNode;
}

export interface IUploadPropTypes {
  isMulti?: boolean;
  accept?: string;
}
