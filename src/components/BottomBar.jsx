import { Link } from "react-router-dom";
/* import { useState } from "react"; */
import { useLocation } from "react-router-dom";
import ticketIcon from '../assets/img/icon/icon-ticket.svg';
import homeIcon from '../assets/img/icon/icon-home.svg';
import carteleraIcon from '../assets/img/icon/icon-cartelera.svg';
import agendaIcon from '../assets/img/icon/icon-agenda.svg';
import userIcon from '../assets/img/icon/icon-user.svg';


const BottomBar = () => {

    const { pathname } = useLocation();

    return (
        /* hacer que el pop up se pueda mover */
        <div className="flex flex-col items-center justify-center fixed bottom-0 left-0 w-full bg-dark dark:bg-blue text-white dark:text-black z-9999">
            <nav>
                <ul className="flex justify-around items-center w-full gap-3 py-3 font-pixel">
                    <li className="order-3 w-[63px]">
                        <Link to="/" className="flex flex-col items-center justify-center gap-1 ">
                            <img src={homeIcon} alt="Home" className="invert dark:invert-0 w-6 h-6" />
                            <span className={`text-xs border-b-2 ${pathname === '/' ? 'border-white dark:border-black' : 'border-transparent'}`}>HOME</span>
                        </Link>
                    </li>
                    <li className="order-1 w-[63px]">
                        <Link to="/Tickets" className="flex flex-col items-center justify-center gap-1">
                            <img src={ticketIcon} alt="Tickets" className="invert dark:invert-0 w-6 h-6" />
                            <span className={`text-xs border-b-2 ${pathname === '/Tickets' ? 'border-white dark:border-black' : 'border-transparent'}`}>TICKETS</span>
                        </Link>
                    </li>
                    <li className="order-2 w-[63px]">
                        <Link to="/Cartelera" className="flex flex-col items-center justify-center gap-1">
                            <img src={carteleraIcon} alt="Cartelera" className="invert dark:invert-0 w-6 h-6" />
                            <span className={`text-xs border-b-2 ${pathname === '/Cartelera' ? 'border-white dark:border-black' : 'border-transparent'}`}>CARTELERA</span>
                        </Link>
                    </li>
                    <li className="order-4 w-[63px]">
                        <Link to="/Agenda" className="flex flex-col items-center justify-center gap-1">
                            <img src={agendaIcon} alt="Agenda" className="invert dark:invert-0 w-6 h-6" />
                            <span className={`text-xs border-b-2 ${pathname === '/Agenda' ? 'border-white dark:border-black' : 'border-transparent'}`}>AGENDA</span>
                        </Link>
                    </li>
                    <li className="order-5 w-[63px]">
                        <Link to="/User" className="flex flex-col items-center justify-center gap-1">
                            <img src={userIcon} alt="User" className="invert dark:invert-0 w-6 h-6" />
                            <span className={`text-xs border-b-2 ${pathname === '/User' ? 'border-white dark:border-black' : 'border-transparent'}`}>USER</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default BottomBar;