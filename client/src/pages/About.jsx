import { useState, useEffect } from "react";
import ProductList from "../Productlist";
import AddProduct from "../AddProduct";
import DeleteProduct from "../DeleteProduct";
import EditProduct from "../EditProduct";
import API_URL from "../api";

function About() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      console.log("error");
      return;
    }
    const products = await response.json();
    setProducts(products);
  }

  return (
    <div className="manager-page">
      <section className="manager-header">
        <div>
          <span className="eyebrow">SHOPMS / PRODUCT MANAGER</span>
          <h1>Product Management</h1>
          <p>Add, view, edit and remove products from your shop database.</p>
        </div>
        <div className="product-count">
          <span>PRODUCTS</span>
          <strong>{products.length}</strong>
        </div>
      </section>

      <section className="manager-grid">
        <div className="manager-card product-overview">
          <div className="card-heading">
            <div><span className="mini-label">INVENTORY</span><h2>All Products</h2></div>
            <span className="count-badge">{products.length} items</span>
          </div>
          <ProductList products={products} fetchProducts={fetchProducts} />
        </div>

        <div className="manager-card">
          <span className="mini-label">CREATE</span>
          <h2>Add New Product</h2>
          <p className="card-description">Add a product to your shop database.</p>
          <AddProduct fetchProducts={fetchProducts} />
        </div>

        <div className="manager-card wide-card">
          <span className="mini-label">UPDATE & REMOVE</span>
          <h2>Manage Existing Products</h2>
          <p className="card-description">Edit product details or remove products from your inventory.</p>
          <div className="management-columns">
            <EditProduct products={products} fetchProducts={fetchProducts} />
            <DeleteProduct products={products} fetchProducts={fetchProducts} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
