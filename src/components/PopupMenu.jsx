import { Link } from "react-router-dom";

const PopupMenu = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Tickets">Tickets</Link></li>
            <li><Link to="/Cartelera">Cartelera</Link></li>
            <li><Link to="/Festival">Festival</Link></li>
            <li><Link to="/Agenda">Agenda</Link></li>
            <li><Link to="/User">User</Link></li>
        </ul>
    </nav>
)

export default PopupMenu;

