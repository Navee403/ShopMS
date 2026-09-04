import React, { useState } from "react";

const EditProduct = ({ products, fetchProducts }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({ name: "", price: "", description: "" });

  const startEditing = (product) => {
    setEditingId(product._id);
    setEditedProduct({ name: product.name, price: product.price, description: product.description });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedProduct({ name: "", price: "", description: "" });
  };

  const saveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editedProduct, price: parseFloat(editedProduct.price) }),
      });
      if (!response.ok) { console.error("Failed to update product"); return; }
      setEditingId(null);
      setEditedProduct({ name: "", price: "", description: "" });
      fetchProducts();
    } catch (err) { console.error("Network error:", err); }
  };

  return (
    <div className="action-section">
      <h3>✏️ Edit Products</h3>
      {products.length === 0 && <p className="muted">No products available.</p>}
      <div className="action-list">
        {products.map((product) => (
          <div className="action-item" key={product._id}>
            {editingId === product._id ? (
              <div className="edit-form">
                <input type="text" value={editedProduct.name} onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })} placeholder="Name" />
                <input type="text" value={editedProduct.description} onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })} placeholder="Description" />
                <input type="number" value={editedProduct.price} onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })} placeholder="Price" />
                <div className="inline-actions"><button className="primary-btn" onClick={saveChanges}>Save</button><button className="ghost-btn" onClick={cancelEditing}>Cancel</button></div>
              </div>
            ) : (
              <div className="item-row"><div><strong>{product.name}</strong><span>{product.description}</span></div><button className="ghost-btn" onClick={() => startEditing(product)}>Edit</button></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProduct;
