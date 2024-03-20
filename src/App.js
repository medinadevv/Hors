import './App.scss';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Hors from "./Pages/Hors/Hors";
import Detail from "./Pages/DetaileHors/Detail";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Hors/>
            <Detail/>
            <Footer/>
        </div>
    );
}

export default App;
