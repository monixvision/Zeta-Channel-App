import { BrowserRouter, Routes, Route, /* Navigate */ } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
/* import Footer from './components/Footer'; */

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    {/* <Footer /> */}
  </BrowserRouter>
)
export default App
