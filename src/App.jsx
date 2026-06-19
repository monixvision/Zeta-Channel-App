import { BrowserRouter, Routes, Route, /* Navigate */ } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Tickets from './pages/Tickets.jsx';
import Cartelera from './pages/Cartelera';
import Festival from './pages/Festival';
import Agenda from './pages/Agenda';
import User from './pages/User';
import ScrollToTop from './components/routes/ScrollToTop';
/* import Footer from './components/Footer'; */

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <ScrollToTop /> {/* se añade para que siempre vuelve al inicio */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tickets" element={<Tickets />} />
        <Route path="/Cartelera" element={<Cartelera />} />
        <Route path="/Festival" element={<Festival />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </main>

  </BrowserRouter>
)
export default App
