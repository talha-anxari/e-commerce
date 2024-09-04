import React, { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun, FiMoon } from 'react-icons/fi'; // Sun and Moon icons for mode toggle
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';

 function Navbar  () {
  const { mode, toggleMode } = useContext(myContext);
  const [open, setOpen] = React.useState(false);

  const darkModeStyles = {
    backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '',
    color: mode === 'dark' ? 'white' : '',
  };
  const user = JSON.parse(localStorage.getItem('user'));

  const signOut = () => {
    localStorage.clear('user');
    window.location.href = ('/signIn')
  }
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={darkModeStyles}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 size={24} />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={'/allproducts'}
                    className="text-sm font-medium"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    All Products
                  </Link>
                  {user ? <Link
                    to={'/order'}
                    className="-m-2 block p-2 font-medium"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    Order
                  </Link> : ''}
                  {user?.user?.email === 'talha@gmail.com' ?
                  <Link
                  to={'/dashboard'}
                  className="-m-2 block p-2 font-medium"
                  style={{ color: mode === 'dark' ? 'white' : 'black' }}
                >
                  Admin
                </Link> : ''}
                  
                  {user ? <a onClick={signOut}
                    className="-m-2 block p-2 font-medium cursor-pointer"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    Sign Out
                  </a> : ''}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop Menu */}
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl"
          style={darkModeStyles}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '',
                  color: mode === 'dark' ? 'white' : '',
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className="flex">
                  <h1
                    className="text-2xl font-bold px-2 py-1 rounded"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    Chawal Wala POS
                  </h1>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={'/allproducts'}
                    className="text-sm font-medium"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    All Products
                  </Link>
                  {user ? <Link
                    to={'/order'}
                    className="text-sm font-medium"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    Order
                  </Link> : ''}
                  {user?.user?.email === 'talha@gmail.com' ? <Link
                    to={'/dashboard'}
                    className="text-sm font-medium"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    Admin
                  </Link> : ''}
                  {user ? <a onClick={signOut}
                    className="text-sm font-medium cursor-pointer"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    Sign Out
                  </a> : ''}
                </div>

                {/* Dark/Light Mode Toggle */}
                <div className="flex lg:ml-6">
                  <button onClick={toggleMode} className="p-2">
                    {mode === 'light' ? (
                      <FiSun className="text-yellow-500" size={24} />
                    ) : (
                      <FiMoon className="text-blue-400" size={24} />
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={'/cart'}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    <span
                      className="ml-2 text-sm font-medium"
                      style={{ color: mode === 'dark' ? 'white' : 'black' }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
