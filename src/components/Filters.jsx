import React from "react";
import { useId } from "react";
import { useFilters } from "../hooks/useFilters.js";
import {Container } from "react-bootstrap";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <Container>
      <div className="titulo-filtro">
        <h1 className="text-center">Productos E-commerce</h1>
      </div>
      <section className="filters-container bg-dark text-white">
        <div>
          <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
          <input
            type="range"
            id={minPriceFilterId}
            min="1000"
            max="7000"
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>

        <div>
          <label htmlFor={categoryFilterId}>Categoría: </label>
          <select
            id={categoryFilterId}
            onChange={handleChangeCategory}
            value={filters.category}
            className="category-select bg-white text-dark"
          >
            <option value="all">Todas</option>
            <option value="women">Mujeres</option>
            <option value="men">Hombres</option>
            <option value="kids">Niños</option>
            <option value="accessories">Accesorios</option>
          </select>
        </div>
      </section>
    </Container>
  );
}
