import { useContext, useState } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext);

    function filterProducts(products) {
        return products.filter(product =>
            product.price >= filters.minPrice &&
            (
                filters.category === 'all' ||
                product.category === filters.category
            )
        );
    }
    return { filters, setFilters, filterProducts };
}