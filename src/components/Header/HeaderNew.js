import React, { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { LogoSquare, LogoVertWhite, LogoHorizWhite } from "../../images/index"
import { Link } from 'gatsby';

import './header2.css';

const HeaderNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>

      <header
        className={
          ' transition-all' +
          ' ease-out' +
          ' duration-300' +
          (scroll ? ` bg-white` : ' bg-transparent') +
          (scroll ? ' shadow' : '') +
          (scroll ? ` block` : ' hidden' + ' lg:block') +
          ' px-4' +
          ' py-2' +
          ' mx-auto' +
          ' msm:max-w-xl' +
          ' w-full' +
          ' md:max-w-full' +
          ' md:px-16' +
          ' lg:px-8' +
          ' sticky' +
          ' top-0' +
          ' left-0' +
          ' right-0' +
          (scroll ? ` text-blue-800` : ` text-blue-800`) +
          ' z-10 my-0'
        }
      >
        <nav className="container relative flex items-center justify-between mx-auto font-semibold uppercase font-montserrat">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className={
              ' text-gray-100' +
              ' inline-flex' +
              ' items-center' +
              ' md:w-56' +
              ' w-40' +
              (scroll ? ' visible' : ' visible')
            }
          >
            <img src={LogoHorizWhite} alt="Spartan Plumbing Logo" className="inline-block w-full navLogo" />
          </Link>
          <ul className="flex items-center hidden my-0 space-x-8 list-none lg:flex">
            <li className="px-4 py-4 transition-all duration-200 rounded dropdown hover:bg-logo-blue-500">
              <Link
                to="/services"
                aria-label="Our services"
                title="Our services"
                className={
                  ' tracking-wide' +
                  (scroll ? ' text-blue-800' : ' text-blue-800') +
                  ' transition-colors' +
                  ' duration-200' +
                  ' hover:text-gray-100'
                }
              >
                Services
              </Link>
              <div className="bg-white dropdownContent">
                <ul className="">
                <li className="hover:bg-red-700">
                    <a href="" className="font-bold text-red-700" rel="" title="">
                      Emergency Plumbing Services
                    </a>
                  </li>
                <li className="">
                    <a href="" className="" rel="" title="">
                      Drain Repair
                    </a>
                  </li>

                  <li className="">
                    <a href="" className="" rel="" title="">
                      Sewer Repair
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="" rel="" title="">
                      Sink Repair
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="" rel="" title="">
                      Water Line Repair &amp; Replacement
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="" rel="" title="">
                      Water Heater Replacement
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-4 py-4 transition-all duration-200 rounded dropdown hover:bg-logo-blue-500">
              <Link
                to="/about"
                aria-label="About us"
                title="About us"
                className={
                  ' tracking-wide' +
                  (scroll ? ' text-blue-800' : ' text-blue-800') +
                  ' transition-colors' +
                  ' duration-200' +
                  ' hover:text-gray-100'
                }
              >
                About Us
              </Link>
              <div className="bg-white dropdownContent">
                <ul className="">
                <li className="">
                    <a href="" className="" rel="" title="">
                      About Spartan Plumbing &amp; Drain
                    </a>
                  </li>
                <li className="">
                    <a href="" className="" rel="" title="">
                      Our Guarantee
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-4 py-4 transition-all duration-200 rounded dropdown hover:bg-logo-blue-500">
              <a
                href="/"
                aria-label="Our services"
                title="Our services"
                className={
                  ' tracking-wide' +
                  (scroll ? ' text-blue-800' : ' text-blue-800') +
                  ' transition-colors' +
                  ' duration-200' +
                  ' hover:text-gray-100'
                }
              >
                Service Areas
              </a>
              <div className="bg-white dropdownContent">
                <ul className="">
                <li className="">
                    <a href="" className="" rel="" title="">
                      Escondido
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="" rel="" title="">
                      Oceanside
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="" rel="" title="">
                      San Diego
                    </a>
                  </li>
                <li className="">
                    <a href="" className="" rel="" title="">
                      San Marcos
                    </a>
                  </li>

                  <li className="">
                    <a href="" className="" rel="" title="">
                     Temecula
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="" rel="" title="">
                     Vista
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-4 py-4 transition-all duration-200 rounded dropdown hover:bg-logo-blue-500">
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className={
                  ' tracking-wide' +
                  (scroll ? ' text-blue-800' : ' text-blue-800') +
                  ' transition-colors' +
                  ' duration-200' +
                  ' hover:text-gray-100'
                }
              >
                Pricing
              </a>
              <div className="bg-white dropdownContent">
                <ul className="">
                <li className="">
                    <a href="" className="font-bold text-red-700" rel="" title="">
                      Emergency Plumbing Services
                    </a>
                  </li>
                <li className="">
                    <a href="" className="" rel="" title="">
                      Drain Repair
                    </a>
                  </li>

                  <li className="">
                    <a href="" className="" rel="" title="">
                      Sewer Repair
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="" rel="" title="">
                      Sink Repair
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="" rel="" title="">
                      Water Line Repair &amp; Replacement
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="" rel="" title="">
                      Water Heater Replacement
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li className="px-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white whitespace-no-wrap transition duration-200 rounded shadow-md lg:py-2 lg:px-8 bg-red-accent-700 hover:bg-logo-blue-500 hover:text-gray-100 focus:shadow-outline focus:outline-none"
                aria-label="Contact us"
                title="Contact us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className={
                'p-2' +
                ' -mr-1' +
                (scroll ? ' text-red-700' : ' text-gray-100') +
                ' transition' +
                ' duration-200' +
                ' rounded' +
                ' focus:outline-none' +
                ' focus:shadow-outline' +
                ' hover:bg-deep-purple-50' +
                ' focus:bg-deep-purple-50'
              }
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-8 text-red-700" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {/*<a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-red-700"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>*/}
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center w-40 text-gray-100"
                      >
                        <img src={LogoHorizWhite} alt="Spartan Plumbing Logo" className="w-full" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-accent-700 hover:bg-red-accent-400 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderNew
