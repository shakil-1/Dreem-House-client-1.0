import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home/Home";
import Main from "../Main/Main";
import Login from "../page/Login/Login";
import Register from "../page/Login/Register";
import Dashboard from "../page/Dashboard/Dashboard/Dashboard";
import Apartment from "../page/Dashboard/Apartment/Apartment";
import ApartmentCreate from "../page/Dashboard/ApartmentCreate/ApartmentCreate";
import UserHome from "../page/Dashboard/UserHome/UserHome";
import UserAgreement from "../page/Dashboard/UserAgreement/UserAgreement";
import ManageMembers from "../page/Dashboard/ManageMembers/ManageMembers";
import MakeAnnouncement from "../page/Dashboard/MakeAnnouncement/MakeAnnouncement";
import Announcements from "../page/Dashboard/MakeAnnouncement/Announcements";
import MakePayment from "../page/Dashboard/MakePayment/MakePayment";
import PaymentHistory from "../page/Dashboard/PaymentHistory/PaymentHistory";
import Payment from "../page/Dashboard/Payment/Payment";
import AgreementRequests from "../page/Dashboard/AgreementRequests/AgreementRequests";
import ManageCoupons from "../page/Dashboard/ManageCoupons/ManageCoupons";
import UpdatedCoupons from "../page/Dashboard/ManageCoupons/UpdatedCoupons";
import NotFound from "../share/Footer/NotFound/NotFound";
import AdminRoute from "./AdminRoute";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment",
        element: <Apartment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      // user
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "userAgreement",
        element: <UserAgreement />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
      // member
      {
        path: "makePayment",
        element: <MakePayment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      // admin
     
      {
        path: "apartmentCreate",
        element: <AdminRoute><ApartmentCreate /></AdminRoute>,
      },
      {
        path: "agreementRequests",
        element: <AdminRoute><AgreementRequests /></AdminRoute>,
        
      },
   
      {
        path: "manageMembers",
        element: <AdminRoute><ManageMembers /></AdminRoute>,
      },
    
      {
        path: "makeAnnouncement",
        element: <AdminRoute><MakeAnnouncement /></AdminRoute>,
      },
      {
        path:'manageCoupons',
        element: <ManageCoupons />,
        
      },
      {
        path: 'updatedCoupons/:id',
        element: <UpdatedCoupons />,
        loader: ({ params }) => fetch(`http://localhost:5000/api/v1/coupons/${params.id}`)
      },      
    ],
  },
]);

export default Router;
