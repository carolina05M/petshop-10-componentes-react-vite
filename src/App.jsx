import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import PetForm from "./components/PetForm";
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";

const services = [
  { id: 1, name: "Banho", description: "Banho completo com produtos adequados para seu pet.", price: 45 },
  { id: 2, name: "Tosa", description: "Tosa higiênica e estética realizada com cuidado.", price: 60 },
  { id: 3, name: "Higienização", description: "Limpeza de ouvidos, unhas e cuidados básicos.", price: 30 }
];

const products = [
  { id: 1, name: "Ração Premium", category: "Alimentação", price: 89.90 },
  { id: 2, name: "Brinquedo Mordedor", category: "Brinquedos", price: 24.90 },
  { id: 3, name: "Shampoo Pet", category: "Higiene", price: 32.50 }
];

function App() {
  const [pets, setPets] = useState([]);

  function adicionarPet(pet) {
    setPets((lista) => [...lista, pet]);
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />

        <section className="section">
          <h2>10 componentes funcionais em React</h2>
          <p className="intro">
            Projeto demonstrativo para a atividade do 2º ADS, usando Vite + React e JSX.
          </p>

          <div className="component-grid">
            <article className="component-box wide">
              <h3>1. Header</h3>
              <Header preview />
            </article>

            <article className="component-box wide">
              <h3>2. Hero</h3>
              <Hero preview />
            </article>

            <article className="component-box">
              <h3>3. ServiceCard</h3>
              <div className="card-grid">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </article>

            <article className="component-box">
              <h3>4. ProductCard</h3>
              <div className="card-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </article>

            <article className="component-box">
              <h3>5. UserCard</h3>
              <UserCard
                name="Ana Beatriz"
                email="ana@email.com"
                role="Cliente"
              />
            </article>

            <article className="component-box">
              <h3>6. PetForm</h3>
              <PetForm onAddPet={adicionarPet} />
              {pets.length > 0 && (
                <div className="mini-list">
                  <strong>Pets cadastrados:</strong>
                  {pets.map((pet, index) => (
                    <span key={index}>{pet.nome} — {pet.especie}</span>
                  ))}
                </div>
              )}
            </article>

            <article className="component-box">
              <h3>7. ContactForm</h3>
              <ContactForm />
            </article>

            <article className="component-box">
              <h3>8. Counter</h3>
              <Counter />
            </article>

            <article className="component-box">
              <h3>9. ThemeToggle</h3>
              <ThemeToggle />
            </article>

            <article className="component-box">
              <h3>10. TodoList</h3>
              <TodoList />
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>Projeto acadêmico — Grupo 6 • Plataforma de Gestão de Pet Shop</p>
      </footer>
    </div>
  );
}

export default App;