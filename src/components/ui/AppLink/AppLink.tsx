import { Link, LinkProps } from "react-router-dom";

import cls from "./AppLink.module.scss";
import { cn } from "@/lib/utils";

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink = (props: AppLinkProps) => {
  const { children, to, className, ...otherProps } = props;

  return (
    <Link to={to} className={cn(cls.link, className)} {...otherProps}>
      {children}
    </Link>
  );
};
