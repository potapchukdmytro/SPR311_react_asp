import React from 'react';
import {Card, CardContent, Typography, CardMedia, Button, CardActions} from '@mui/material';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductCard = ({product}) => {
    console.log(product);
    return (
        <Card sx={{height: "100%"}}>
            {/* Картка з каруселлю */}
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                {
                    product.images.length > 0 ?
                    product.images.map((image, index) => (
                    <div key={index}>
                        {/*<CardMedia*/}
                        {/*    component="img"*/}
                        {/*    height="200"*/}
                        {/*    image={import.meta.env.VITE_IMAGES_URL + image}*/}
                        {/*    alt={product.name}*/}
                        {/*/>*/}
                        <img src={import.meta.env.VITE_IMAGES_URL + image} alt={product.name} height="400px"/>
                    </div>
                )) : <div>
                            <CardMedia
                                component="img"
                                height="200"
                                image={import.meta.env.VITE_IMAGES_URL + "noimage.jpeg"}
                                alt={product.name}
                            />
                        </div>
                }
            </Carousel>

            {/* Інформація про товар */}
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {product.description}
                </Typography>
                <Typography variant="p" gutterBottom>
                    {product.categories.join(', ')}
                </Typography>
                <Typography variant="h5" color="primary">
                    {product.price}
                </Typography>
            </CardContent>

            {/* Кнопки */}
            <CardActions>
                <Button size="small" variant="contained" color="primary">
                    Додати в кошик
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;