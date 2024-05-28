import './ComboAccordion.css'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ComboAccordion({summaryIcon, summary, name, combo, animation}) {
  return (
    <Accordion sx={
      { 
        bgcolor: '#232323',
        color: '#ffffff' 
      }
    }>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon sx={{color: "#ffffff"}} />}
        id="panel-header" 
        aria-controls="panel-content"
      >
        <div className="row space-between">
          <div className="col">
            <div className="row gap-2 align-items-center">
                <img src={summaryIcon} alt="Medium" />
                <h3>{summary}</h3>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="row space-between">
          <div className="col gap-2 px-4">
            <div className="row gap-2">
              <div className="col" id="combo--title">
                Shoryuken
              </div>
              <span className="col" id="combo--favourite">
                <img src="./src/assets/icon--star.svg" alt="Favourite" type="svg/image" />
              </span>
            </div>
            <div className="row" id="combo--inputs">
              {/* Combo input icons go here */}
              <img src="./src/assets/icon--down.svg" alt="Down" />
              <img src="./src/assets/icon--down-right.svg" alt="Down-right" />
              <img src="./src/assets/icon--right.svg" alt="Right" />
              <img src="./src/assets/icon--medium.svg" alt="Medium" />
              <div className="col"></div>
            </div>
          </div>
          <div className="col gif-wrapper py-4">
            {/* GIF Animation goes here */}
            <img src="./public/img/gif--combo-example--hadouken.webp" alt="" className="gif" />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}