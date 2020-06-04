import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../Components/Header';
import Category from './Categories';
import Home from './Home/index.jsx';
import Meal from "../Components/mealDetails";

export default () => (
  <div>
    <Router>
      <Grid container direction="column">
        <Grid item>
          <Route component={NavBar} />
        </Grid>
        <Grid container item>
          <Grid item sx={0} sm={1} />
          <Grid item sx={12} sm={10}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/category" component={Category} />
              <Route exact path="/meal/:id" component={Meal} />
            </Switch>
          </Grid>
          <Grid item sx={0} sm={1} />
        </Grid>
      </Grid>
    </Router>
  </div>
);
