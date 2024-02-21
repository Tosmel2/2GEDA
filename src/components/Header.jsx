
const Header = () => {
  return (
    <>
      <nav className="h-16 bg-white shadow-md">
        <div className="mx-auto w-[95%] px-2 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* <div className="flex items-center"> */}

              <div className="flex-shrink-0">
                <img className="w-10 h-10 md:hidden" src="./assets/logo.svg" alt="2geda logo" />

                <img className="hidden w-24 h-24 md:block" src="./assets/2geda-logo.svg" alt="2geda logo" />
              </div>
            {/* </div> */}

          
            {/* i want the search button to be here */}

            <div className="block">
              <div className="flex items-center ml-4 md:ml-6">
                <button type="button" className="relative p-1 text-gray-400 bg-purple-600 rounded-full hover:text-white ">
                  <span className="absolute -inset-1.5"></span>
                  {/* <span className="sr-only">View notifications</span> */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>

                <div className="relative ml-3 parent">
                  <div>
                    <button type="button" className="relative flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </button>
                  </div>

                  <div className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg child ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >

                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</a>
                  </div>

                </div>
              </div>
              
            </div>

          </div>
        </div>
   
      </nav>
    </>
  )
}

export default Header