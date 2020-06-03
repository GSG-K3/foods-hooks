import { createMuiTheme } from '@material-ui/core/styles';

export default () => {
  return createMuiTheme({
    palette: {
      primary: { main: '#1C7690' },
      secondary: {
        main: '#ffa726',
      },
    },
  });
};
