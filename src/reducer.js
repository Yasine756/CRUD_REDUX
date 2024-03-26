const initialState = {
    produits: [
        { id: 1, nom: "Céréales Kellogg's Special K", prix: 10.99, qt: 50, categorie: "Alimentation", date_expiration: "2024-05-01", fabricant: "Kellogg's", date_achat: "2024-01-15" },
        { id: 2, nom: "Lait demi-écrémé Lactel", prix: 15.49, qt: 30, categorie: "laitiers", date_expiration: "2024-04-20", fabricant: "Lactel", date_achat: "2024-01-20" },
        { id: 3, nom: "Yaourts Danone Activia", prix: 7.89, qt: 80, categorie: "laitiers", date_expiration: "2024-04-15", fabricant: "Danone", date_achat: "2024-02-05" },
        { id: 4, nom: "Pain de campagne", prix: 25.99, qt: 20, categorie: "Boulangerie", date_expiration: "2024-05-10", fabricant: "Boulangerie Artisanale", date_achat: "2024-01-10" },
        { id: 5, nom: "Jus d'orange Tropicana", prix: 5.00, qt: 100, categorie: "Boissons", date_expiration: "2024-04-25", fabricant: "Tropicana", date_achat: "2024-02-10" },
        { id: 6, nom: "Chips Lay's saveur barbecue", prix: 12.75, qt: 45, categorie: "Snacks", date_expiration: "2024-05-05", fabricant: "Lay's", date_achat: "2024-01-25" },
        { id: 7, nom: "Pâtes Barilla spaghetti", prix: 8.99, qt: 60, categorie: "Alimentation", date_expiration: "2024-04-30", fabricant: "Barilla", date_achat: "2024-02-15" },
        { id: 8, nom: "Huile d'olive vierge extra", prix: 18.50, qt: 25, categorie: "Alimentation", date_expiration: "2024-05-15", fabricant: "Huilerie XXX", date_achat: "2024-01-30" },
        { id: 9, nom: "Fromage Camembert Président", prix: 22.00, qt: 15, categorie: "laitiers", date_expiration: "2024-05-20", fabricant: "Président", date_achat: "2024-02-20" },
        { id: 10, nom: "Poulet fermier Label Rouge", prix: 9.99, qt: 70, categorie: "Viandes", date_expiration: "2024-04-22", fabricant: "Ferme XXX", date_achat: "2024-01-22" },
        { id: 11, nom: "Salade verte bio", prix: 13.50, qt: 55, categorie: "Légumes", date_expiration: "2024-05-01", fabricant: "Ferme Bio ABC", date_achat: "2024-02-01" },
        { id: 12, nom: "Thon en conserve Saupiquet", prix: 3.75, qt: 40, categorie: "Conserves", date_expiration: "2024-04-28", fabricant: "Saupiquet", date_achat: "2024-01-28" },
        { id: 13, nom: "Biscuits Oreo", prix: 4.99, qt: 65, categorie: "Snacks", date_expiration: "2024-05-10", fabricant: "Oreo", date_achat: "2024-02-10" },
        { id: 14, nom: "Café moulu Carte Noire", prix: 8.25, qt: 90, categorie: "Boissons", date_expiration: "2024-05-15", fabricant: "Carte Noire", date_achat: "2024-02-15" },
        { id: 15, nom: "Pain de mie complet Harry's", prix: 2.49, qt: 75, categorie: "Boulangerie", date_expiration: "2024-04-20", fabricant: "Harry's", date_achat: "2024-01-20" },
        { id: 16, nom: "Eau minérale Evian", prix: 1.99, qt: 120, categorie: "Boissons", date_expiration: "2024-04-25", fabricant: "Evian", date_achat: "2024-02-25" },
        { id: 17, nom: "Pâtes à tartiner Nutella", prix: 6.50, qt: 40, categorie: "Alimentation", date_expiration: "2024-04-30", fabricant: "Nutella", date_achat: "2024-03-01" },
        { id: 18, nom: "Sardines à l'huile d'olive Connétable", prix: 4.29, qt: 55, categorie: "Conserves", date_expiration: "2024-05-05", fabricant: "Connétable", date_achat: "2024-03-05" },
        { id: 19, nom: "Epinards surgelés Picard", prix: 3.20, qt: 50, categorie: "Légumes", date_expiration: "2024-04-22", fabricant: "Picard", date_achat: "2024-03-10" },
        { id: 20, nom: "Coca-Cola", prix: 7.99, qt: 90, categorie: "Boissons", date_expiration: "2024-05-10", fabricant: "Coca-Cola", date_achat: "2024-03-15" },
    ]
,categoryFilter: 'Tous',}


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
                        qt: action.payload.qt,
                        fabricant: action.payload.fabricant,
                        date_achat: action.payload.achat,
                        date_expiration: action.payload.expiration,
                        categorie: action.payload.categorie
                    };
                }
                return user;
            });
            return { ...state, produits: updatedProduits };
        case 'DeleteProduct':
            return { ...state, produits: state.produits.filter(u => u.id !== action.payload) };
        case 'filtre':
            return { ...state, produits: [...state.produits].sort((a, b) => a.qt - b.qt) };
        case 'expiration':
            const currentDate = new Date();
            const expirationDate = new Date(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000)); 
            const productsExpiringSoon = state.produits.filter(product => {
                const productExpiration = new Date(product.date_expiration);
                return productExpiration <= expirationDate;
            });
            return { ...state, produits: productsExpiringSoon };
        default:
            return state;
    }
}



export default Reducer;
