import React from 'react';
import { Link } from 'gatsby';
import europratsyaLogo from '../../images/europratsya.svg';

export default class NavCenter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenMobile: true,
      hiddenSubmenu: true,
      hiddenDesktop: true,
    };
  }

  render() {
    let hiddenMobileVal =
      'absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50';

    if (this.state.hiddenMobile) {
      hiddenMobileVal = 'hidden '.concat(hiddenMobileVal);
    }

    return (
      <div>
        <div className="mx-auto px-3 sm:px-5 pt-4">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center max-w-screen-xl mx-auto">
            <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link to="/" aria-label="Home">
                  <img
                    className="h-8 w-auto sm:h-12"
                    src={europratsyaLogo}
                    alt="Europratsya logo"
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                    id="main-menu"
                    type="button"
                    aria-label="Main menu"
                    aria-haspopup="true"
                    onClick={() => {
                      this.setState({ hiddenMobile: false });
                    }}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end w-80">
              <div className="max-w-lg w-full">
                <label for="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-gray-200 focus:border-blue-500 focus:ring-grey-300 focus:text-gray-900 sm:text-sm"
                    placeholder="France, PHP, work visa"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="mx-auto px-4 sm:px-6 mt-8 border-t border-b border-gray-500 bg-gray-200 hidden sm:block">
          <nav className="relative flex  justify-between sm:h-18 md:justify-center max-w-screen-xl mx-auto">
            <div className="hidden md:block border-r border-gray-500 p-2">
              <div className="text-sm font-bold mb-2">ABOUT</div>
              <div className="md:flex md:space-x-10">
                <Link
                  className="font-medium text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/about-us/"
                >
                  About us
                </Link>
              </div>
            </div>
            <div className="hidden md:block border-r border-gray-500 p-2">
              <div className="text-sm font-bold mb-2">CANDIDATES</div>
              <div className="md:flex md:space-x-10">
                <Link
                  className="font-medium text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/404/"
                >
                  Skills in demand
                </Link>
                <Link
                  className="font-medium text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/404/"
                >
                  Guide for visa/permits
                </Link>
                <Link
                  className="font-medium text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/companies/"
                >
                  Vetted euro employers
                </Link>
                <Link
                  className="font-medium text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/404/"
                >
                  Essential checklists
                </Link>
              </div>
            </div>
            <div className="hidden md:block p-2">
              <div className="text-sm font-bold mb-2">EMPLOYERS</div>
              <div className="md:flex md:space-x-10">
                <Link
                  className="font-medium text-sm text-blue-500 transition duration-150 ease-in-out hover:text-blue-700"
                  to="/ukr-education-explainer/"
                >
                  UKR education FAQ
                </Link>
                <Link
                  className="font-medium text-sm text-blue-500 transition duration-150 ease-in-out hover:text-blue-700"
                  to="/ukr-expertise-explained/"
                >
                  UKR expertise FAQ
                </Link>
              </div>
            </div>
            <div className="hidden lg:block p-2 lg:w-60  h-full">
              <div className="text-sm font-bold mb-2 text-right">
                <Link to="/uk">УКР 🇺🇦</Link> | <Link to="/">EN 🇬🇧</Link> |{' '}
                <Link to="/de">DE 🇩🇪</Link>
              </div>
            </div>
            <div className="hidden md:block lg:hidden p-2 md:w-20  h-full">
              <div className="text-sm font-bold mb-2 text-right">
                <Link to="/uk">УКР 🇺🇦</Link> <br /> <Link to="/">EN 🇬🇧</Link>
                <br />
                <Link to="/de">DE 🇩🇪</Link>
              </div>
            </div>
          </nav>
        </div>

        <div className={hiddenMobileVal} id="main-mobile-menu">
          <div className="rounded-lg shadow-md">
            <div
              className="shadow-xs overflow-hidden rounded-lg bg-white"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={europratsyaLogo}
                    alt="Europratsya logo"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                    type="button"
                    aria-label="Close menu"
                    onClick={() => this.setState({ hiddenMobile: true })}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/about-us/"
                >
                  About us
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/404/"
                >
                  Skills in demand
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/404/"
                >
                  Guide for visa/permits
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/companies/"
                >
                  Vetted euro employers
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/404/"
                >
                  Essential checklists
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/ukr-education-explainer/"
                >
                  UKR education FAQ
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/ukr-expertise-explained/"
                >
                  UKR expertise FAQ
                </Link>
              </div>
              <div className="bg-gray-50 px-3 py-6 text-center">
                <Link to="/uk">УКР 🇺🇦</Link>
                {` `}—{` `}
                <Link to="/">EN 🇬🇧</Link>
                {` `}—{` `}
                <Link to="/de">DE 🇩🇪</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
