function Header({ preview = false }) {
  return (
    <header className={preview ? "header preview" : "header"}>
      <div className="logo">🐾 PetAmigo</div>
      <nav>
        <a href="#inicio">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Header;