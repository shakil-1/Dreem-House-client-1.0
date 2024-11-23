import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { IoIosLogIn } from "react-icons/io";
import logo from "../../../assets/logo.png";
const Navbar = ({ children }) => {
  const { user, logOutUser } = useAuth();

  const handelLogOut = () => {
    logOutUser();
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/apartment">Apartment</Link>
      </li>
     

      {user?.email ? (
        <li>
          <div className="dropdown dropdown-bottom dropdown-end z-40">
            <label tabIndex={0} className="">
              <div className="avatar">
                <div className="w-8 h-8 rounded-full ring ring-primary  ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu px-2  bg-base-100 rounded-md w-auto  "
            >
             
                <button disabled>{user?.displayName}</button>
            
              <li>
                <Link to="/dashboard"> Dashboard</Link>
              </li>
              <li onClick={handelLogOut}>
                <button>LogOut</button>
              </li>
            </ul>
          </div>
        </li>
      ) : (
        <Link to="/login">
            <button className="btn btn-sm shadow-none ">
              <IoIosLogIn className="text-2xl p-1"></IoIosLogIn>
            </button>
        </Link>
      )}
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-4 ">
              <img className="h-14  cursor-pointer " src={logo} alt="" />
              <h1 className="md:text-2xl font-bold  cursor-pointer text-orange-500">
                Dream House
              </h1>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal ">
                {/* Navbar menu content here */}
                {navLinks}
              </ul>
            </div>
          </div>
          {/* Page content here */}

          {/* Content */}
          {children}
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 z-50 overflow-hidden">
            {/* Sidebar content here */}
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
