import { Link } from 'react-router-dom';
/* import { useState, useEffect } from 'react'; */
import logoLight from '../assets/img/logo-zeta-channel-light.svg';
/* import logoDark from '../assets/img/logo-zeta-channel-dark.svg'; */
import lightbulbIcon from '../assets/img/icon-lightbulb.svg';
import searchIcon from '../assets/img/icon-search.svg';
import menuIcon from '../assets/img/icon-menu.svg';
import ticketIcon from '../assets/img/icon-ticket.svg';

const Header = () => {
  /* ESTO ES LO QUE EJECUTARIA CUANDO EMPEZASE A APLICAR JAVASCRIPT Y LOS ESTADOS */
  /* const [language, setLanguage] = useState('ES');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync theme with document class list
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ES' ? 'EN' : 'ES'));
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }; */

  return (
    <header className="w-full">

      {/* Mobile & Tablet Header Layout (< md Breakpoint)
      lA IA A USADO EL BREAKPOINT DE LA TABLET PARA EL ORDENADOR */}

      <nav className="bg-white dark:bg-pix-oscuro text-black dark:text-white flex md:hidden items-center justify-between w-full h-[52px] px-3 py-2.5 relative border-b border-grey dark:border-pix-oscuro transition-colors duration-200">

        {/* Zeta Mouse Brand Logo */}
        <Link to="/" className="block h-[43px] w-[60px] cursor-pointer">
          <img alt="Zeta Channel Logo" className="size-full" src={logoLight} />
        </Link>
        {/* LA / TE LLEVA A LA PAGINA PRINCIPAL */}


        {/* Mobile Nav Actions */}
        <div className="flex gap-6 items-center justify-end relative">
          {/* Custom Language Toggler */}
          <button
            /* onClick={toggleLanguage} */
            className="flex flex-col gap-1 items-start justify-center cursor-pointer font-pixel text-2xl"
          >
            <span className="text-black dark:text-white">
              ES/EN
            </span>
            <div className="flex h-[2px] w-full justify-between">
              <div className="h-full w-7 transition-colors duration-150" />
              {/* AQUÍ IRÁ ${language === 'ES' ? 'bg-black dark:bg-white' : 'bg-transparent'}` */}
              <div className="h-full w-7 transition-colors duration-150 " />
              {/* AQUÍ IRÁ ${language === 'EN' ? 'bg-black dark:bg-white' : 'bg-transparent'}` */}
            </div>
          </button>

          {/* Theme Mode Toggle Button */}
          <button
            /* onClick={toggleTheme} */
            className="flex items-center justify-center p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer size-6 transition-colors duration-150"
            aria-label="Toggle theme"
          >
            <img alt="Lightbulb Icon" className="size-full dark:invert" src={lightbulbIcon} />
          </button>

          {/* Search Button */}
          <button
            className="flex items-center justify-center p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer size-6 transition-colors duration-150"
            aria-label="Search"
          >
            <img alt="Search Icon" className="size-full dark:invert" src={searchIcon} />
          </button>

          {/* Hamburger Menu Button */}
          <button
            className="flex items-center justify-center p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer size-6 transition-colors duration-150"
            aria-label="Menu"
          >
            <img alt="Menu Icon" className="size-full dark:invert" src={menuIcon} />
          </button>
        </div>
      </nav>

      {/* Desktop Header Layout (>= md Breakpoint) */}
      <nav className="bg-blue dark:bg-pix-oscuro text-white hidden md:flex items-center justify-between w-full h-[96px] px-6 py-2.5 relative transition-colors duration-200">
        {/* Left Side: Desktop Menu & Tickets CTA */}
        <div className="flex gap-8 items-center relative">
          <button
            className="flex items-center justify-center p-1 rounded hover:bg-blue-hover dark:hover:bg-slate-800 cursor-pointer size-8 transition-colors duration-150"
            aria-label="Menu"
          >
            <img alt="Menu Icon" className="size-full invert" src={menuIcon} />
          </button>

          {/* Green Tickets Pill Button */}
          <button className="bg-green hover:bg-green-hover flex gap-3 h-8 items-center justify-center px-4 py-1 rounded-full cursor-pointer font-pixel text-lg text-black uppercase transition-colors duration-150">
            <img alt="Ticket Icon" className="w-6 h-[18px]" src={ticketIcon} />
            <span>tickets</span>
          </button>
        </div>

        {/* Center: Absolutely Centered Zeta Logo */}
        <a href="/" className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 w-[120px] h-[86px] cursor-pointer">
          <img
            alt="Zeta Channel Logo"
            className="size-full transition-transform duration-150 hover:scale-105"
          /* src={isDarkMode ? logoLight : logoDark} */
          />
        </a>

        {/* Right Side: Desktop Nav Actions */}
        <div className="flex gap-6 items-center justify-end relative">
          {/* Custom Language Toggler */}
          <button
            /* onClick={toggleLanguage} */
            className="flex flex-col gap-1 items-start justify-center cursor-pointer font-pixel text-2xl text-white"
          >
            <span>
              ES/EN
            </span>
            <div className="flex h-[2px] w-full justify-between">
              <div className="h-full w-[26px] transition-colors duration-150" />
              {/* AQUÍ IRÁ ${language === 'ES' ? 'bg-white' : 'bg-transparent'}`} */}
              <div className="h-full w-[26px] transition-colors duration-150" />
              {/* AQUÍ IRÁ ${language === 'EN' ? 'bg-white' : 'bg-transparent'}`} */}
            </div>
          </button>

          {/* Theme Mode Toggle Button */}
          <button
            /* onClick={toggleTheme} */
            className="flex items-center justify-center p-1 rounded hover:bg-blue-hover dark:hover:bg-slate-800 cursor-pointer size-8 transition-colors duration-150"
            aria-label="Toggle theme"
          >
            <img alt="Lightbulb Icon" className="size-full invert" src={lightbulbIcon} />
          </button>

          {/* Search Button */}
          <button
            className="flex items-center justify-center p-1 rounded hover:bg-blue-hover dark:hover:bg-slate-800 cursor-pointer size-8 transition-colors duration-150"
            aria-label="Search"
          >
            <img alt="Search Icon" className="size-full invert" src={searchIcon} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
