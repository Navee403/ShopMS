import React from "react";

const DeleteProduct = ({ products, fetchProducts }) => {
  const deleteProduct = async (_id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${_id}`, { method: "DELETE" });
      if (!response.ok) { console.error("Failed to delete product"); return; }
      fetchProducts();
    } catch (err) { console.error("Network error:", err); }
  };

  return (
    <div className="action-section delete-section">
      <h3>🗑️ Delete Products</h3>
      {products.length === 0 && <p className="muted">No products available.</p>}
      <div className="action-list">
        {products.map((product) => (
          <div className="action-item item-row" key={product._id}>
            <div><strong>{product.name}</strong><span>₹{product.price}</span></div>
            <button className="danger-btn" onClick={() => deleteProduct(product._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteProduct;
