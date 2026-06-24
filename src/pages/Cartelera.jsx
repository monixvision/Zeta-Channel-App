import Card from "../components/Card.jsx";
import { CATALOGO } from "../data/films.js";

const Cartelera = () => (

    <div className="pt-[60px]">
        <h1>CARTELERA</h1>
        {CATALOGO.map(peli => (
            <Card key={peli.id} card={peli} />
        ))}
    </div>

);

export default Cartelera;