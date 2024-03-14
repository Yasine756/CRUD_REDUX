import { useDispatch, useSelector } from 'react-redux';
import { deleteUser,  filtrage } from '../actions';
import { Link } from 'react-router-dom';
import './affiche.css';

function Affiche() {
    const users = useSelector(data => data.produits);
    const dispatch = useDispatch();

    

    const handleQT =  () => {
         dispatch(filtrage());
    };

    return (
        <div>
            <Link to="/Ajouter">
                <button>Ajouter un Produit</button>
            </Link>
            
            <button onClick={handleQT}>Filtrer par quantité</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Méthodes</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(el => (
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.nom}</td>
                            <td>{el.prix}$</td>
                            <td style={{ color: el.qt > 5 ? 'green' : 'red' }}>{el.qt}</td>
                            <td>
                                <Link to={`/Modifier/${el.id}`}>
                                    <button>Modifier</button>
                                </Link>
                                <button onClick={() => dispatch(deleteUser(el.id))}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Affiche;
