import './App.css';
import Nav from './components/commons/Nav';
import Portfolio from './components/home/Portfolio';
import Footer from './components/commons/Footer';
import Contact from './components/home/Contact';
import Pricing from './components/home/Pricing';

function App() {
  return (
    <>
      <Nav />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
