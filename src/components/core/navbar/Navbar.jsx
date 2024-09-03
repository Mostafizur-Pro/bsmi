import { NavLink, Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dropdown } from 'flowbite-react';
import { useAuth } from '@/components/context/AuthContext';

const NavbarHamburgerMenu = () => {
  return (
    <div>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger>
          <div className="px-3 cursor-pointer">
            <div className="w-7 h-0.5 bg-black transition-all duration-300"></div>
            <div className="w-7 h-0.5 bg-black mt-2 transition-all duration-300"></div>
          </div>
        </SheetTrigger>
        <SheetContent
          className="overflow-y-auto px-5 md:px-10 transition-transform duration-500 ease-in-out"
          side="right"
        >
          <div className="w-[156px]">{/* <NavLink to={'/'}></NavLink> */}</div>

          <div className="flex flex-col space-y-3 mt-10">
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={'/'}
            >
              HOME
            </NavLink>

            <div className="rounded-lg bg-white">
              <Dropdown
                className="bg-white w-[200px] rounded-lg"
                inline
                label={
                  <div className="flex items-center ">
                    <h2 className="font-semibold">PAGES</h2>
                  </div>
                }
              >
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-left hover:bg-gray-100 transition-colors duration-300"
                    to={'/about'}
                  >
                    ABOUT
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-left hover:bg-gray-100 transition-colors duration-300"
                    to={'/faq'}
                  >
                    FAQ
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-left hover:bg-gray-100 transition-colors duration-300"
                    to={'/gallery'}
                  >
                    GALLERY
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </div>

            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={'/events'}
            >
              EVENTS
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={'/programs'}
            >
              PROGRAMS
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={'/blog'}
            >
              BLOG
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={'/contact'}
            >
              CONTACT
            </NavLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// Default component
const Navbar = () => {
  const { users } = useAuth();

  return (
    <nav className="py-2 sticky top-0 bg-white z-50 shadow-md transition-shadow duration-300">
      <div className="b_profile_container">
        <div className="flex items-center justify-between">
          <div className="w-[100px] md:w-[165px] xl:w-[186px] font-bold text-lg text-black transition-all duration-300">
            BSMI
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <NavLink className="font-semibold hover:text-blue-600 transition-colors duration-300" to={'/'}>
              HOME
            </NavLink>
            <div className="relative">
              <Dropdown
                className="bg-white w-[200px] rounded-lg"
                inline
                label={
                  <div className="flex items-center cursor-pointer hover:text-blue-600 transition-colors duration-300">
                    <h2 className="font-semibold">PAGES</h2>
                  </div>
                }
              >
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-start hover:bg-gray-100 transition-colors duration-300"
                    to={'/about'}
                  >
                    ABOUT
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-start hover:bg-gray-100 transition-colors duration-300"
                    to={'/faq'}
                  >
                    FAQ
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-start hover:bg-gray-100 transition-colors duration-300"
                    to={'/gallery'}
                  >
                    GALLERY
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </div>
            <NavLink className="font-semibold hover:text-blue-600 transition-colors duration-300" to={'/events'}>
              EVENTS
            </NavLink>
            <NavLink className="font-semibold hover:text-blue-600 transition-colors duration-300" to={'/programs'}>
              PROGRAMS
            </NavLink>
            <NavLink className="font-semibold hover:text-blue-600 transition-colors duration-300" to={'/blog'}>
              BLOG
            </NavLink>
            <NavLink className="font-semibold hover:text-blue-600 transition-colors duration-300" to={'/contact'}>
              CONTACT
            </NavLink>
          </div>

          <div className="flex items-center">
            <div className="mr-4">
              {users ? (
                <span className="font-semibold text-gray-800">{users.name}</span>
              ) : (
                <Link
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  to={'/auth/login'}
                >
                  Login
                </Link>
              )}
            </div>
            <div className="lg:hidden block">
              <NavbarHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
