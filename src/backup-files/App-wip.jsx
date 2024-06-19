import './App.css';

import NavBar from './components/NavBar.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import dataset from "./data.js"

import { createBrowserRouter, Outlet } from 'react-router-dom';
import CharacterProfile from './pages/CharacterProfile.jsx';
import CharacterSelect from './pages/CharacterSelect.jsx';
import GameSelect from './pages/GameSelect.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

        {/* <Outlet /> */}
        <CharacterProfile />
        <NavBar />

    </ThemeProvider>
  );
}