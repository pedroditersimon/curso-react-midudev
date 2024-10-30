import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/updated_products.json';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { useFilters } from './hooks/useFilters.js';
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filters, setFilters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
