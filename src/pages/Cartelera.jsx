import Card from "../components/Card.jsx";
import { CATALOGO } from "../data/films.js";

const Cartelera = () => (

    <div className="mt-[80px] lg:mt-[130px]">
        <h1>CARTELERA</h1>
        <div className="container mx-auto grid grid-cols-1 gap-16 p-3 md:gap-x-8 md:grid-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-28">
            {CATALOGO.map(peli => (
                <Card key={peli.id} card={peli} />
            ))}
        </div>
    </div>

);

export default Cartelera;