export const AddUser=(user)=>{
    return {type:'add_user',payload:user}
}
export const UpdateUser=(user)=>{
    return {type:'Update_User',payload:user}
}
export const  deleteUser=(id)=>{
    return {type:'delete_User',payload:id}
}

export const filtrage=()=>{
    return {type:'filtre'}
}
