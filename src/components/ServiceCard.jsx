function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="icon">🐾</div>
      <h4>{service.name}</h4>
      <p>{service.description}</p>
      <strong>R$ {service.price.toFixed(2).replace(".", ",")}</strong>
      <button>Ver serviço</button>
    </div>
  );
}

export default ServiceCard;