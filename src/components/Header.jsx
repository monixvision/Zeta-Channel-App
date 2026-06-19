import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoZeta from '../assets/img/logo-zeta-channel.svg';
import lightbulbIcon from '../assets/img/icon-lightbulb.svg';
import searchIcon from '../assets/img/icon-search.svg';
import menuIcon from '../assets/img/icon-menu.svg';
import ticketIcon from '../assets/img/icon-ticket.svg';

const Header = () => {

  const [language, setLanguage] = useState('ES');
  /* por defecto español que es lo que se guarda en lenguage */
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false;
  });
  /* si tenemos dos elemntos a elegir false y true */
  /* esto me lo ha hecho la IA pq me daba error el setIsDarkMode y lo que ha hecho es que si sale que no está definido que por defecto lo ponga en falso -- light (eso es lo que he entendido) */

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ES' ? 'EN' : 'ES'));
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    /* ! si es true lo cambia a false */
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="w-full">


      <nav className="bg-light dark:bg-dark text-black dark:text-white flex items-center w-full justify-between px-3 fixed top-0 left-0 z-9999">

        <div className="pt-2.5">
          {/* intentar hacer que los ojos sigan el ratón con el cursor */}
          <Link to="/">
            <img alt="Zeta Channel Logo" className="w-[60px]" src={logoZeta} />
          </Link>
          {/* LA / TE LLEVA A LA PAGINA PRINCIPAL */}
        </div>

        <div className="flex gap-6 items-center">
          {/* Seleccionador de Idioma */}
          <button
            onClick={toggleLanguage}
            className="flex flex-col items-center justify-center cursor-pointer font-pixel text-2xl"
          >
            <div className="flex gap-1 items-center justify-center">
              <span className="text-black dark:text-white leading-6">
                ES
              </span>
              <span className="text-black dark:text-white leading-6">
                /
              </span>
              <span className="text-black dark:text-white leading-6">
                EN
              </span>
            </div>
            <div className="flex h-[2px] w-full justify-between">
              <div className={`h-full w-7 transition-colors duration-150 ${language === 'ES' ? 'bg-black dark:bg-white' : 'bg-transparent'}`} />
              <div className={`h-full w-7 transition-colors duration-150 ${language === 'EN' ? 'bg-black dark:bg-white' : 'bg-transparent'}`} />
            </div>
          </button>

          {/* Boton que cambia de Modo */}
          <button
            onClick={toggleTheme}
            className=" w-6 h-6 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            <img alt="Lightbulb Icon" className="h-6 w-5 dark:invert" src={lightbulbIcon} />
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
      <nav className="bg-blue dark:bg-pix-dark text-white hidden md:flex items-center justify-between w-full h-[96px] px-6 py-2.5 relative transition-colors duration-200">
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
