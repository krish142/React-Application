import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"

export const UseState:React.FC = () => {
    const [count,setcount] = useState<number>(0);

    const handledecrement = () =>{
        setcount(count-1)
    }
    const handleincrement = () =>{
        setcount(count+1)
    }
    return(
        <Box>
            <Box sx={{border:"1px solid black"}}>
                <Button onClick={()=>handledecrement()}>-</Button>
                <Typography>{count}</Typography>
                <Button onClick={()=>handleincrement()}>+</Button>
            </Box>
        </Box>
    )
}