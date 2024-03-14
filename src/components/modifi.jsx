import { useNavigate, useParams } from 'react-router-dom'
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { UpdateUser } from '../actions';
import './modifie.css'
function Modifier() {
    const {id}=useParams()
    const produit=useSelector(data=>data.produits.find((p)=>p.id===parseInt(id)))
    const [name, setNom] = useState(produit.nom);
    const [price, setPrix] = useState(produit.prix);
    const [quantite, setQt] = useState(produit.qt);

    const dispatch = useDispatch();
    const Navigate=useNavigate()
    const update=()=>{
            const newUser={id:id,nom:name,prix:price,qt:quantite}
            dispatch(UpdateUser(newUser))
            Navigate('/')
            
    }
  
    
  return (
    <div>
        <form action="">
        <label>le Nom</label>
        <input type="text" value={name} onChange={(e)=>setNom(e.target.value)} />
        <label>le Prix</label>
        <input type="text" value={price} onChange={(e)=>setPrix(e.target.value)} />
        <label> quantité en Stcok</label>
        <input type="text" value={quantite} onChange={(e)=>setQt(e.target.value)} />
        <button onClick={update}>Modifier</button>
        </form>
    </div>
  )
}

export default Modifier