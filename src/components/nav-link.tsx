"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, ...rest }: React.ComponentProps<typeof Link>) {
  const isActive = href === usePathname();

  return <Link href={href} data-active={isActive ? "" : undefined} {...rest} />;
}

export { NavLink };
