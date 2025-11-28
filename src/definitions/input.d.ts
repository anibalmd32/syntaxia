import type { ReactNode } from "react";

interface DynamicProps {
  options?: never;
  description?: never;
  icon?: never;
  name?: never;
  value?: never;
}

interface BaseInputProps extends DynamicProps {
  label: string;
  placeholder?: string;
}

interface SelectInputProps extends BaseInputProps {
  type: "select";
  options: string[];
}

interface TextInputProps extends BaseInputProps {
  type: "text" | "password" | "email";
}

export interface CardInputProps {
  label: string;
  description?: string;
  icon?: ReactNode;
  type: "checkbox" | "radio";
  name: string;
  value: string;
}

export type InputFieldProps = SelectInputProps | TextInputProps;
