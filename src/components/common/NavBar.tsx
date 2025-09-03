import { AppBar, Box, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

export const NavBar = () =>{
    return(
        <AppBar sx={{padding:"10px"}} position="sticky">
            <Box>
                <NavLink to="/">
                <Typography>Logo</Typography>
                </NavLink>
            </Box>
        </AppBar>
    )
}