// ProductCard.jsx
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, status }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p className="price">Price: ${price}</p>
      <p className={`status ${status === "In Stock" ? "in-stock" : "out-of-stock"}`}>
        Status: {status}
      </p>
    </div>
  );
};

export default ProductCard;
