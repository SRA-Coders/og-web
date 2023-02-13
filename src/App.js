import './App.css';
import Nav from './components/commons/Nav';
import Portfolio from './components/home/Portfolio';
import Footer from './components/commons/Footer';
import Contact from './components/home/Contact';
import Pricing from './components/home/Pricing';
import Team from './components/home/Team';
import Counts from './components/commons/Counts';
import Hero from './components/commons/Hero';

function App() {
  return (
    <>
      <Hero />
      <Nav />
      <Counts />
      <Portfolio />
      <Team />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
