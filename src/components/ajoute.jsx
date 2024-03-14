import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../actions';
import { useNavigate } from 'react-router-dom';


function Ajouter() {
  const [name, setNom] = useState('');
  const [price, setPrix] = useState(0);
  const [quantite, setQt] = useState(0);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const total = useSelector(data => data.produits.length);
  const Add = () => {      
      const newProduit = { id: total+1, nom: name, prix: price, qt: quantite };      
      dispatch(AddUser(newProduit));
      navigate('/')
    };
   

  return (
    <div>
      <h1>Ajouter un produit</h1>
      <form action="">
        <label>le Nom</label>
        <input type="text" name="Nom" onChange={(e)=>setNom(e.target.value)} />
        <label>le Prix</label>
        <input type="text" name="prix" onChange={(e)=>setPrix(e.target.value)} />
        <label> quantité en Stcok</label>
        <input type="number" name="qt" onChange={(e)=>setQt(e.target.value)} />
        <button onClick={Add}>Ajouter</button>
      </form>
    </div>
  );
}

export default Ajouter;
