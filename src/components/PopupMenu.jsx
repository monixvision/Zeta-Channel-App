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

const PopupMenu = () => (
    <nav className="rounded-xl bg-pink mt-[60px]">
        <ul className="flex gap-6 justify-end rounded-t-xl bg-dark py-3 px-4">
            <li><img src={minimizar} alt="Minimizar" className="w-4 h-4" /></li>
            <li><img src={reSize} alt="ReSize" className="w-4 h-4" /></li>
            <li><img src={salir} alt="Saliz" className="w-4 h-4" /></li>
        </ul>
        <ul className="flex flex-col gap-6 p-6 text-2xl font-pixel">
            <li><Link to="/"><img src={homeIcon} alt="Home" className="invert dark:invert-0 w-6 h-6" />Home</Link></li>
            <li><Link to="/Tickets">Tickets</Link></li>
            <li><Link to="/Cartelera">Cartelera</Link></li>
            <li><Link to="/Festival">Festival</Link></li>
            <li><Link to="/Agenda">Agenda</Link></li>
            <li><Link to="/User">User</Link></li>
        </ul>
    </nav>
)

export default PopupMenu;

