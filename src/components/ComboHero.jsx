import "./ComboHero.css";

export default function ComboHero(props) {
  return (
    <section className="hero--container">
      <picture className="hero--img">
        <div className="hero--gradient"></div>
        <img src={props.image} alt={props.characterName} />
      </picture>
    </section>
  );
}
