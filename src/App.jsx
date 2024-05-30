// import logo from './logo.svg';
import './App.css';
import ComboHero from './ComboHero';
import ComboIntro from './ComboIntro';
import ComboAccordion from './ComboAccordion';
import NavBar from './NavBar';
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

  const specialMoves = dataset.map((character, i) => {
    return (
      <ComboAccordion 
        key={i}
        summaryIcon="./assets/icon--special.svg" 
        summary="Special moves"
        moveType={character.moves.special}
        moveName={character.moves.special.name}
        combo={character.moves.special.combo}
        animation={character.moves.special.animation}
        />
    )
  })

  const lightMoves = dataset.map((character, i) => {
    return (
      <ComboAccordion 
        key={i}
        summaryIcon="./assets/icon--light.svg" 
        summary="Light moves"
        moveType={character.moves.light}
        moveName={character.moves.light.name}
        combo={character.moves.light.combo}
        animation={character.moves.light.animation}
        />
    )
  })

  const mediumMoves = dataset.map((character, i) => {
    return (
      <ComboAccordion 
        key={i}
        summaryIcon="./assets/icon--medium.svg" 
        summary="Medium moves"
        moveType={character.moves.medium}
        moveName={character.moves.medium.name}
        combo={character.moves.medium.combo}
        animation={character.moves.medium.animation}
        />
    )
  })

  const heavyMoves = dataset.map((character, i) => {
    return (
      <ComboAccordion 
        key={i}
        summaryIcon="./assets/icon--heavy.svg" 
        summary="Heavy moves"
        moveType={character.moves.heavy}
        moveName={character.moves.heavy.name}
        combo={character.moves.heavy.combo}
        animation={character.moves.heavy.animation}
        />
    )
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ComboHero />
      <ComboIntro
        key={dataset.id}
        characterName={dataset[0].characterBio.name}
        origin={dataset[0].characterBio.origin}
        flag={dataset[0].characterBio.flag}
        bio={dataset[0].characterBio.bio}
        />
      <section className="accordion--wrapper">
        {lightMoves}
        {mediumMoves}
        {heavyMoves}
        {specialMoves}
      </section>
      <NavBar />
    </ThemeProvider>
  );
}