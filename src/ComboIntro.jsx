import './ComboIntro.css'

export default function ComboIntro() {
    return (
        <section className="intro--container">
            <div className="hero--title col gap-2">
                <div className="row">
                    <div className="col">
                        <h1>Ryu</h1>
                    </div>
                </div>
                <div className="row gap-2 align-items-center">
                    <div className="col align-content-center">
                        <img
                            className="icon--flag" src="./img/flag-japan.webp" alt="Nationality flag"
                        />
                    </div>
                    <div className="col align-content-center">
                        <p>Tokyo, Japan</p>
                    </div>
                </div>
            </div>
            <p className="intro--text">
            Lorem ipsum dolor sit amet consectetur. Nibh sagittis arcu habitant
            duis gravida molestie est consectetur eget. Arcu egestas eget
            blandit eu adipiscing eget eget sit. Eget pellentesque scelerisque
            amet aenean adipiscing leo. Aliquam at lorem lorem quis molestie.
            Proin duis.
            </p>
        </section>
    )
}