import './App.css';
import CharacterProfile from './pages/CharacterProfile';
// import GameSelect from './pages/GameSelect';
// import CharacterSelect from './pages/CharacterSelect';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import dataset from "./data"
console.log(dataset)

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        {/* <GameSelect /> */}
        {/* <CharacterSelect /> */}
        <CharacterProfile />

      <NavBar />
    </ThemeProvider>
  );
}