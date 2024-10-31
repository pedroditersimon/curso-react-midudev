import { BUTTONS, EVENTS } from "../utils/consts";


function navigate(href) {
    window.history.pushState({}, '', href);
    const navigationEvent = new Event(EVENTS.PUSHSTATE);
    window.dispatchEvent(navigationEvent);
}

export function Link({ to, target, ...props }) {

    function handleClick(event) {
        const isMainEvent = event.button === BUTTONS.MOUSE_PRIMARY // primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault();
            navigate(to);
            window.scrollTo(0, 0);
        }


    }

    return (
        <a onClick={handleClick} href={to} target={target} {...props} />
    );
}