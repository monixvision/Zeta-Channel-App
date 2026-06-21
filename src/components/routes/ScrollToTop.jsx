import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
    /* esto es solo para que lo guarde en la constante pero no tiene ninngun return pq no devuelve nada es solo para que siemrpe vuelve al inicio */
}

export default ScrollToTop;