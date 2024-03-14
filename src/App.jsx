import { BrowserRouter, Route, Routes } from "react-router-dom";
import Affiche from "./components/affiche";
import Ajouter from "./components/ajoute";
import Modifier from "./components/modifi";


function App() {
  
  return (
    <div >
      <div>
       <div style={{display:"flex" ,justifyContent:'space-around'}}>
       <h1 style={{color:'blue'}}>Yassine</h1>
        <h1 style={{color:'black',textAlign:'center'}}> Plateforme de Gestion de Stocks avec Redux</h1>
       </div>

        <h6 style={{color:'purple',textAlign:'center'}}>Vous pouvez Ajouter Lire Modifier Supprimer Un produit</h6>
      </div>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Affiche/>}/>
        <Route path='/Ajouter' element={<Ajouter/>}/>
        <Route path='/Modifier/:id' element={<Modifier/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
