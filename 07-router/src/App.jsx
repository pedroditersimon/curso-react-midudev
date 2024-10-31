import './App.css'
import { Router } from './components/Router.jsx';
import { Route } from './components/Route.jsx';

import { lazy, Suspense } from 'react';

const LazyHomePage = lazy(() => import('./Pages/HomePage.jsx'));
const LazyAboutPage = lazy(() => import('./Pages/AboutPage.jsx'));
const LazySearchPage = lazy(() => import('./Pages/SearchPage.jsx'));


function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Route path='/' Component={LazyHomePage} />
        <Route path='/:lang/about' Component={LazyAboutPage} />
        <Route path='/search/:query' Component={LazySearchPage} />
      </Router>
    </Suspense>
  )
}

export default App
