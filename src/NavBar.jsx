import "./NavBar.css"

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import StarIcon from '@mui/icons-material/Star';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TuneIcon from '@mui/icons-material/Tune';

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

<BottomNavigation sx={{ bgcolor: '#353535' }} value={value} onChange={handleChange}>
    <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<TempleBuddhistIcon />}
        />
    <BottomNavigationAction
        label="Characters"
        value="characters"
        icon={<SportsMartialArtsIcon />}
    />
    <BottomNavigationAction
        label="Combos"
        value="combos-list"
        icon={<FormatListBulletedIcon />}
    />
    <BottomNavigationAction
        label="Favourites"
        value="favourites"
        icon={<StarIcon />}
    />
    <BottomNavigationAction
        label="Settings"
        value="settings"
        icon={<TuneIcon />}
    />
    </BottomNavigation>
      </Paper>
    </Box>
  );
}