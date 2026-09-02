import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function alternarTema() {
    setDark(!dark);
    document.body.classList.toggle("dark-mode");
  }

  return (
    <div className="theme-box">
      <p>Tema atual: <strong>{dark ? "Escuro" : "Claro"}</strong></p>
      <button onClick={alternarTema}>
        {dark ? "☀️ Tema claro" : "🌙 Tema escuro"}
      </button>
    </div>
  );
}

export default ThemeToggle;