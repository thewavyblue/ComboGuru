import Button from '@mui/material/Button';
import './ComboIntro.css'

export default function ComboIntro(props) {
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
                        <img
                            className="icon--flag" src={props.flag} alt={props.origin}
                        />
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
                            function extendIntroText() {
                                document.getElementById("intro--text").classList.add("extend");
                                
                                document.getElementById("read-more--wrapper").classList.add("read-state")
                                
                                document.getElementById("btn-read-more").innerText = "Read less";
                            }
                                return (
                                    extendIntroText()
                                )
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