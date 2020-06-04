import React, { useState, useEffect } from 'react';
import MealCard from '../../Components/MealCard/MealCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './style.css';

export default () => {
  const [data, setData] = useState([]);
  const req1 = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  const req2 = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  const req3 = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  const req4 = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  const req5 = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  const req6 = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  const req7 = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  const req8 = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  const req9 = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  useEffect(() => {
    axios.all([req1, req2, req3, req4, req5, req6, req7, req8, req9]).then(
      axios.spread((...result) => {
        console.log(result);
        const randommeals = result.map((meal) => {
          console.log(meal.data.meals[0]);
          return meal.data.meals[0];
        });
        setData(randommeals);
      })
    );
  }, []);
  return (
    <div className="home">
      <p>
        Welcome to Yam Restaurant may your day be as wonderful as the first sip
      </p>

      <Grid container item>
        {data.map((item) => {
          return (
            <Link className="link" to={`/meal/${item.idMeal}`}>
              <MealCard id={item.idMeal} />
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};
