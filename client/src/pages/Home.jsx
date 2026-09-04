import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">MODERN PRODUCT MANAGEMENT</div>
          <h1>Manage your products.<br /><span>Simply & efficiently.</span></h1>
          <p>
            ShopMS is a clean and easy-to-use shop management application
            designed to help you keep your products organized in one place.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="primary-btn">Open Shop Manager →</Link>
            <a href="#features" className="secondary-btn">Explore Features</a>
          </div>

          <div className="hero-points">
            <span>✓ Add products</span>
            <span>✓ Edit details</span>
            <span>✓ Delete products</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="shop-card">
            <div className="shop-card-top">
              <div>
                <small>SHOPMS DASHBOARD</small>
                <h3>Product Overview</h3>
              </div>
              <span className="status-dot"></span>
            </div>
            <div className="mock-product">
              <div className="product-avatar">📦</div>
              <div><strong>Premium Product</strong><small>In your inventory</small></div>
              <b>₹1,499</b>
            </div>
            <div className="mock-product">
              <div className="product-avatar">🎧</div>
              <div><strong>Wireless Headset</strong><small>In your inventory</small></div>
              <b>₹2,299</b>
            </div>
            <div className="mock-product">
              <div className="product-avatar">⌚</div>
              <div><strong>Smart Watch</strong><small>In your inventory</small></div>
              <b>₹3,499</b>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-heading">
          <span>WHY SHOPMS?</span>
          <h2>Everything you need to manage products</h2>
          <p>A simple interface backed by a full-stack MERN application.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card"><div className="feature-icon">➕</div><h3>Add Products</h3><p>Create new product entries with name, description and price.</p></div>
          <div className="feature-card"><div className="feature-icon">✏️</div><h3>Edit Products</h3><p>Update product information whenever your inventory changes.</p></div>
          <div className="feature-card"><div className="feature-icon">🗑️</div><h3>Delete Products</h3><p>Remove products you no longer need from the database.</p></div>
          <div className="feature-card"><div className="feature-icon">🗄️</div><h3>MongoDB Powered</h3><p>Product data is stored and managed through MongoDB.</p></div>
        </div>
      </section>

      <section className="tech-banner">
        <div><span>BUILT WITH</span><h2>MERN Stack</h2></div>
        <div className="tech-pills"><b>MongoDB</b><b>Express</b><b>React</b><b>Node.js</b></div>
      </section>
    </div>
  );
}

export default Home;
