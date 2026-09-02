import { useState } from "react";

function PetForm({ onAddPet }) {
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("Cachorro");

  function handleSubmit(event) {
    event.preventDefault();

    if (!nome.trim()) return;

    onAddPet({ nome, especie });
    setNome("");
    setEspecie("Cachorro");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nome do pet
        <input
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Ex.: Thor"
          required
        />
      </label>

      <label>
        Espécie
        <select
          value={especie}
          onChange={(event) => setEspecie(event.target.value)}
        >
          <option>Cachorro</option>
          <option>Gato</option>
          <option>Coelho</option>
          <option>Ave</option>
          <option>Outro</option>
        </select>
      </label>

      <button type="submit">Cadastrar pet</button>
    </form>
  );
}

export default PetForm;