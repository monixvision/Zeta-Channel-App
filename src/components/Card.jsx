import { Link } from 'react-router-dom';
/* import { useState } from 'react'; */

import btnMas from '../assets/img/icon/icon-btn-mas.svg';
import Btn from './Btn';
import LabelCard from './LabelCard.jsx';


const Card = ({ card }) => {
    const { tituloEsp, imagen, imagenCard, tipo, duracion, dia, horario, slug
    } = card;

    /* const [isHorario1Selected, setIsHorario1Selected] = useState(false);
    const [isHorario2Selected, setIsHorario2Selected] = useState(false);
 */

    return (
        <Link to={`/articulo/${slug}`} className="relative mx-auto bg-pink hover:bg-blue rounded-l-3xl rounded-br-3xl flex flex-col group transition-colors p-4 duration-300">
            <div className="absolute bottom-full right-0 -mb-[2px] z-10">

                <LabelCard className="w-full relative text-pink group-hover:text-blue transition-colors duration-300" />

                {/* He tenido que crear un componente al svg para poder ponerle el hover como className y además hacer el group-hover para que se haga en modo grupo */}
            </div>
            <div className="flex gap-3 md:flex-col md:gap-5">
                <div className="flex flex-col gap-4 font-sans">

                    <h1 className="text-[calc(1.5rem_+_0.5vw)] font-bold uppercase leading-[calc(1.5rem_+_0.5vw)] text-black">{tituloEsp}</h1>


                    <ul className="flex flex-col gap-3 text-black group-hover:text-white font-pixel">
                        <li className="flex justify-between">
                            <p className="text-[calc(1.25rem_+_0.25vw)] font-sans text-black group-hover:text-white">{tipo}</p>
                            <p className="text-[calc(1.25rem_+_0.25vw)] text-black  group-hover:text-white font-pixel">{duracion} min</p>
                        </li>
                        <li className="w-full h-[2px] bg-black group-hover:bg-white"></li>
                        <li className="flex justify-between">
                            <div>
                                <Btn text={`${dia} sep`} variant='solidblue' size='xs' font='pixel' />
                            </div>
                            <div className="flex gap-2 md:gap-4">
                                <div>
                                    <Btn text={horario[0]} variant='outlineblack' size='xs' font='pixel'
                                    /* {isHorario1Selected ? 'solidblack' : 'outlineblack'} size='xs' font='pixel' onClick={() => setIsHorario1Selected(!isHorario1Selected)} */
                                    />
                                </div>
                                <div>
                                    <Btn text={horario[1]} variant='outlineblack' size='xs' font='pixel'
                                    /* {isHorario2Selected ? 'solidblack' : 'outlineblack'} size='xs' font='pixel' onClick={() => setIsHorario2Selected(!isHorario2Selected)} */ />
                                </div>
                            </div>
                        </li>
                        <li className="hidden flex gap-2 md:justify-between">
                            <div>
                                <Btn text={`${dia} sep`} variant='solidblue' size='xs' font='pixel' />
                            </div>
                            <div className="flex gap-2 md:gap-4">
                                <div>
                                    <Btn text={horario[0]} variant='outlineblack' size='xs' font='pixel'
                                    /* {isHorario1Selected ? 'solidblack' : 'outlineblack'} size='xs' font='pixel' onClick={() => setIsHorario1Selected(!isHorario1Selected)} */
                                    />
                                </div>
                                <div>
                                    <Btn text={horario[1]} variant='outlineblack' size='xs' font='pixel'
                                    /* {isHorario2Selected ? 'solidblack' : 'outlineblack'} size='xs' font='pixel' onClick={() => setIsHorario2Selected(!isHorario2Selected)} */ />
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="flex-1/2">
                    <div className="h-full overflow-hidden rounded-3xl">
                        <img src={imagenCard} alt={tituloEsp} className="will-change-transform w-full h-full object-cover md:hidden" />
                        <div className="hidden md:block will-change-transform">
                            <img src={imagen} alt={tituloEsp} className="  w-full h-full object-cover object-top" />
                        </div>

                        {/* Cuando veias la tarjeta sin el will-change-transform la imagen se veia como sin renderizar o pixelada pero cuando acercaba con el zoom en el buscador como que lo arreglaba, le he preguntado a la ia para ver qué era y es que por defecto el buscador como que la renderiza desde el CPU. Y ahora saca la imagen del flujo normal de renderizado de la CPU y le asigna su propia capa de memoria dedicada en la tarjeta gráfica (GPU). Al ser la GPU la que ahora se encarga de pintar esa tarjeta, aplica algoritmos de suavizado mucho más potentes (como los que usa Photoshop o Figma), eliminando el pixelado o el aspecto borroso (ya no sé si eso afectará a la optimización) */}

                    </div>

                    <Link to={`/Articulo/${slug}`} className="absolute bottom-3 right-4">
                        <img src={btnMas} alt="Más información" />
                    </Link>
                </div>
            </div>
        </Link>
    )

};

export default Card;

/* TO DO: IMAGEN REDIMENSIONADA VERSION CARD DE CERCA */