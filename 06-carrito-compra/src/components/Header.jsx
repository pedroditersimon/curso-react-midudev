import {Filters} from './Filters.jsx';

export function Header() {
    return (
        <header style={{marginBottom: '15px'}}>
            <h1>Shopping cart</h1>
            <Filters />
        </header>
    );
}