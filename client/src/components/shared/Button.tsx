import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className: string;
};

export default function Buttom({
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return <button {...rest}>{children}</button>;
}
