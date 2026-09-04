import { useState } from "react";

const AddProduct = ({ fetchProducts }) => {
  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" });

  async function hb(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) { console.error("Server error while adding product"); return; }
      setNewProduct({ name: "", description: "", price: "" });
      fetchProducts();
    } catch (err) { console.error("Fetch error:", err); }
  }

  return (
    <form className="product-form" onSubmit={hb}>
      <label>Product Name<input type="text" placeholder="e.g. Wireless Headset" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required /></label>
      <label>Description<input type="text" placeholder="Short product description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} required /></label>
      <label>Price<input type="number" placeholder="Enter price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required /></label>
      <button className="primary-btn form-btn" type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
