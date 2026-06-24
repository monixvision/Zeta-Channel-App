import { Link } from 'react-router-dom';

import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import Btn from './Btn';
import labelCard1 from '../assets/img/label-card-horizontal.svg';
import labelCard2 from '../assets/img/label-card-vertical.svg';


const Card = ({ card, orientacion }) => {
    const { tituloEsp, imagen, tipo, duracion, dia, horario, slug
    } = card;

    const orientacionStyle = {
        horizontal: 'px-4 pt-[42px]',
        vertical: 'flex-cols px-3 pt-[48px]'
    }
    const orientacionLabel = "w-full absolute -top-4 left-4"

    return (
        <div>
            {orientacion === 'horizontal' ? <img src={labelCard1} alt="Etiqueta de card horizontal" className={orientacionLabel} /> : <img src={labelCard2} alt="Etiqueta de card vertical" className={orientacionLabel} />}

            <div className={`flex ${orientacionStyle[orientacion]} bg-pink hover:bg-blue transition-colors rounded-4xl`}>
                <div className='flex flex-shrink-0 flex-grow-0 flex-col gap-4 font-sans'>

                    <h1 className='text-2xl font-bold'>{tituloEsp}</h1>


                    <ul>
                        <li className='flex justify-between'>
                            <p>{tipo}</p>
                            <p>{duracion} min</p>
                        </li>
                        <li className="w-full h-2 bg-white"></li>
                        <li>
                            <Btn text={dia} variant='solidgreen' size='xs' font='sans' />
                            <div>
                                <Btn text={horario[0]} variant='outlinewhite' size='xs' font='sans' />
                            </div>
                        </li>
                    </ul>

                </div>
                <div className='flex-shrink-0 ml-4'>
                    <img src={imagen} alt={tituloEsp} />
                    <Link to={`/cartelera/${slug}`}>
                        <img src={btnMas} alt="Más información" />
                    </Link>
                </div>
            </div>
        </div>
    )

};

export default Card;