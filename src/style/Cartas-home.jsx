import React from "react";
import { useNavigate } from 'react-router-dom';

const Card = ({ imgSrc, title, paragraph, buttonLabel }) => {
  const navigate = useNavigate();

  const handleProductos = () => {
    navigate('/Producto');
  };

 return (
    <div className="card">
      <img
        alt=""
        src={imgSrc}
      />
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <button className="btn btn-primary" onClick={handleProductos}>{buttonLabel}</button>
    </div>
 );
};

export default Card;