import { Box, Card, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

type Product = {
    id: number,
    title: string,
    body: string,
    views: number,
}

export const UseEffect: React.FC = () => {

    const [post, setpost] = useState<Product[]>([]);

    const fetchapi = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/posts");
            const data = await res.data;
            setpost(data.posts);
        } catch (error) {
            console.log(error);
            
        }
    }
    

    useEffect(() => {
        fetchapi();
    }, [])
    return (
        <Box>
            {post.map((item) =>{
                return(
                    <Card key={item.id}>
                        <Typography>{item.id}</Typography>
                        <Typography>{item.body}</Typography>
                        <Typography>{item.title}</Typography>
                    </Card>
                )
            })}
        </Box>
    )
}