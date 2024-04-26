import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../mocks/products.json";
import { NavBar } from "./Header.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));

  const renderStars = () => {
    const stars = [];
    // Usar product.popularity en lugar de productsData.popularity
    for (let i = 0; i < product.popularity; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
    return stars;
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        {product ? (
          <div className="card border-0 shadow">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={product.image}
                  className="product-image"
                  alt={product.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="card-text">{product.description}</p>
                    <p className="m-0">Price: ${product.price}</p>
                    <p className="m-0">Size: {product.size}</p>
                  <p className="m-0">Category: {product.category}</p>
                  <div className="popularity">
                    <span>
                      {renderStars()} {product.popularity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            <h2 className="text-center">Product Not Found</h2>
            <p className="text-center">The requested product does not exist.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
