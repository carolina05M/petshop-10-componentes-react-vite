function Hero({ preview = false }) {
  return (
    <section id="inicio" className={preview ? "hero preview" : "hero"}>
      <div>
        <span className="badge">Cuidado que seu pet merece</span>
        <h1>Seu melhor amigo em boas mãos.</h1>
        <p>
          Serviços, produtos e carinho para deixar a vida do seu pet ainda melhor.
        </p>
        {!preview && <button>Conheça nossos serviços</button>}
      </div>
      <div className="hero-pet">🐶</div>
    </section>
  );
}

export default Hero;