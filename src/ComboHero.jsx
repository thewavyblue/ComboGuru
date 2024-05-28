import "./ComboHero.css";

export default function ComboHero() {
  return (
    <section className="hero--container">
      <picture className="hero--img">
        <div className="hero--gradient"></div>
        <img src="/img/hero-image--ryu.png" alt="A portrait of Ryu" />
      </picture>
    </section>
  );
}
