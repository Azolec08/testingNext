"use client";
import Link from "next/link";
import React from "react";
import style from ".././navbar.module.css";
import { usePathname } from "next/navigation";
import { linkProps } from "@/types";

type pathProps = {
  links: linkProps;
};

const NavLink = ({ links }: pathProps) => {
  const pathName = usePathname();

  return (
    <div className={links.style}>
      <Link
        href={links.path}
        className={`${pathName === links.path && style.active} `}
      >
        <button className="px-2">{links.title}</button>
      </Link>
    </div>
  );
};

export default NavLink;
