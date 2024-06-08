import './ComboAccordion.css'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ComboAccordion(props) {

  // console.log(props)
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
                <img src={props.summaryIcon} alt={props.summary} />
                <h3>{props.summary}</h3>
            </div>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
      {props.moveType?.map((move, i) => {
        // console.log(move)
        return (
          <div className="row space-between" key={i}>
            <div className="col gap-2 px-4">
              <div className="row gap-2">
                <div className="col" id="combo--title">
                  {move.name}
                </div>
                <span className="col" id="combo--favourite">
                  <img src="./assets/icon--star.svg" alt="Favourite" type="svg/image" />
                </span>
              </div>
              <div className="row" id="combo--inputs">
                {/* Combo input icons go here */}
                {move.combo?.map((input, i) => {
                  return (
                    <img src={input} alt="" key={i}/>
                  )
                })}
                <div className="col"></div>
              </div>
            </div>
            <div className="col gif-wrapper py-4">
              {/* GIF Animation goes here */}
              <img src={move.animation} alt={move.name} className="gif" />
            </div>
          </div>
        )
      })}
      </AccordionDetails>
    </Accordion>
  );
}