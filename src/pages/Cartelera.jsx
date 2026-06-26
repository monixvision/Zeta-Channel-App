import Card from "../components/Card.jsx";
import { CATALOGO } from "../data/films.js";

const Cartelera = () => (

    <div className="pt-[60px]">
        <h1>CARTELERA</h1>
        <div className="grid grid-cols-1 gap-4 p-3 md:grid-cols-2 lg:grid-cols-3">
            {CATALOGO.map(peli => (
                <Card key={peli.id} card={peli} />
            ))}
        </div>
    </div>

);

export default Cartelera;