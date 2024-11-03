
import NavBar from "./NavBar"
import Footer from "./Footer"
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div className="mx-auto max-w-6xl">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
};

export default Root;

