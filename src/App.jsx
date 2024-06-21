import './App.css';
import CharacterProfile from './pages/CharacterProfile';
import GameSelect from './pages/GameSelect';
import CharacterSelect from './pages/CharacterSelect';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import dataset from "./data"
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
console.log(dataset)

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <>
          <Outlet />
          <NavBar />
        </>
      ),
      children: [
        {
          index: true,
          element: <GameSelect />,
        },
        {
          path: '/games',
          element: <GameSelect />,
        },
        {
          path: '/fighters',
          element: <CharacterSelect />,
        },
        {
          path: '/fighters/:id',
          element: <CharacterProfile />,
        },
        {
          path: '/favorites',
          element: <p>Favorites</p>
        }
      ]
    },
  ]
)

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
