import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../actions';
import { useNavigate } from 'react-router-dom';

function Ajouter() {
  const [name, setNom] = useState('');
  const [price, setPrix] = useState(0);
  const [quantite, setQt] = useState(0);
  const [categorie, setcategori] = useState('');
  const [fabriquant, setfabriquant] = useState('');
  const [achat, setAchat] = useState('');
  const [expiration, setExpiration] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = useSelector(data => data.produits.length);
  
  const Add = () => {      
    const newProduit = { id: total+1, nom: name, prix: price, qt: quantite,fabricant:fabriquant,date_achat:achat,
      date_expiration:expiration,categorie:categorie};      
    dispatch(AddUser(newProduit));
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className='text-2xl text-blue-600 text-center mb-9 p-6 border-2 bg-blue-50 '>Ajouter un produit</h1>
      <form className="flex flex-col justify-evenly gap-9">
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Name</span>
          <input
            type="text"
            className="input-field ml-3"
            placeholder="Daisy"
            value={name}
            onChange={(e) => setNom(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Prix</span>
          <input
            type="number"
            className="input-field ml-3"
            placeholder="Daisy"
            value={price}
            onChange={(e) => setPrix(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Quantité</span>
          <input
            type="number"
            className="input-field ml-3"
            placeholder="Daisy"
            value={quantite}
            onChange={(e) => setQt(e.target.value)}
          />
        </label>
        
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Fabriquant</span>
          <input
            type="text"
            className="input-field ml-3"
            placeholder="Daisy"
            value={fabriquant}
            onChange={(e) => setfabriquant(e.target.value)}
          />
        </label>
        
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Date d'Achat</span>
          <input
            type="date"
            className="input-field ml-3"
            placeholder="Daisy"
            value={achat}
            onChange={(e) => setAchat(e.target.value)}
          />
        </label>
        
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Date d'expiration</span>
          <input
            type="date"
            className="input-field ml-3"
            placeholder="Daisy"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
        </label>
        
        <select
          className="select select-primary max-w-xs font-bold "
          onChange={(e)=>setcategori(e.target.value)}
        >
          <option value="">TOUS(*)</option>
          <option value="Alimentation">Alimentation</option>
          <option value="laitiers">laitiers</option>
          <option value="Boulangerie">Boulangerie</option>
          <option value="Boissons">Boissons</option>
          <option value="Snacks">Snacks</option>
          <option value="Viandes">Viandes</option>
          <option value="Légumes">Légumes</option>
          <option value="Conserves">Conserves</option>
        </select>
        
        <button
          className="btn btn-info w-full sm:w-auto mx-auto"
          onClick={Add}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default Ajouter;
