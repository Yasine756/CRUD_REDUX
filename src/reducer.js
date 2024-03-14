const initialState = {
    produits: [
        { id: 1, nom: "Produit A", prix: 10.99, qt: 50 },
        { id: 2, nom: "Produit B", prix: 15.49, qt: 30 },
        { id: 3, nom: "Produit C", prix: 7.89, qt: 80 },
        { id: 4, nom: "Produit D", prix: 25.99, qt: 20 },
        { id: 5, nom: "Produit E", prix: 5.00, qt: 100 },
        { id: 6, nom: "Produit F", prix: 12.75, qt: 45 },
        { id: 7, nom: "Produit G", prix: 8.99, qt: 60 },
        { id: 8, nom: "Produit H", prix: 18.50, qt: 25 },
        { id: 9, nom: "Produit I", prix: 22.00, qt: 15 },
        { id: 10, nom: "Produit J", prix: 9.99, qt: 70 },
        { id: 11, nom: "Produit K", prix: 13.50, qt: 55 }, 
    ]
};

function Reducer(state = initialState, action) {

    switch (action.type) {
        case 'add_user':
            return { ...state, produits: [...state.produits, action.payload] };
        case 'Update_User':
            const updatedProduits = state.produits.map(user => {
                if (user.id === parseInt(action.payload.id)) {
                    return {
                        ...user,
                        nom: action.payload.nom,
                        prix: action.payload.prix,
                        qt: action.payload.qt
                    };
                }
                return user;
            });
            return { ...state, produits: updatedProduits };
        case 'delete_User':
            return { ...state, produits: state.produits.filter(u => u.id !== action.payload) };
                   
            
        case 'filtre':
            return { ...state, produits: [...state.produits].sort((a, b) => a.qt - b.qt) };
        default:
            return state;
    }
}

export default Reducer;
