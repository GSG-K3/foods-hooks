import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../Components/Header';
import Home from './Home';
import One from '../Components/One';
import Two from '../Components/Two';
import Three from '../Components/Three';
export default () => (
  <React.Fragment>
    <Router>
      <Grid container direction="column">
        <Grid item>
          <Route component={NavBar} />
        </Grid>
        <Grid container item>
          <Grid sx={0} sm={3} />
          <Grid sx={12} sm={9}>
            <Switch>
              <Route exact path="/" component={One} />
              <Route exact path="/category" component={Two} />
              <Route exact path="/meals-by-area" component={Three} />
            </Switch>
          </Grid>
          <Grid sx={0} sm={3} />
        </Grid>
      </Grid>
    </Router>
  </React.Fragment>
);
