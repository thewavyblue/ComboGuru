import '../App.css';
import ContentCard from '../components/ContentCard';
import gameData from "../gameData";
import { Grid, Typography } from '@mui/material';


export default function GameSelect() {

const gameSelectCards = gameData.map((game, i) => {
    return (   
        <Grid item xs={6} key={i}>
            <ContentCard
                id={game.id}
                title={game.title}
                image={game.image}
                platforms={game.platforms}
                isFavourite={game.isFavourite}
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
            GAME COLLECTION
        </Typography>
        <Grid container spacing={2}>
            {gameSelectCards}
        </Grid>
    </>
)}