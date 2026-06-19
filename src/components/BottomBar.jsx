import { Link } from "react-router-dom";
/* import { useState } from "react"; */

import ticketIcon from '../assets/img/icon/icon-ticket.svg';
import homeIcon from '../assets/img/icon/icon-home.svg';
import carteleraIcon from '../assets/img/icon/icon-cartelera.svg';
import festivalIcon from '../assets/img/icon/icon-festival.svg';
import agendaIcon from '../assets/img/icon/icon-agenda.svg';
import userIcon from '../assets/img/icon/icon-user.svg';

const BottomBar = () => (
    /* hacer que el pop up se pueda mover */
    <div className="flex flex-col items-center justify-center fixed bottom-0 left-0 w-full bg-pink text-black z-9999">
        <nav>
            <ul>
                <li><Link to="/"><img src={homeIcon} alt="Home" />HOME</Link></li>
                <li><Link to="/tickets"><img src={ticketIcon} alt="Tickets" />TICKETS</Link></li>
                <li><Link to="/cartelera"><img src={carteleraIcon} alt="Cartelera" />CARTELERA</Link></li>
                <li><Link to="/festival"><img src={festivalIcon} alt="Festival" />FESTIVAL</Link></li>
                <li><Link to="/agenda"><img src={agendaIcon} alt="Agenda" />AGENDA</Link></li>
                <li><Link to="/user"><img src={userIcon} alt="User" />USER</Link></li>
            </ul>
        </nav>
    </div>
)

export default BottomBar;