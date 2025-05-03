import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CategoryCard = ({category}) => {
    const defaultImage = "noimage.jpeg";

    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                sx={{height: 140}}
                image={`${import.meta.env.VITE_IMAGES_URL}${category.image !== null ? category.image : defaultImage}`}
                title={category.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    {category.name}
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    {category.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CategoryCard;