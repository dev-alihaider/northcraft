export interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
}

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export type InputFieldProps = {
  className?: string;
  placeholder?: string;
  name?: string;
  type?: "text" | "password" | "number"|"email";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};
