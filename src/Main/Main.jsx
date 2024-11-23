import { Outlet } from "react-router-dom";
import Navbar from "../page/Home/Navbar/Navbar";
import Footer from "../share/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;