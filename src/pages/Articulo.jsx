import { useParams, /* Navigate, */ Link } from 'react-router-dom';

import { CATALOGO } from '../data/films.js';
/* import Error404 from './Error404.jsx'; */
import labelCard2 from '../assets/img/label-card-vertical.svg';
import Btn from '../components/Btn.jsx';
import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import tiraRollText from '../assets/img/tira-roll-text.svg';
import styles from './Articulo.module.css';

const Articulo = () => {
    /* 1. Capturamos el slug de la URL */
    const { slug } = useParams();
    /* 2. Buscamos el artículo en el catálogo */
    const catalogo = CATALOGO.find(item => item.slug === slug);
    /* 3. Si no encontramos el artículo, redirigimos a la página de error */
    /* if (!catalogo) {
        return <Navigate to="/Error404" replace />; */


    const { tituloEsp, imagen,/* dia,  tipo, duracion, horario, cartel, sala, tituloVo, directorx, bandaSonora, saga, genero, sinopsis, personajes, trailerVideo, cita, autorCita, imagenesGaleria */ } = catalogo;

    /* 4.Si la pelicula existe, mostramos su información */

    return (
        <div>
            <img src={labelCard2} alt="Label Card" className="w-full absolute -top-4 left-4" />
            <div className="flex flex-col gap-8 px-6 pt-14 pb-6 bg-blue rounded-4xl">
                <div>
                    <img src={imagen} alt={tituloEsp} className="w-full rounded-4xl" />
                    <Btn to="/Entradas" text="comprar" variant='solidgreen' size='xs' font='sans' className="abolute bottom-0 top-0 left-0 right-0 mx-auto my-auto" />
                    <Link to="/Entradas" className="absolute bottom-0 top-0 right-0 mx-auto my-auto w-full h-full">
                        <img src={btnMas} alt="Más información" />
                    </Link>
                </div>
                <h1 className="text-4xl font-bold">{tituloEsp}</h1>
                <div style={{ backgroundImage: `url(${tiraRollText})` }}
                    className={`w-full h-12 bg-repeat-x bg-cover ${styles.roll}`}>
                </div>
                <div>
                    <div className="flex bg-balck justify-between">
                        <h3 className="uppercase font-sans text-white text-base ">cartel</h3>
                        <div>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default Articulo;