import { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import useOutSideClick from "../../hooks/useOutSideClick";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutSideClick(() => setIsOpen(false));
  return (
    <header>
      <nav className="bg-white w-full border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10 sm:h-10" alt="CartSaz Logo" />
          </Link>
          <div className="hidden lg:flex justify-between items-center lg:w-auto">
            <ul className="flex mt-4 font-medium text-md  lg:flex-row gap-x-4 lg:mt-0">
              <li>
                <Link to={"/"} className="header-link">
                  آپدیت ها
                </Link>
              </li>
              <li>
                <Link to={"/questions"} className="header-link">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link to={"/contact-us"} className="header-link">
                  تماس با ما
                </Link>
              </li>
              <button className="text-blue-300 text-sm font-iranYekan border-2 px-3 mx-3 border-blue-300 rounded-lg">
                ورود یا ثبت نام
              </button>
            </ul>
          </div>
          {/* mobile menu */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {isOpen ? (
            <div
              ref={ref}
              className="justify-between items-center w-full"
              id="mobile-menu-2"
            >
              <ul className="flex border p-2 rounded-lg flex-col mt-4 max-w-sm font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to={"/"}
                    className="block no-underline font-iranYekan py-2  text-gray-700  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-black lg:hover:text-blue-700 lg:p-2  "
                  >
                    آپدیت ها
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="block no-underline font-iranYekan py-2  text-gray-700  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-black lg:hover:text-blue-700 lg:p-2  "
                  >
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="block no-underline font-iranYekan py-2  text-gray-700  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-black lg:hover:text-blue-700 lg:p-2  "
                  >
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <button className="text-blue-300 w-50 font-iranYekan border-2 p-2 my-3 border-blue-300 rounded-lg">
                    ورود یا ثبت نام
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
