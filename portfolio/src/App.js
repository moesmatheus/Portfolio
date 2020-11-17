import logo from './logo.svg';
import './App.css';
import ListPort from './components/PortList'
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Container>
        <br/>
        <Grid container spacing={3}>

          <Grid item xs={12} alignItems="flex-start" alignContent="flex-start">

            <Typography variant="h6" align="left">Portfolio Matheus Amaral</Typography>

          </Grid>

          <Grid item xs={12}>
            <Paper>
              <ListPort />
            </Paper>
          </Grid>

        </Grid>

      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
