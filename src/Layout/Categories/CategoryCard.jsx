import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Tab,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 160,
  },
  media: {
    width: 80,
    height: 50,
    margin: 'auto',
  },
});
export default ({ handleCategoryClick }) => {
  const classes = useStyles();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((result) => {
        setCategory(result.data.categories);
      });
  }, []);
  return category.map((item, index) => {
    return (
      <Tab
        key={index}
        label={
          <Card
            className={classes.root}
            onClick={() => handleCategoryClick(item.strCategory)}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.strCategoryThumb}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="button" display="block">
                  {item.strCategory}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        }
      />
    );
  });
};
