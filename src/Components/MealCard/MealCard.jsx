import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, fade } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    width: 250,
  },
  media: {
    height: 140,
  },
});
export default ({ id, getNew, strMealThumb, strMeal }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!getNew || getNew !== false) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

        .then((result) => {
          setData(result.data.meals[0]);
        });
    } else {
      setData({
        strMealThumb: strMealThumb,
        strMeal: strMeal,
      });
    }
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.strMealThumb}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2">
            {data.strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
