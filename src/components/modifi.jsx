import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUser } from "../actions";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

function Modifier() {
  const { id } = useParams();
  const produit = useSelector((data) =>
    data.produits.find((p) => p.id === parseInt(id))
  );

  const [name, setName] = useState(produit.nom);
  const [price, setPrice] = useState(produit.prix);
  const [quantite, setQuantite] = useState(produit.qt);
  const [achat, setAchat] = useState(produit.date_achat);
  const [fabricant, setFabricant] = useState(produit.fabricant);
  const [expiration, setExpiration] = useState(produit.date_expiration);
  const [categorie, setCategorie] = useState(produit.categorie);

  const dispatch = useDispatch();
const navigate=useNavigate()
  const update = () => {
    const newUser = {
      id: id,
      nom: name,
      prix: price,
      qt: quantite,
      fabricant: fabricant,
      date_achat: new Date(achat),
      date_expiration: new Date(expiration),
      categorie: categorie,
    };
    dispatch(UpdateUser(newUser));
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/" className="flex justify-end mr-9">
        <div className="bg-primary p-2 rounded-[10px] text-white font-bold flex justify-center gap-1 w-[150px] mb-9">
          <FaHome />
          Accueil
        </div>
      </Link>
      <form className="flex flex-col justify-evenly gap-6 sm:gap-9">
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Nom</span>
          <input
            type="text"
            className="w-full sm:w-[250px] ml-3"
            placeholder="Nom du produit"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Prix</span>
          <input
            type="number"
            className="w-full sm:w-[250px] ml-3"
            placeholder="Prix du produit"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Quantité</span>
          <input
            type="number"
            className="w-full sm:w-[250px] ml-3"
            placeholder="Quantité du produit"
            value={quantite}
            onChange={(e) => setQuantite(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Fabriquant</span>
          <input
            type="text"
            className="w-full sm:w-[250px] ml-3"
            placeholder="Fabricant du produit"
            value={fabricant}
            onChange={(e) => setFabricant(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Date d'Achat</span>
          <input
            type="date"
            className="w-full sm:w-[250px] ml-3"
            placeholder="Date d'Achat du produit"
            value={achat}
            onChange={(e) => setAchat(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className="font-bold text-1xl">Date d'expiration</span>
          <input
            type="date"
            className="w-full sm:w-[250px] ml-3"
            placeholder="Date d'expiration du produit"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
        </label>
        <div className="flex items-center gap-2">
          <span className="font-bold text-1xl">Catégorie</span>
          <select
            className="select select-primary max-w-xs font-bold"
            onChange={(e) => setCategorie(e.target.value)}
            value={categorie}
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
        </div>

        <button
          className="bg-info p-2 rounded-[20px] hover:text-white ml-[45%] font-bold flex items-center justify-center gap-6 w-[150px]"
          onClick={update}
        >
          Modifier{" "}
        </button>
      </form>
    </div>
  );
}

export default Modifier;
