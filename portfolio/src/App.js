import logo from './logo.svg';
import './App.css';
import ListPort from './components/PortList'
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

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
        <Paper>
        <Container>
        <h3>Portfolio Matheus Amaral</h3>
        </Container>
        </Paper>
      <Paper>
      <ListPort />
      </Paper>
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
