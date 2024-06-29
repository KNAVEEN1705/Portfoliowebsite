
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projest from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projest/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
