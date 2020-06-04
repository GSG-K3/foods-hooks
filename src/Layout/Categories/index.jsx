import React, { useState, useEffect } from 'react';
import { Grid, AppBar, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CategoryCard from './CategoryCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleCategoryClick = (id) => {
    alert(id);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container>
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
              centered={true}
            >
              <CategoryCard handleCategoryClick={handleCategoryClick} />
            </Tabs>
          </AppBar>
        </div>
      </Grid>
    </Grid>
  );
};
