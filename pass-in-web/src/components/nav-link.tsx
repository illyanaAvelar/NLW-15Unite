import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm text-zinc-3200">
      {props.children}
    </a>
  );
}
