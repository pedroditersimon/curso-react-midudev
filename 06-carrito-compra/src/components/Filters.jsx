import { useContext, useState } from 'react';
import './Filters.css';
import { useId } from 'react';
import { useFilters } from '../hooks/useFilters.js';

export function Filters() {
    const { filters, setFilters } = useFilters();
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    function handleChangeMinPrice(event) {
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            newFilters.minPrice = event.target.value;
            return newFilters;
        });
    }

    function handleChangeCategory(event) {
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            newFilters.category = event.target.value;
            return newFilters;
        });
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio minimo</label>
                <input
                    type="number"
                    id={minPriceFilterId}
                    min={0}
                    max={1000}
                    value={filters.minPrice}
                    onChange={handleChangeMinPrice}
                />
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select
                    id={categoryFilterId}
                    value={filters.category}
                    onChange={handleChangeCategory}
                >
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    );
}