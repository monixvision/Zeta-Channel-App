import menuIcon from '../assets/img/icon/icon-menu.svg';

const BtnBurguer = ({ popupIsOpen, setpopupIsOpen }) => (

    <button onClick={() => setpopupIsOpen(!popupIsOpen)}
        className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer size-6 transition-colors duration-150"
        aria-label="Menu"
    >
        <img alt="Menu Icon" className="h-6 w-6 dark:invert" src={menuIcon} />
    </button>
);
export default BtnBurguer;