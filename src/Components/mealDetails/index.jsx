import React, { Fragment, useState, useEffect } from "react";
import { Paper, Typography, Grid, Link, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";

const Styles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
  image: {
    marginTop: theme.spacing(20),

    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(20, 20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  par: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  },
  meal: {
    margin: theme.spacing(5, 20, 2),
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "space-around",
  },
  tube: {
    height: "100px",
    width: "100px",
    display: "flex",
    marginLeft: "380px",
    justifyContent: "center",
  },
}));

export default function MealDetails(props) {
  const classes = Styles();
  const id= '52780';
  // const id = props.match.params.id;
  let [meal, mealFn] = useState([]);
  let [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        const meal = response.data.meals[0];
        mealFn(response.data.meals[0]);
        let mealIngred = [];
        for (let i = 1; i <= 20; i++) {
          const imgName = !meal[`strIngredient${i}`]
            ? ""
            : meal[`strIngredient${i}`] + ".png";

          mealIngred.push(
            <div key={i}>
              <img
                src={
                  !imgName
                    ? ""
                    : `https://www.themealdb.com/images/ingredients/${imgName}`
                }
                height="150px"
                alt={!imgName ? "" : "image photo"}
              />
              <h3 className={classes.par}>{meal[`strMeasure${i}`]}</h3>
            </div>
          );
        }
        setIngredient(mealIngred);
      });
  }, []);

  return (
    <Fragment>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <Typography component="h1" variant="h4" className={classes.par}>
            {meal.strMeal}
          </Typography>
          <img className={classes.meal} src={meal.strMealThumb} alt="meal" />
          <h2 className={classes.par}>{meal.strTags}</h2>
          <Typography component="h1" variant="h4" className={classes.par}>
            Way of cooking
          </Typography>
          <Link color="Red" href={meal.strYoutube} target="_blank">
            <img
              className={classes.tube}
              src="https://cdn.iconscout.com/icon/free/png-256/youtube-86-226404.png"
              alt="youtube"
            />
          </Link>
          <Typography
            component="h3"
            variant="h6"
            className={classes.par}
            style={{ marginLeft: "80px", marginRight: "40px" }}
          >
            {meal.strInstructions}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" className={classes.par}>
              Ingredients
            </Typography>
            <ul className={classes.ul}>{ingredient}</ul>

            <br />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
