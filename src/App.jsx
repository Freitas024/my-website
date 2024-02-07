import './styles/App.css'
import Header from "./header/index"
import Home from "./home";
import Sobre from "./sobre";
import Projetos from "./projetos";
import Contatos from "./contato";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route Component={Home} exact path='/'/>
          <Route Component={Sobre} path='/Sobre'/>
          <Route Component={Projetos} path='/Projetos'/>
          <Route Component={Contatos} path='/Contatos'/>
        </Routes>
    </Router>
  )
}

export default App
