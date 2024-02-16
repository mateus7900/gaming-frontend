import React, { ReactNode } from "react";

import './styles.scss';

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  children, ...rest
}: IconButtonProps) => {
  return <button {...rest} className="icon-button">{children}</button>;
};

export default IconButton;
