import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>                                           {/* inicia configuração das rotas */}
      <Navbar />                                              {/* Toda pagina terá a Navbar */}
      <Routes>                                                {/* Configura rota por rota */}
        <Route path="/" element={<Listing />} />              {/* A rota do caminho raiz (/) abre a página Listing */}
        <Route path="/form">                                 
          <Route path=":movieId" element={<Form />} />        {/* A rota do caminho /form/id abre a página Form */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;