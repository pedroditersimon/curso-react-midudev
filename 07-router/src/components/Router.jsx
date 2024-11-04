
import { Children, useEffect, useState } from 'react';
import { EVENTS } from '../utils/consts.js';
import NotFoundPage from '../Pages/NotFoundPage';

import { match } from 'path-to-regexp';

export function Router({ children, routes = [], DefaultComponent = NotFoundPage }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
        window.addEventListener(EVENTS.POPSTATE, onLocationChange);

        // cleanup
        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
        };
    }, []);

    let routeParams = {}

    const routesFromChildren = Children.map(children, ({ props, type }) => {
        const { name } = type;
        const isRoute = name === 'Route';

        return isRoute ? props : null;
    });

    const routesToUse = routes.concat(routesFromChildren);

    const Page = routesToUse.find(r => {
        if (r === undefined) return false;
        if (r.path === currentPath) return true;

        const matcherUrl = match(r.path, { decode: decodeURIComponent });
        const matched = matcherUrl(currentPath);
        if (!matched) return false;

        routeParams = matched.params;
        return true;
    })?.Component;
    return Page
        ? <Page routeParams={routeParams} />
        : <DefaultComponent routeParams={routeParams} />;
}