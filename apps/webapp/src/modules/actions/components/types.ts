export enum InputTypeEnum {
  Text = 'text',
  Number = 'number',
  Array = 'array',
}

export interface ValidationConfig {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export interface BaseFieldConfig {
  type: InputTypeEnum;
  title: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: any;
  validation?: ValidationConfig;
}

export interface TextFieldConfig extends BaseFieldConfig {
  type: InputTypeEnum.Text;
  options?: string[]; // Only for select inputs
}

export interface NumberFieldConfig extends BaseFieldConfig {
  type: InputTypeEnum.Number;
}

export interface ArrayFieldConfig extends BaseFieldConfig {
  type: InputTypeEnum.Array;
  items: {
    type: 'object';
    properties: Record<string, BaseFieldConfig>;
  };
}

export type FieldConfig =
  | TextFieldConfig
  | NumberFieldConfig
  | ArrayFieldConfig;

export interface FormSchema {
  title: string;
  type: 'object';
  properties: Record<string, FieldConfig>;
}