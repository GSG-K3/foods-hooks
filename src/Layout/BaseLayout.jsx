import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Meal from "../Components/mealDetails";
export default () => (
  <React.Fragment>
    <Router>
         <Switch>
              <Route path="/meal" exact component={Meal} />
            </Switch>
         
    </Router>
  </React.Fragment>
);
