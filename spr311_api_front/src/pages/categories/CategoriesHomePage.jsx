import {useEffect, useState} from "react";
import axios from "axios";
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CategoryCard from "../../components/cards/CategoryCard.jsx";

const CategoriesHomePage = () => {
    const [categories, setCategories] = useState([]);
    const url = import.meta.env.VITE_API_URL + "categories";

    const fetchData = async () => {
        const response = await axios.get(url);
        if (response.status === 200) {
            setCategories(response.data.payload);
        }
    }


    useEffect(() => {
        fetchData().catch(error => console.error(error));
    }, [])

    return (
        <Box sx={{mt: 5, display: 'flex', justifyContent: 'center'}}>
            <h1>Categories</h1>
            <Grid container spacing={2} sx={{backgroundColor: 'gray', p: 2}}>
                {
                    categories.map((category) => (
                        <Grid key={category.id} size={3}>
                            <CategoryCard category={category}/>
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    )
}

export default CategoriesHomePage;