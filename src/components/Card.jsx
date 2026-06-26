import { Link } from 'react-router-dom';

import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import Btn from './Btn';
import LabelCardVertical from './LabelCardVertical.jsx';
import labelCard1 from '../assets/img/label-card-horizontal.svg';


const Card = ({ card }) => {
    const { tituloEsp, imagen, tipo, duracion, dia, horario, slug
    } = card;

    return (
        <div className="bg-pink hover:bg-blue rounded-l-2xl rounded-br-2xl flex flex-col group transition-colors">
            <div className="absolute top-14 right-0 w-50%">
                <img src={labelCard1} alt="Label Card" className="block w-full relative lg:hidden text-pink" />
                <LabelCardVertical className="hidden w-full relative lg:block text-pink group-hover:text-blue transition-colors" />

                {/* He tenido que crear un componente al svg para poder ponerle el hover como className y además hacer el group-hover para que se haga en modo grupo */}
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