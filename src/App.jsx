// import logo from './logo.svg';
import './App.css';
import ComboHero from './ComboHero';
import ComboIntro from './ComboIntro';
import ComboAccordion from './ComboAccordion';
import NavBar from './NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ComboHero />
      <ComboIntro />
      <section className="accordion--wrapper">
        <ComboAccordion summaryIcon="./src/assets/icon--light.svg" summary="Light moves"/>
        <ComboAccordion summaryIcon="./src/assets/icon--medium.svg" summary="Medium moves"/>
        <ComboAccordion summaryIcon="./src/assets/icon--heavy.svg" summary="Heavy moves"/>
        <ComboAccordion summaryIcon="./src/assets/icon--special.svg" summary="Special moves"/>
      </section>
      <NavBar />
    </ThemeProvider>
  );
}