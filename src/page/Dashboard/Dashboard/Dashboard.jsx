import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ImProfile } from "react-icons/im";
import { MdApartment, MdPriceChange } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import useAdmin from "../../../hooks/useAdmin";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { MdGroups2, MdNotificationsActive } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { RiCoupon2Fill } from "react-icons/ri";
import { PiListBulletsBold } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";

const Dashboard = () => {
  const [open, isOpen] = useState(true);
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const [admins, isAdminLoading] = useAdmin();

  const handelLogOut = () => {
    logOutUser();
    navigate("/login");
  };

  return (
    <div className="flex">
      <div
        className={`transition-all ${
          open ? "w-64 " : ""
        }min- h-screen bg-sky-400 absolute z-50 duration-700   top-0`}
      >
        {open ? (
          <BsArrowLeft
            className={`text-blue-500 text-3xl bg-[#FFF] rounded-full absolute -right-3 top-4 shadow-md border border-white-600 cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => isOpen(!open)}
          ></BsArrowLeft>
        ) : (
          <BiMenu
            className={`shadow-md absolute text-3xl cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => isOpen(!open)}
          ></BiMenu>
        )}

        {open ? (
          <ul className="menu p-4  mx-auto ">
            {admins?.admin ? (
              // Admin start
              <>
                <NavLink>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </NavLink>
                <li className="mt-2">
                  <NavLink to="/dashboard/userHome">
                    <ImProfile className="text-xl"></ImProfile>
                    My Profile
                  </NavLink>
                </li>

                <li className="">
                  <MdGroups2></MdGroups2>
                  <NavLink to="/dashboard/manageMembers">
                    <MdGroups2 className="text-2xl"></MdGroups2>
                    Manage Members
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/dashboard/makeAnnouncement">
                    <SiGooglemessages className="text-2xl"></SiGooglemessages>
                    Make announcement
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/dashboard/agreementRequests">
                    <MdNotificationsActive className="text-2xl"></MdNotificationsActive>
                    Agreement requests
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/dashboard/manageCoupons">
                    <RiCoupon2Fill className="text-2xl"></RiCoupon2Fill>
                    Manage Coupons
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/apartmentCreate">
                    <PiListBulletsBold className="text-2xl"></PiListBulletsBold>
                    Apaitment create
                  </NavLink>
                </li>
              </>
            ) : (
              // admin end
              <>
                {
                  admins?.member ? (
                    // member start
                    <>
                      <NavLink>
                        <div className="avatar">
                          <div className="w-24 rounded-full">
                            <img src={user?.photoURL} />
                          </div>
                        </div>
                      </NavLink>

                      <li className="">
                        <NavLink to="/dashboard/userHome">
                          <ImProfile></ImProfile>
                          My Profile
                        </NavLink>
                      </li>
                      <li className="">
                        <NavLink to="/dashboard/makePayment">
                          <MdPriceChange className="text-2xl"></MdPriceChange>
                          Make payment
                        </NavLink>
                      </li>
                      <li className="">
                        <NavLink to="/dashboard/paymentHistory">
                          <FaHistory className="text-2xl"></FaHistory>
                          Payment History
                        </NavLink>
                      </li>

                      <li className="">
                        <NavLink to="/dashboard/announcements">
                          <MdNotificationsActive className="text-2xl"></MdNotificationsActive>
                          Announcements
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    //member end
                    <>
                      {/* user start */}
                      <NavLink>
                        <div className="avatar">
                          <div className="w-24 rounded-full">
                            <img src={user?.photoURL} />
                          </div>
                        </div>
                      </NavLink>

                      <li className="">
                        <NavLink to="/dashboard/userHome">
                          <ImProfile className="text-xl"></ImProfile>
                          My Profile
                        </NavLink>
                      </li>
                      <li className="">
                        <NavLink to="/dashboard/announcements">
                          <MdNotificationsActive className="text-2xl"></MdNotificationsActive>
                          Announcements
                        </NavLink>
                      </li>
                    </>
                  )
                  // user end
                }
              </>
            )}
            

            {/* share nav links  */}
            <div className="divider"></div>

            <li>
              <NavLink to="/apartment">
                <MdApartment className="text-2xl"></MdApartment>
                All Apartment
              </NavLink>
            </li>

            <li>
              <NavLink to="/">
                <FaHome className="text-2xl"></FaHome>
                Home
              </NavLink>
            </li>
            <div
              onClick={handelLogOut}
              className="flex items-center font-medium mt-1 hover:bg-black hover:text-white rounded-md p-2"
            >
              <IoIosLogOut className="ml-2 text-2xl"></IoIosLogOut>
              <span className="ml-1">LogOut</span>
            </div>
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className="flex-1 p-8 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
