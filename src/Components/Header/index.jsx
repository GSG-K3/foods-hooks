import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Tabs,
  Tab,
} from '@material-ui/core';

import { Search, LocalDining, OutdoorGrill } from '@material-ui/icons';

import { Link } from 'react-router-dom';

import NavBarStyle from './Style';

export default (props) => {
  const classes = NavBarStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.NavBar}>
            <div className={classes.title}>
              <Link to="/" className={classes.titleLink}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <LocalDining />
                  <OutdoorGrill />
                </IconButton>

                <Typography variant="h6" noWrap>
                  Yam Restaurant
                </Typography>
              </Link>
            </div>
            <div>
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  label="Home"
                  className={classes.tab}
                  onClick={() => {
                    props.history.push({
                      pathname: '/',
                    });
                  }}
                />

                <Tab
                  label="Categories"
                  className={classes.tab}
                  onClick={() => {
                    props.history.push({
                      pathname: '/category',
                    });
                  }}
                />

                {/* <Tab
                  label="Meal By Area"
                  className={classes.tab}
                  onClick={() => {
                    props.history.push({
                      pathname: '/meals-by-area',
                    });
                  }}
                /> */}
              </Tabs>
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
