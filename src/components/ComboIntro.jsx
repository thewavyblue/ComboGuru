import Button from '@mui/material/Button';
import './ComboIntro.css'

export default function ComboIntro(props) {
    let isExpanded = false;
    return (
        <section className="intro--container">
            <div className="hero--title col gap-2">
                <div className="row">
                    <div className="col">
                        <h1>{props.characterName}</h1>
                    </div>
                </div>
                <div className="row gap-2 align-items-center">
                    <div className="col align-content-center">
                        <img className="icon--flag" src={props.flag} alt={props.origin} />
                    </div>
                    <div className="col align-content-center">
                        <p>{props.origin}</p>
                    </div>
                </div>
            </div>
            <div className="intro--text" id="intro--text">
                <p>{props.bio}</p>
                <div className="read-more--wrapper" id="read-more--wrapper">
                    <Button 
                        id="btn-read-more"
                        variant="contained"
                        size="small"
                        onClick={() => {
                            
                            function expandBioText() {
                                isExpanded = !isExpanded;
                                document.getElementById("intro--text").classList.add("expand");
                                document.getElementById("read-more--wrapper").classList.add("read-state");
                                document.getElementById("btn-read-more").innerText = "Read less";
                                console.log(isExpanded);
                            }

                            function contractBioText() {
                                isExpanded = !isExpanded;
                                document.getElementById("intro--text").classList.remove("expand");
                                document.getElementById("read-more--wrapper").classList.remove("read-state");
                                document.getElementById("btn-read-more").innerText = "Read more";
                                console.log(isExpanded);
                            }

                            return (isExpanded ? contractBioText() : expandBioText())
                            }
                        }
                    >
                        Read more
                    </Button>
                </div>
            </div>
        </section>
    )
}