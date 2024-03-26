import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteproduct } from "../actions";
import { Link } from "react-router-dom";
import { LuPencil } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { IoMdAdd, IoIosMore } from "react-icons/io";

function Affiche() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const products = useSelector((data) => data.produits);
  const total = useSelector((data) => data.produits.length);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteproduct(id));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categorie === selectedCategory)
    : products;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <Link to="/Ajouter">
          <button className=" text-purple-500 flex border-b-4 border-indigo-500 mb-9 gap-3 sm:mb-0">
            Ajouter un Produit
            <IoMdAdd />
          </button>
        </Link>
        <select
          className="select select-primary max-w-xs mb-2 sm:mb-0"
          onChange={handleCategoryChange}
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
        <h5 className="text-blue-500 font-bold">
          Total: {filteredProducts.length}
        </h5>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider border-l-4 border-indigo-500">
                Produit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                <span className="flex">
                  Prix(<FiDollarSign />)
                </span>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider">
                Quantité
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((el) => (
              <tr key={el.id}>
                <td className="px-6 py-4 sm:py-2 whitespace-nowrap border-l-4 border-indigo-500">
                  {el.nom}
                </td>
                <td className="px-6 py-4 sm:py-2 whitespace-nowrap bg-blue-50 ">
                  <pre className="flex">{el.prix}</pre>
                </td>
                <td
                  className="px-6 py-4 sm:py-2 whitespace-nowrap "
                  style={{ color: el.qt > 5 ? "green" : "red" }}
                >
                  {el.qt}
                </td>

                <td className="px-6 py-4 sm:py-2 whitespace-nowrap flex flex-col sm:flex-row gap-3">
                  <Link to={`/Modifier/${el.id}`}>
                    <button className="btn btn-info w-full sm:w-auto">
                      Modifier <LuPencil />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(el.id)}
                    className="btn btn-error w-full sm:w-auto"
                  >
                    Supprimer <MdDelete />
                  </button>
                  <button
                    onClick={() => document.getElementById(el.id).showModal()}
                    className="btn btn-success w-full sm:w-auto"
                  >
                    Détails <IoIosMore />
                  </button>
                  <dialog id={el.id} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg text-center text-blue-500 bg-blue-100">
                        {el.nom}
                      </h3>
                      <p className="py-4 flex flex-col gap-6">
                        <div>
                          Date d'Achat :{" "}
                          <span className="text-green-500">
                            {el.date_achat}
                          </span>{" "}
                        </div>
                        <div>
                          Date d'Expiration :{" "}
                          <span className="text-green-500">
                            {el.date_expiration}
                          </span>{" "}
                        </div>
                        <div>
                          Le Fabriquant :{" "}
                          <span className="text-green-500">{el.fabricant}</span>
                        </div>
                        <div>
                          Ctégorie :{" "}
                          <span className="text-green-500">{el.categorie}</span>
                        </div>
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn btn-outline btn-accent">
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Affiche;
