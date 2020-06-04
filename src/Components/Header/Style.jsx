import { makeStyles, fade } from '@material-ui/core';
export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  NavBar: {
    flexGrow: 1,
    display: 'flex',
  },
  title: {
    flex: '0 0 50%',
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  titleLink: {
    fontSize: '1.25rem',
    // font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: theme.palette.common.white,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  tab: { padding: '20px 12px' },
}));
