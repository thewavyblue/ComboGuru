import '../App.css';
import CharacterContentCard from '../components/CharacterContentCard';
import characterData from "../characterData";
import { Grid, Typography } from '@mui/material';


export default function CharacterSelect() {

const characterSelectCards = characterData.map((character, i) => {
    return (   
        <Grid item xs={6} key={i}>
            <CharacterContentCard
                id={character.id}
                name={character.name}
                image={character.image}
            />
        </Grid>
    )
})

return (
    <>
        <Typography 
            level="h1"
            py={2}
            textAlign={'center'}
        >
            CHARACTER ROSTER
        </Typography>
        <Grid container spacing={2}>
            {characterSelectCards}
        </Grid>
    </>
)}