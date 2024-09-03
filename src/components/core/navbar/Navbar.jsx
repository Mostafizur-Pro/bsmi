import { NavLink, Link } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Dropdown } from 'flowbite-react'
import { useAuth } from '@/components/context/AuthContext'

const NavbarHamburgerMenu = () => {
  return (
    <div>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger>
          <div className="px-3">
            <div className="w-7 h-0.5 bg-black "></div>
            <div className="w-7 h-0.5  bg-black mt-2"></div>
          </div>
        </SheetTrigger>
        <SheetContent className=" overflow-y-auto px-5 md:px-10" side="right">
          <div className="w-[156px]">{/* <NavLink to={'/'}></NavLink> */}</div>

          <div className="flex flex-col space-y-3 mt-10">
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500"
              to={'/'}
            >
              HOME
            </NavLink>

            <div
              className="
                  rounded-lg bg-[white]"
            >
              <Dropdown
                className="bg-white w-[200px] rounded-lg"
                inline
                label={
                  <div className="flex items-center ">
                    <div>
                      <h2 className="font-semibold">PAGES</h2>
                    </div>
                  </div>
                }
              >
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-left"
                    to={'/about'}
                  >
                    ABOUT
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-left"
                    to={'/faq'}
                  >
                    FAQ
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md text-left"
                    to={'/gallary'}
                  >
                    GALLARY
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </div>

            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500"
              to={'/events'}
            >
              Events
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500"
              to={'/programs'}
            >
              Programs
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500"
              to={'/blog'}
            >
              Blog
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500"
              to={'/contact'}
            >
              Contact
            </NavLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

// default component
const Navbar = () => {
  const { users } = useAuth()

  return (
    <nav className="py-2 sticky top-0 bg-white z-50">
      <div className="b_profile_container">
        <div className="flex items-center justify-between">
          <div className="w-[100px] md:w-[165px] xl:w-[186px]">BSMI</div>

          <div className="hidden lg:flex items-center  ">
            <div className="md:space-x-4 xl:space-x-6 flex items-center ">
              <NavLink className="font-semibold " to={'/'}>
                HOME
              </NavLink>
              <div
                className="
                  rounded-lg bg-[white]"
              >
                <Dropdown
                  className="bg-white w-[200px] rounded-lg"
                  inline
                  label={
                    <div className="flex items-center">
                      <div>
                        <h2 className="font-semibold">PAGES</h2>
                      </div>
                    </div>
                  }
                >
                  <Dropdown.Item>
                    <Link
                      className="w-11/12 mx-auto my-1 rounded-md text-start"
                      to={'/about'}
                    >
                      ABOUT
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      className="w-11/12 mx-auto my-1 rounded-md text-start"
                      to={'/faq'}
                    >
                      FAQ
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      className="w-11/12 mx-auto my-1 rounded-md text-start"
                      to={'/gallary'}
                    >
                      GALLARY
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <NavLink className="font-semibold " to={'/events'}>
                EVENTS
              </NavLink>
              <NavLink className="font-semibold " to={'/programs'}>
                PROGRAMS
              </NavLink>
              <NavLink className="font-semibold " to={'/blog'}>
                BLOG
              </NavLink>
              <NavLink className="font-semibold " to={'/contacts'}>
                CONTACTS
              </NavLink>
            </div>
          </div>

          <div className="flex items-center">
            <div className="">
              {users ? (
                <>{users.name}</>
              ) : (
                <Link to={'/auth/login'}>Login</Link>
              )}
            </div>
            <div></div>
            <div className="lg:hidden block">
              <NavbarHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
