'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="herom font-thin">
      <nav className="nav-font w-full text-white">
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8">
          <div className="mb-0 lg:mb-2">
            <div className="flex items-center justify-between py-3 md:block md:py-1">
              <a className="text-[25px] uppercase" href="/">
                jb cars
              </a>
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-white outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 h-[80vh] flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 lg:h-auto ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="justify-center space-y-8 text-[30px] md:flex md:space-x-6 md:space-y-0 lg:text-[25px]">
                <li>
                  <Link
                    href={'/'}
                    className="cursor-pointer hover:text-red-600"
                  >
                    Domov
                  </Link>
                </li>

                <li>
                  <Link
                    href={'/about'}
                    className="cursor-pointer hover:text-red-600"
                  >
                    O nás
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/contact'}
                    className="cursor-pointer hover:text-red-600"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
