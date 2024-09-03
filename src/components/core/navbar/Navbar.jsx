import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dropdown } from "flowbite-react";
import { useAuth } from "@/components/context/AuthContext";

const NavbarHamburgerMenu = () => {
  return (
    <div>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-3 cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-7 h-0.5 bg-black transition-all duration-300"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-7 h-0.5 bg-black mt-2 transition-all duration-300"
            ></motion.div>
          </motion.div>
        </SheetTrigger>
        <SheetContent
          className="overflow-y-auto px-5 md:px-10 transition-transform duration-500 ease-in-out"
          side="right"
        >
          <div className="w-[156px]">{/* <NavLink to={'/'}></NavLink> */}</div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col space-y-3 mt-10"
          >
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={"/"}
            >
              HOME
            </NavLink>

            <div className="rounded-lg text-white">
              <Dropdown
                className="text-white w-[200px] rounded-lg"
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
                    to={"/about"}
                  >
                    ABOUT
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-left hover:bg-gray-100 transition-colors duration-300"
                    to={"/faq"}
                  >
                    FAQ
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-left hover:bg-gray-100 transition-colors duration-300"
                    to={"/gallery"}
                  >
                    GALLERY
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </div>

            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={"/events"}
            >
              EVENTS
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={"/programs"}
            >
              PROGRAMS
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={"/blog"}
            >
              BLOG
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500 transition-colors duration-300"
              to={"/contact"}
            >
              CONTACT
            </NavLink>
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// Default component
const Navbar = () => {
  const { users } = useAuth();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-2 sticky top-0 text-white z-50 shadow-md transition-shadow duration-300 backdrop-blur-md bg-white/30"
    >
      <div className="b_profile_container">
        <div className="flex items-center justify-between px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="w-[100px] md:w-[15px] xl:w-[186px] font-bold text-4xl text-red-700 transition-all duration-300"
          >
            BSMI
          </motion.div>

          <div className="hidden lg:flex items-center space-x-4">
            <NavLink
              className="font-semibold hover:text-blue-600 transition-colors duration-300"
              to={"/"}
            >
              HOME
            </NavLink>
            <div className="relative">
              <Dropdown
                className="bg-white w-[200px] rounded-lg"
                inline
                label={
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center cursor-pointer hover:text-blue-600 transition-colors duration-300"
                  >
                    <h2 className="font-semibold">PAGES</h2>
                  </motion.div>
                }
              >
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-start hover:bg-gray-100 transition-colors duration-300"
                    to={"/about"}
                  >
                    ABOUT
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-start hover:bg-gray-100 transition-colors duration-300"
                    to={"/faq"}
                  >
                    FAQ
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-start hover:bg-gray-100 transition-colors duration-300"
                    to={"/gallery"}
                  >
                    GALLERY
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </div>
            <NavLink
              className="font-semibold hover:text-blue-600 transition-colors duration-300"
              to={"/events"}
            >
              EVENTS
            </NavLink>
            <NavLink
              className="font-semibold hover:text-blue-600 transition-colors duration-300"
              to={"/programs"}
            >
              PROGRAMS
            </NavLink>
            <NavLink
              className="font-semibold hover:text-blue-600 transition-colors duration-300"
              to={"/blog"}
            >
              BLOG
            </NavLink>
            <NavLink
              className="font-semibold hover:text-blue-600 transition-colors duration-300"
              to={"/contact"}
            >
              CONTACT
            </NavLink>
          </div>

          <div className="flex items-center">
            <div className="mr-4">
              {users ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="font-semibold text-gray-800"
                >
                  {users.name}
                </motion.span>
              ) : (
                <Link
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  to={"/auth/login"}
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
    </motion.nav>
  );
};

export default Navbar;
