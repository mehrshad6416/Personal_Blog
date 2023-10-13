import './App.css';
import Navbar from "./components/Navbar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Projects} from "./components/Projects";
function App() {
  return (
      <div className="App">
          <Navbar  />
          <Banner  />
          <Skills  />
          <Projects/>
      </div>
  );
}

export default App;
