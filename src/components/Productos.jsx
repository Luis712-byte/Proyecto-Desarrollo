import React from "react";
import { Link } from "react-router-dom";

export function Products({ products }) {
  return (
    <main className="products">
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.slice(0, 14).map((product) => (
          <li key={product.id} className=" product-card p-4 bg-white rounded-lg shadow-md">
            <Link
              to={`/detail/${product.id}`}
              className="no-underline text-black"
            >
              <img
                src={product.image}
                alt={product.title}
              />
              <div className="mt-2">
                <strong className="text-xl">{product.title}</strong>
                <br />
                Precio: ${product.price}
                <br />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
