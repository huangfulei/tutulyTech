import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

interface HeaderProps {
  handleHidden: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { handleHidden } = props;
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <div>
      <header
        className={
          scroll
            ? "bg-transparent sticky-bar mt-4 stick"
            : "bg-transparent sticky-bar mt-4"
        }
      >
        {/* <div className="container bg-transparent"> */}
        <nav className="container bg-transparent py-3">
          {/* <Link href="/">
              <a className="text-3xl font-semibold leading-none">
                <img
                  className="h-10"
                  src="/assets/imgs/logos/monst-logo.svg"
                  alt="Tutuly"
                />
              </a>
            </Link> */}
          <ul className="hidden justify-center lg:flex lg:items-center lg:w-auto lg:space-x-12">
            <li className="pt-4 pb-4">
              <Link href="/">
                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                  Home
                </a>
              </Link>
            </li>
            {/* <li className="pt-4 pb-4">
              <Link href="/about">
                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                  About Us
                </a>
              </Link>
            </li> */}
            <li className="group relative pt-4 pb-4 has-child">
              <Link href="/services">
                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                  Services
                </a>
              </Link>
              <ul className="drop-down-menu min-w-200">
                <li>
                  <Link href="/blog">
                    <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Category 1
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-2">
                    <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Category 2
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-single">
                    <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Single 1
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-single-2">
                    <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Single 2
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative pt-4 pb-4 has-child">
              <Link href="#">
                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                  Get a Quote
                </a>
              </Link>
              <ul className="drop-down-menu min-w-200">
                <li>
                  <Link href="/blog">
                    <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Category 1
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-2">
                    <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Category 2
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-single">
                    <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Single 1
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-single-2">
                    <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Single 2
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="pt-4 pb-4">
              <Link href="/contact">
                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          {/* <div className="hidden lg:block">
              <Link href="/login">
                <a className="btn-accent hover-up-2">Log In</a>
              </Link>
              <Link href="/signup">
                <a className="btn-primary hover-up-2">Sign Up</a>
              </Link>
            </div> */}
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
              onClick={handleHidden}
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* </div> */}
      </header>
    </div>
  );
};
