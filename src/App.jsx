import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Affiche from "./components/affiche";
import Ajouter from "./components/ajoute";
import Modifier from "./components/modifi";
import { useDispatch } from 'react-redux';
import {  expiration, filtrage } from "./actions";
import { GiSandsOfTime } from "react-icons/gi";
import { IoFilter } from "react-icons/io5";

import { SiRedux } from "react-icons/si";

function App() {
  const dispatch = useDispatch();
  
  
    const handleQT = () => {
        dispatch(filtrage());
    };
   
   
    const handleExp=()=>{
      dispatch(expiration())
    }
   
    
  return (
    <div >
      <div className='flex flex-col sm:flex-row gap-6 items-center justify-center sm:justify-between mb-6'>
                

                <div className="flex gap-6">
                    <button onClick={handleQT} className='btn btn-outline flex'><IoFilter />Filtrer par quantité</button>
                   
                   
                    <button onClick={handleExp} className='btn btn-outline flex'><GiSandsOfTime />Expiration Proche</button>
                    
                </div>
                <h1 className="flex justify-center font-bold block"> Gestion de Stock avec  Redux <SiRedux className="text-purple-500 font-bold ml-3"/></h1>
                


            </div>
             
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Affiche/>} />
        <Route path='/Ajouter' element={<Ajouter/>}/>
        <Route path='/Modifier/:id' element={<Modifier/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
