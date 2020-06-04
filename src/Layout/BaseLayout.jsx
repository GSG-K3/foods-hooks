import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../Components/Header';
import Home from './Home/index.jsx';
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
              <Route exact path="/" component={Home} />
            </Switch>
          </Grid>
          <Grid sx={0} sm={3} />
        </Grid>
      </Grid>
    </Router>
  </React.Fragment>
);
