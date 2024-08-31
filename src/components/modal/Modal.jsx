import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="text-center rounded-lg">
        <button
          type="button"
          onClick={openModal}
          className="w-full bg-green-600 py-2 text-center rounded-lg text-white font-bold hover:bg-green-700 transition-colors duration-300"
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 bg-white text-left align-middle shadow-xl transition-all">
                  <section className="flex flex-col items-center py-4 lg:py-0">
                    <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                      <div className="space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block mb-2 text-sm font-medium text-gray-700"
                            >
                              Enter Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 bg-gray-100"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="address"
                              className="block mb-2 text-sm font-medium text-gray-700"
                            >
                              Enter Full Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              id="address"
                              className="border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 bg-gray-100"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="pincode"
                              className="block mb-2 text-sm font-medium text-gray-700"
                            >
                              Enter Pincode
                            </label>
                            <input
                              type="text"
                              name="pincode"
                              id="pincode"
                              className="border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 bg-gray-100"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="mobileNumber"
                              className="block mb-2 text-sm font-medium text-gray-700"
                            >
                              Enter Mobile Number
                            </label>
                            <input
                              type="text"
                              name="mobileNumber"
                              id="mobileNumber"
                              className="border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 bg-gray-100"
                              required
                            />
                          </div>
                        </form>
                        <button
                          onClick={closeModal}
                          type="button"
                          className="w-full text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
