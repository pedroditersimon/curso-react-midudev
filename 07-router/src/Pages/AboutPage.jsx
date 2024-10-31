import { Link } from '../components/Link.jsx';

const i18n = {
    es: {
        title: 'Sobre nosotros',
        button: 'Ir a home',
        description: '¡Hola! Me llamo Pedro y estoy creando un clon de React Router.'
    },
    en: {
        title: 'About us',
        button: 'Go to home page',
        description: 'Hi! My name is Pedro and I am creating a clone of React Router.'
    }
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
    const i18n = useI18n(routeParams?.lang ?? 'es')

    return (
        <>
            <h1>{i18n.title}</h1>
            <div>
                <img src='https://avatars.githubusercontent.com/u/114523969?v=4' alt='Foto de Pedro' />
                <p>{i18n.description}</p>
            </div>
            <Link to='/'>{i18n.button}</Link>
        </>
    )
}