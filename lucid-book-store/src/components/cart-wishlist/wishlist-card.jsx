import React from "react";
import { AddToCartWishlist, RemoveFromWishlist } from "./wishlist-operations";

const WishlistCard = ({ product }) => {
  const { title, price, image } = product;
  return (
    <div className="card elevated m-dw-5 shadow">
      <div className="card-head">
        <RemoveFromWishlist product={product} />
        <span className="card-badge">Top Seller</span>
        <div className="card-image">
          <img
            src={image}
            alt="card image"
            srcSet=""
            className="card-image-img product-img"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="textbox">
          <div className="title">{title}</div>
          <div className="subtitle">Stock</div>
        </div>
        <div className="textbox">
          <p className="text">
            50% off <span className="strike">${price}</span>
          </p>
          <p className="CTA-text">$300</p>
        </div>
        <div className="btn-vertical">
          <AddToCartWishlist product={product} />
        </div>
      </div>
    </div>
  );
};

export { WishlistCard };
