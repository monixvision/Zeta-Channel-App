import reSize from "../assets/img/icon/icon-resize.svg";
import minimizar from "../assets/img/icon/icon-minimizar.svg";
import salir from "../assets/img/icon/icon-salir.svg";

const CierrePopUp = ({ setpopupIsOpen }) => (

    <ul className="flex gap-6 justify-end rounded-t-xl bg-dark py-3 px-5 md:py-4" >
        <li className="flex items-center justify-center">
            <img src={minimizar} alt="Minimizar" className="w-4 h-4 opacity-60 md:w-6 md:h-6" />
        </li>
        <li className="flex items-center justify-center">
            <img src={reSize} alt="ReSize" className="w-4 h-4 opacity-60 md:w-6 md:h-6" />
        </li>
        <li className="flex items-center justify-center">
            <button onClick={() => setpopupIsOpen(false)} className="cursor-pointer">
                <img src={salir} alt="Salir" className="w-5 h-5 md:w-6 md:h-6" />
            </button>
        </li>
    </ul >
);

export default CierrePopUp;