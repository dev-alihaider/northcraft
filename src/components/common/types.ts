export interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
}

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export type InputFieldProps = {
  className?: string;
  placeholder?: string;
};
