import { Link } from "react-router-dom";

import reSize from "../assets/img/icon/icon-resize.svg";
import minimizar from "../assets/img/icon/icon-minimizar.svg";
import salir from "../assets/img/icon/icon-salir.svg";
import ticketIcon from '../assets/img/icon/icon-ticket.svg';
import homeIcon from '../assets/img/icon/icon-home.svg';
import carteleraIcon from '../assets/img/icon/icon-cartelera.svg';
import agendaIcon from '../assets/img/icon/icon-agenda.svg';
import userIcon from '../assets/img/icon/icon-user.svg';
import festivalIcon from '../assets/img/icon/icon-festival.svg';

/* intentar que puedas arrastrarlo por la pantalla */

const PopupMenu = ({ popupIsOpen, setpopupIsOpen }) => (

    <nav className={`flex flex-col rounded-xl bg-pink absolute left-0 right-0 top-0 bottom-0 my-auto h-fit mx-auto w-fit ${popupIsOpen ? '' : 'hidden'} `} >
        {/* el w-fit es lo que me ha dejado ponerlo en el centro pq se extendía */}
        < ul className="flex gap-6 justify-end rounded-t-xl bg-dark py-3 px-4" >
            <li><img src={minimizar} alt="Minimizar" className="w-4 h-4" /></li>
            <li><img src={reSize} alt="ReSize" className="w-4 h-4" /></li>
            <li>
                <button onClick={() => setpopupIsOpen(false)} className="cursor-pointer">
                    <img src={salir} alt="Salir" className="w-4 h-4" />
                </button>
            </li>
        </ul >
        <ul className="flex flex-col gap-6 p-6 text-2xl font-pixel px-15">
            <li>
                <Link to="/" className="flex gap-6">
                    <img src={homeIcon} alt="Home" className="w-6 h-6" />
                    <span className="uppercase">Home</span>
                </Link>
            </li>
            <li>
                <Link to="/Tickets" className="flex gap-6">
                    <img src={ticketIcon} alt="Tickets" className="w-6 h-6" />
                    <span className="uppercase">Tickets</span>
                </Link></li>
            <li>
                <Link to="/Cartelera" className="flex gap-6">
                    <img src={carteleraIcon} alt="Cartelera" className="w-6 h-6" />
                    <span className="uppercase">Cartelera</span>
                </Link>
            </li>
            <li>
                <Link to="/Festival" className="flex gap-6">
                    <img src={festivalIcon} alt="Festival" className="w-6 h-6" />
                    <span className="uppercase">Festival</span>
                </Link>
            </li>
            <li>
                <Link to="/Agenda" className="flex gap-6">
                    <img src={agendaIcon} alt="Agenda" className="w-6 h-6" />
                    <span className="uppercase">Agenda</span>
                </Link>
            </li>
            <li>
                <Link to="/User" className="flex gap-6">
                    <img src={userIcon} alt="User" className="w-6 h-6" />
                    <span className="uppercase">User</span>
                </Link>
            </li>
        </ul>
    </nav >
)

export default PopupMenu;

