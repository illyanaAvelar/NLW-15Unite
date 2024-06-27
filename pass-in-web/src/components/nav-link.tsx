interface NavLinkProps {
  children: string;
  href: string;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a href={props.href} className="font-medium text-sm text-zinc-3200">
      {props.children}
    </a>
  );
}
