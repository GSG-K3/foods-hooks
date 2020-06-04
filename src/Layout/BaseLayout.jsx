import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../Components/Header';
import Home from './Home';
import Category from './Categories';
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
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/category" component={Category} />
              {/* <Route exact path="/meals-by-area" component={{}} /> */}
              <Route exact path="/meal/:id" component={Category} />
            </Switch>
          </Grid>
          <Grid item sx={0} sm={1} />
        </Grid>
      </Grid>
    </Router>
  </div>
);
