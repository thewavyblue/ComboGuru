import "./NavBar.css"

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import StarIcon from '@mui/icons-material/Star';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function NavBar() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box sx={{ pb: 7 }} >
      <Paper
        sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0
        }}
        elevation={3}>

        <BottomNavigation
          sx={{ bgcolor: '#353535' }}
          value={value}
          onChange={handleChange}>

            <BottomNavigationAction
              component={Link}
              to="/"
              label="Home"
              value="/"
              icon={<TempleBuddhistIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to="/games"
              label="Games"
              value="/games"
              icon={<SportsEsportsIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to="/fighters"
              label="Fighters"
              value="/fighters"
              icon={<SportsMartialArtsIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to="/fighters/0"
              label="Combos"
              value="/combos-list"
              icon={<FormatListBulletedIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to="/favorites"
              label="Saved"
              value="/favorites"
              icon={<StarIcon />}
            />

        </BottomNavigation>
      </Paper>
    </Box>
  );
}
