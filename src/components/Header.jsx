import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"
import SideMenu from "./SideMenu"


  const Header = () => {
  return (
    <div className="md:h-[80px] h-[50px] bg-white sticky top-0 z-40">
      <div className="flex content-center justify-between">
        <div className="lg:hidden px-4">
        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
             <box-icon color="#016450" size="lg" name='menu'></box-icon>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-40 z-10 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="max-h-[500px] overflow-y-auto rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <SideMenu />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
        </div>
        <div className="md:basis-2/4">
            <div class="relative w-1/2 rounded-lg mx-auto">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 h-12 text-sm text-blue-700  rounded-l-lg rounded-r-lg border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" />
            <button type="submit" class="absolute top-0 h-12 right-0 p-2.5 px-3 text-sm font-medium border-l rounded-r-lg bg-vien-primary hover:bg-teal-800 text-white focus:ring-1 border border-gray-300 focus:outline-none focus:ring-teal-600-300">
            <box-icon color="white" name='search-alt-2'></box-icon>
                </button>
        </div>
        </div>
        <div className="flex-grow">
          <div className="flex justify-evenly">
            <div>Udwell Now</div>
            <div>Sell Property</div>
            <div>
            <box-icon size="lg" name='menu-alt-left'></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
