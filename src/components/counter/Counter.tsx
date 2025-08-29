import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, increment } from "../../features/counter/CounterSlice";

export const Counter = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch();

    const handleincrement = () => {
        dispatch(increment())
    }

    const handledecrement = () => {
        dispatch(decrement())
    }
    return (
        <Box>
            <Box>
                <Typography>Counter App</Typography>
            </Box>
            <Box sx={{display:"flex", alignItems:"center" , border:"1px solid black", justifyContent:"center", gap:"20px" , padding:"5px"}}>
                <Button onClick={() => handledecrement()}>-</Button>
                <Typography>{count}</Typography>
                <Button onClick={() => handleincrement()}>+</Button>
            </Box>

        </Box>
    )
}