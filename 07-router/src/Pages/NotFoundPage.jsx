import { Link } from "../components/Link";

export default function NotFoundPage({ routeParams }) {
    return (
        <>
            <h1>404</h1>
            <img src='https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif' />
            <p>Page not found.</p>
            <Link to='/'>Go Home</Link>
        </>
    )
}