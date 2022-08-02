import logo from './logo.svg';
import {NavBar} from './components/NavBar' ;
import {Banner} from './components/Banner' ;
import {Stats} from './components/Stats' ;
import {Projects} from './components/Projects' ;
import './App.css';
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {motion} from "framer-motion";
import {Row} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Stats/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
