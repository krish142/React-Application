import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import {NavBar} from "./components/common/NavBar"
import { Footer } from "./components/common/Footer"

export const Layout:React.FC = ()=>{
    return(
        <Box>
            <NavBar />
            <Outlet />
            <Footer />
        </Box>
    )
}