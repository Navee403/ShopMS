import "./App.css";

function Productlist({ products }) {
  return (
    <div className="product-table-wrap">
      {products.length === 0 ? (
        <div className="empty-state">
          <div>📦</div>
          <h3>No products yet</h3>
          <p>Add your first product using the form.</p>
        </div>
      ) : (
        <table className="product-table">
          <thead><tr><th>Product</th><th>Description</th><th>Price</th></tr></thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td><strong>{p.name}</strong></td>
                <td>{p.description}</td>
                <td><span className="price">₹{p.price}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Productlist;
