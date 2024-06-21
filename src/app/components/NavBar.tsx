"use client";
import Link from "next/link";
import { scrollToSection } from "../Utility/scrollUtils";
import React, { useEffect, useRef } from "react";
import NavBarService from "@/app/components/styles/navCollapse";
import { initFlowbite } from "flowbite";

const NavBar = () => {
  const navBarService = useRef(new NavBarService());
  const targetElRef = useRef<HTMLDivElement>(null);
  const triggerElRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    initFlowbite();
    if (targetElRef.current && triggerElRef.current) {
      navBarService.current.initializeNavBar(
        targetElRef.current,
        triggerElRef.current
      );
    }
  }, []);

  return (
    <>
      {" "}
      <nav className="select-none">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap text-second">
              Revus{" "}
            </span>
          </Link>
          <button
            id="triggerEl"
            ref={triggerElRef}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gr"
            aria-controls="targetEl"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            ref={targetElRef}
            id="targetEl"
          >
            <ul className="cursor-pointer md:font-medium font-semibold  align-center justify-center flex flex-col p-4 md:p-0 mt-4 md:h-auto h-[80vh]  rounded-lg text-center text-2xl md:text-sm md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  ">
              <li onClick={() => scrollToSection("home")}>
                <span className="block py-2 px-3 text-white rounded hover:text-second md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  Home
                </span>
              </li>
              <li onClick={() => scrollToSection("about")}>
                <a className="block py-2 px-3 text-white rounded hover:text-second md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  About
                </a>
              </li>

              <li onClick={() => scrollToSection("projects")}>
                <span className="cursor-pointer block py-2 px-3 text-white rounded hover:text-second md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  Projects
                </span>
              </li>
              <li>
                <a className="block py-2 px-3 text-white rounded hover:text-second md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  Resume
                </a>
              </li>
              <li
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer"
              >
                <span className="block py-2 px-3 text-white rounded hover:text-second md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
