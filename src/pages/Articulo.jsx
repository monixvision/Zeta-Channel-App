import { useParams, Navigate } from 'react-router-dom';

import CATALOGO from '../assets/data/films.js';
/* import Error404 from './Error404.jsx'; */

const Articulo = () => {
    /* 1. Capturamos el slug de la URL */
    const { slug } = useParams();
    /* 2. Buscamos el artículo en el catálogo */
    const catalogo = CATALOGO.find(item => item.slug === slug);
    /* 3. Si no encontramos el artículo, redirigimos a la página de error */
    /* if (!catalogo) {
        return <Navigate to="/Error404" replace />; */


    const { tituloEsp, dia, imagen, tipo, duracion, horario, cartel, sala, tituloVo, directorx, bandaSonora, saga, genero, sinopsis, personajes, trailerVideo, cita, autorCita, imagenesGaleria } = catalogo;

    /* 4.Si la pelicula existe, mostramos su información */

    return (
        <div className="flex flex-col gap-6 p-6">
            <h1 className="text-4xl font-bold">{tituloEsp}</h1>

        </div>
    );
}
export default Articulo;