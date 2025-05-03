import ProductCard from "../../components/cards/ProductCard.jsx";
import { useEffect, useState } from "react";
import { http } from "../../http_common.js";
import Grid from "@mui/material/Grid2";
import { Box, CircularProgress } from "@mui/material";

const ProductsHomePage = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        setLoading(true);
        let url = "product/list";

        if (category) {
            url += "?category=" + category;
        }

        const response = await http.get(url);

        if (response.status === 200) {
            const { data } = response;
            const { payload } = data;
            setProducts(payload);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts().catch((error) => console.log(error));
    }, []);

    return (
        <Box sx={{ padding: "20px" }} display="flex" justifyContent="center">
            {!loading ? (
                products.length > 0 ? (
                    <Grid container spacing={3}>
                        {products.map((product, index) => (
                            <Grid size={3} key={index}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <h1>Products not found</h1>
                )
            ) : (
                <CircularProgress />
            )}
        </Box>
    );
};

export default ProductsHomePage;
