import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Grid, AppBar, Box, Tabs, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CategoryCard from './CategoryCard';
import MealCard from '../../Components/MealCard/MealCard';
import LoaderProgress from '../../Components/LoaderProgress';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 30,
  },
  mealCard: {
    margin: 30,
  },
  mealGrid: {
    marginTop: 25,
  },
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [meals, setMeals] = useState([]);
  const [mealsCount, setMealsCount] = useState(0);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem('categoriesKey');
    if (temp) {
      const data = JSON.parse(temp);
      setCategory(data);
    } else {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((result) => {
          setCategory(result.data.categories);
        });
    }
  }, []);

  const handleCategoryClick = (id) => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
      .then((result) => {
        const cat = category.filter((x) => x.strCategory === id);
        setSelectCategory(cat[0]);
        setMealsCount(result.data.meals.length);
        const meals = result.data.meals.map((item, index) => {
          return (
            <Link className={classes.mealCard} href={`/meal/${item.idMeal}`}>
              <MealCard
                id={item.idMeal}
                getNew={false}
                strMealThumb={item.strMealThumb}
                strMeal={item.strMeal}
              />
            </Link>
          );
        });
        setMeals(meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log({ ...err });
        alert('Some Error');
      });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <LoaderProgress isLoading={isLoading} />
      <Grid item sx={12} style={{ width: '100%' }}>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="on"
            >
              <CategoryCard handleCategoryClick={handleCategoryClick} />
            </Tabs>
          </AppBar>
        </div>
      </Grid>
      <Grid container item className={classes.mealGrid}>
        <Grid item>
          <Typography variant="subtitle1">
            {selectCategory.strCategoryDescription}
          </Typography>
          <Typography variant="caption">Meals Count : {mealsCount}</Typography>
        </Grid>
        <Grid container item>
          {meals}
        </Grid>
      </Grid>
    </Grid>
  );
};
