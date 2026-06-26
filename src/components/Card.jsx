import { Link } from 'react-router-dom';

import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import Btn from './Btn';
import LabelCardVertical from './LabelCardVertical.jsx';
import labelCard1 from '../assets/img/label-card-horizontal.svg';


const Card = ({ card }) => {
    const { tituloEsp, imagen, tipo, duracion, dia, horario, slug
    } = card;

    return (
        <div className="relative mx-auto bg-pink hover:bg-blue rounded-l-3xl rounded-br-3xl flex flex-col group transition-colors p-4">
            <div className="absolute bottom-full right-0 -mb-[1px] z-10">
                <img src={labelCard1} alt="Label Card" className="block w-full relative lg:hidden text-pink" />
                <LabelCardVertical className="hidden w-full relative lg:block text-pink group-hover:text-blue transition-colors" />

                {/* He tenido que crear un componente al svg para poder ponerle el hover como className y además hacer el group-hover para que se haga en modo grupo */}
            </div>
            <div className="flex gap-3">
                <div className="flex flex-col gap-4 font-sans">

                    <h1 className="text-2xl font-bold uppercase leading-6">{tituloEsp}</h1>


                    <ul className="flex flex-col gap-3 text-black hover:text-white font-pixel">
                        <li className="flex justify-between">
                            <p className="text-lg font-sans text-black hover:text-white">{tipo}</p>
                            <p className="text-xl text-black  hover:text-white font-pixel">{duracion} min</p>
                        </li>
                        <li className="w-full h-[2px] bg-black hover:bg-white"></li>
                        <li className="flex gap-2">
                            <div>
                                <Btn text={`${dia} sep`} variant='solidblue' size='xs' font='pixel' />
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <Btn text={horario[0]} variant='outlineblack' size='xs' font='pixel' />
                                </div>
                                <div>
                                    <Btn text={horario[1]} variant='outlineblack' size='xs' font='pixel' />
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div>
                    <div className="h-full overflow-hidden rounded-3xl">
                        <img src={imagen} alt={tituloEsp} className="w-full h-full object-cover scale-[2.0] transform origin-[75%_0]" />
                    </div>

                    <Link to={`/cartelera/${slug}`} className="absolute bottom-3 right-4">
                        <img src={btnMas} alt="Más información" />
                    </Link>
                </div>
            </div>
        </div>
    )

};

export default Card;