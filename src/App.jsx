import './App.css';
import CharacterProfile from './pages/CharacterProfile';
import GameSelect from './pages/GameSelect';
import CharacterSelect from './pages/CharacterSelect';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import dataset from "./data"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <BrowserRouter>
        <Routes>
          <Route index element={<GameSelect />} />
          <Route path="/games" element={<GameSelect />} />
          <Route path="/fighters" element={<CharacterSelect />} />
          <Route path="/fighters/:characterId" element={<CharacterProfile />} />
          <Route path="/favorites" element={<p>Favorites</p>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </ThemeProvider>
  );
}
