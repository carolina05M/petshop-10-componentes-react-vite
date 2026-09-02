function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-icon">🛍️</div>
      <span className="category">{product.category}</span>
      <h4>{product.name}</h4>
      <strong>R$ {product.price.toFixed(2).replace(".", ",")}</strong>
      <button>Adicionar</button>
    </div>
  );
}

export default ProductCard;