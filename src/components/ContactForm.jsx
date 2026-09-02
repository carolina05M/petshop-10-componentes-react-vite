import { useState } from "react";

function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setEnviado(true);
    event.currentTarget.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nome
        <input name="nome" placeholder="Seu nome" required />
      </label>

      <label>
        E-mail
        <input name="email" type="email" placeholder="seu@email.com" required />
      </label>

      <label>
        Mensagem
        <textarea name="mensagem" placeholder="Como podemos ajudar?" required />
      </label>

      <button type="submit">Enviar mensagem</button>

      {enviado && <p className="success">Mensagem enviada com sucesso!</p>}
    </form>
  );
}

export default ContactForm;