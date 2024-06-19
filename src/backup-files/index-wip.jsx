import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GameSelect from './pages/GameSelect';
import App from './App.jsx'
import './Reset.css';
import './index.css'
import CharacterProfile from './pages/CharacterProfile';
import CharacterSelect from './pages/CharacterSelect';
import NavBar from './components/NavBar.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <NavBar />
      }
    ]
  },
  {
    path: '/character-select',
    element: <CharacterSelect />,
    children: [
      {
        path: '/character-profile',
        element: <CharacterProfile />
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
)