import { Link } from 'react-router-dom';

import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import Btn from './Btn';
import labelCard1 from '../assets/img/label-card-horizontal.svg';
import labelCard2 from '../assets/img/label-card-vertical.svg';


const Card = ({ card }) => {
    const { tituloEsp, imagen, tipo, duracion, dia, horario, slug
    } = card;

    return (
        <div className="bg-pink hover:bg-blue transition-colors rounded-l-2xl rounded-br-2xl flex flex-col">
            <div className="absolute top-14 right-0 w-50%">
                <img src={labelCard1} alt="Label Card" className="block w-full relative lg:hidden text-pink" />
                <img src={labelCard2} alt="Label Card" className="hidden w-full relative -top-4 left-4 lg:block" />
            </div>
            <div className="flex gap-4">
                <div className='flex flex-col gap-4 font-sans'>

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
                <div>
                    <div className="w-[150px] h-full overflow-hidden rounded-3xl">
                        <img src={imagen} alt={tituloEsp} className="w-full h-full object-cover scale-[2.0] transform origin-[70%_0]" />
                    </div>

                    <Link to={`/cartelera/${slug}`} className="absolute top-0 left-0">
                        <img src={btnMas} alt="Más información" />
                    </Link>
                </div>
            </div>
        </div>
    )

};

export default Card;