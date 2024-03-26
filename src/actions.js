export const AddUser=(user)=>{
    return {type:'add_user',payload:user}
}
export const UpdateUser=(user)=>{
    return {type:'Update_User',payload:user}
}
export const  deleteproduct=(id)=>{
    return {type:'DeleteProduct',payload:id}
}

export const filtrage=()=>{
    return {type:'filtre'}
}
export const categorie=(categ)=>{
    return {type:'Categorie',payload:categ}
}
export const expiration=()=>{
    return {type:'expiration'}
}
