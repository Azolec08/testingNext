import React from "react";
import { Links } from "@/content";
import Link from "next/link";
import NavLink from "./Navbar/NavLink/Link";

const Drawer = () => {
  return (
    <div>
      <div className="drawer drawer-end z-10">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="bg-blue-600 text-white px-2 py-3 text-xs rounded-md cursor-pointer"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {Links.map((link) => {
              return (
                <li key={link.title} className="w-full">
                  <Link href={link.path}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
