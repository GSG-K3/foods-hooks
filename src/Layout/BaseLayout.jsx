import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../Components/Header';
import Home from './Home';
import Category from './Categories/index';
export default () => (
  <React.Fragment>
    <Router>
      <Grid container direction="column">
        <Grid item>
          <Route component={NavBar} />
        </Grid>
        <Grid container item>
          <Grid sx={0} sm={1} />
          <Grid sx={12} sm={10}>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/category" component={Category} />
              {/* <Route exact path="/meals-by-area" component={{}} /> */}
            </Switch>
          </Grid>
          <Grid sx={0} sm={1} />
        </Grid>
      </Grid>
    </Router>
  </React.Fragment>
);
