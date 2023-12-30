"use client";
import { useState } from "react";
import React from "react";
import NavLink from "./NavLink/Link";
import { Drawer } from "..";
import { Links } from "@/content";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <header className="w-full p-3 bg-black-300">
      <div className="grid grid-flow-col">
        <div className="h-full w-full flex items-center ">
          <h3 className="text-2xl">Azolec</h3>
        </div>
        <div>
          <ul
            className="text-sm flex h-full justify-end gap-x-2 items-center
            md:justify-evenly 
          "
          >
            {Links.map((link) => {
              return (
                <li key={link.title} className="hidden md:block">
                  <NavLink links={link} />
                </li>
              );
            })}
            {session ? (
              <div className="flex items-center gap-x-2">
                {isAdmin && (
                  <>
                    <NavLink links={{ title: "Admin", path: "/admin" }} />
                    <button className="p-2 bg-white">Logout</button>
                  </>
                )}
              </div>
            ) : (
              <NavLink
                links={{
                  title: "Login",
                  path: "/login",
                  style: "bg-white p-2",
                }}
              />
            )}
            {open && (
              <div>
                {Links.map((link) => {
                  return <NavLink links={link} />;
                })}
              </div>
            )}
            <div className="md:hidden">
              <Drawer />
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
