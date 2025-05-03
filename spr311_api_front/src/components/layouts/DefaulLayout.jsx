import Navbar from "../navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

const DefaultLayout = () => {
    return (
        <>
            <Navbar/>
            <Box>
                <Outlet/>
            </Box>
        </>
    )
};

export default DefaultLayout;