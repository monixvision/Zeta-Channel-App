import { /* Link */ } from 'react-router-dom';

import btnMas from '../assets/img/icon/icon-btn-mas.svg';
/* import Btn from './Btn'; */

const Card = ({ card }) => {
    const { tituloEsp, imagen, tipo, duracion, /* dia, horario, slug */ } = card;

    return (
        <div>
            <ul>
                <li>
                    <h1>{tituloEsp}</h1>
                </li>
                <li>
                    <p>{tipo}</p>
                    <p>{duracion}</p>
                </li>
                <li>
                    {/* crear componente de btn general */}
                </li>
            </ul>
            <div>
                <img src={imagen} alt="Portada" />
                <img src={btnMas} alt="Más información" />
            </div>
        </div>
    )

}

export default Card;