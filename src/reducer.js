const initialState = {
    produits: [
        { 
            id: 1, 
            nom: "burger", 
            img:"burger.jpg",
            prix: 10.99, 
            qt: 50, 
            categorie: "Alimentation", 
            date_expiration: "2024-05-01", 
            fabricant: "Kellogg's", 
            date_achat: "2024-01-15",
            description: "Délicieuses céréales Special K de Kellogg's, riches en fibres et en vitamines, parfaites pour un petit-déjeuner sain et équilibré."
        },
        { 
            id: 2, 
            nom: "Lait  Lactel", 
            img:"milk.jpg",
            prix: 15.49, 
            qt: 30, 
            categorie: "laitiers", 
            date_expiration: "2024-04-20", 
            fabricant: "Lactel", 
            date_achat: "2024-01-20",
            description: "Du lait demi-écrémé de qualité supérieure de la marque Lactel, parfait pour accompagner vos céréales du matin ou pour préparer de délicieux desserts."
        },
        { 
            id: 3, 
            nom: "Yaourts  Activia", 
            img:"yaghourt.jpg",
            prix: 7.89, 
            qt: 80, 
            categorie: "laitiers", 
            date_expiration: "2024-04-15", 
            fabricant: "Danone", 
            date_achat: "2024-02-05",
            description: "Les yaourts Activia de Danone, riches en probiotiques pour une digestion saine et équilibrée. Un délicieux dessert à savourer à tout moment de la journée."
        },
        { 
            id: 4, 
            nom: "Pain de campagne", 
            img:"pain.jpg",
            prix: 25.99, 
            qt: 20, 
            categorie: "Boulangerie", 
            date_expiration: "2024-05-10", 
            fabricant: "Boulangerie Artisanale", 
            date_achat: "2024-01-10",
            description: "Un délicieux pain de campagne, préparé par une boulangerie artisanale locale. Parfait pour accompagner vos repas ou pour préparer de délicieux sandwiches."
        },
        { 
            id: 5, 
            nom: "Jus d'orange ", 
            img:"orange.jpg",
            prix: 5.00, 
            qt: 100, 
            categorie: "Boissons", 
            date_expiration: "2024-04-25", 
            fabricant: "Tropicana", 
            date_achat: "2024-02-10",
            description: "Un délicieux jus d'orange pressé de qualité supérieure, préparé par Tropicana. Rafraîchissant et plein de vitamines, parfait pour bien commencer la journée."
        },
        { 
            id: 6, 
            nom: "Chips Lay's Barbecue", 
            img:"chipss.jpg",
            prix: 12.75, 
            qt: 45, 
            categorie: "Snacks", 
            date_expiration: "2024-05-05", 
            fabricant: "Lay's", 
            date_achat: "2024-01-25",
            description: "Des chips croustillantes à la saveur barbecue, préparées par Lay's. Parfaites pour une collation entre amis ou pour accompagner vos moments de détente."
        },
        { 
            id: 7, 
            nom: "Pâtes Barilla spaghetti", 
            img:"spagheti.jpg",
            prix: 8.99, 
            qt: 60, 
            categorie: "Alimentation", 
            date_expiration: "2024-04-30", 
            fabricant: "Barilla", 
            date_achat: "2024-02-15",
            description: "Des pâtes spaghetti de qualité supérieure de la marque Barilla, parfaites pour accompagner vos sauces préférées. Faciles et rapides à préparer pour un repas savoureux."
        },
        { 
            id: 8, 
            nom: "Huile d'olive vierge extra", 
            img:"huile_olive.jpg",
            prix: 18.50, 
            qt: 25, 
            categorie: "Alimentation", 
            date_expiration: "2024-05-15", 
            fabricant: "Huilerie XXX", 
            date_achat: "2024-01-30",
            description: "Une huile d'olive vierge extra de qualité supérieure, pressée à froid pour préserver toutes ses saveurs et ses bienfaits. Parfaite pour assaisonner vos salades ou pour cuisiner de délicieux plats méditerranéens."
        },
        { 
            id: 9, 
            nom: "Fromage  Président", 
            img:"cheese.jpg",
            prix: 22.00, 
            qt: 15, 
            categorie: "laitiers", 
            date_expiration: "2024-05-20", 
            fabricant: "Président", 
            date_achat: "2024-02-20",
            description: "Un délicieux fromage Camembert de la marque Président, au goût crémeux et fondant. Parfait pour accompagner vos plateaux de fromages ou pour préparer de délicieuses tartes salées."
        },
        { 
            id: 10, 
            nom: "Poulet fermier ", 
            img:"chiken.jpg",
            prix: 9.99, 
            qt: 70, 
            categorie: "Viandes", 
            date_expiration: "2024-04-22", 
            fabricant: "Ferme XXX", 
            date_achat: "2024-01-22",
            description: "Un poulet fermier Label Rouge, élevé en plein air dans une ferme locale. Une viande tendre et savoureuse, parfaite pour préparer de délicieux plats mijotés ou pour un barbecue en famille."
        },
        { 
            id: 11, 
            nom: "Salade verte bio", 
            img:"burger.jpg",
            prix: 13.50, 
            qt: 55, 
            categorie: "Légumes", 
            date_expiration: "2024-05-01", 
            fabricant: "Ferme Bio ABC", 
            date_achat: "2024-02-01",
            description: "Une salade verte bio fraîchement cueillie, cultivée avec soin par la ferme Bio ABC. Croquante et pleine de saveurs"
        },
        {
        id: 12,
        nom: "Thon en conserve ",
        img:"thon.jpg",
        prix: 3.75,
        qt: 40,
        categorie: "Conserves",
        date_expiration: "2024-04-28",
        fabricant: "Saupiquet",
        date_achat: "2024-01-28",
        description: "Du thon de qualité supérieure en conserve, préparé par Saupiquet. Parfait pour préparer des salades, des sandwichs ou pour accompagner vos plats de pâtes."
        },
        {
        id: 13,
        nom: "Biscuits ",
        img:"biscuit.jpg",
        prix: 4.99,
        qt: 65,
        categorie: "Snacks",
        date_expiration: "2024-05-10",
        fabricant: "Oreo",
        date_achat: "2024-02-10",
        description: "Les célèbres biscuits Oreo, un classique apprécié par les petits et les grands. Deux biscuits au cacao fourrés d'une délicieuse crème vanillée, parfait pour une pause gourmande à tout moment de la journée."
        },
        {
        id: 14,
        nom: "Café moulu Carte Noire",
        img:"coffe.jpg",
        prix: 8.25,
        qt: 90,
        categorie: "Boissons",
        date_expiration: "2024-05-15",
        fabricant: "Carte Noire",
        date_achat: "2024-02-15",
        description: "Un café moulu de qualité supérieure, préparé par Carte Noire. Un arôme riche et intense pour un café savoureux à déguster à tout moment de la journée."
        },
        {
        id: 15,
        nom: "Pain de mie complet",
        img:"pain.jpg",
        prix: 2.49,
        qt: 75,
        categorie: "Boulangerie",
        date_expiration: "2024-04-20",
        fabricant: "Harry's",
        date_achat: "2024-01-20",
        description: "Du pain de mie complet moelleux et savoureux, préparé par la marque Harry's. Parfait pour préparer des sandwichs gourmands ou pour accompagner vos petits-déjeuners."
        },
        {
        id: 16,
        nom: "Eau minérale Evian",
        img:"burger.jpg",
        prix: 1.99,
        qt: 120,
        categorie: "Boissons",
        date_expiration: "2024-04-25",
        fabricant: "Evian",
        date_achat: "2024-02-25",
        description: "Une eau minérale naturelle de qualité supérieure, puisée à Evian-les-Bains. Une eau pure et rafraîchissante, parfaite pour étancher votre soif à tout moment de la journée."
        },
        {
        id: 17,
        nom: "Pâtes à tartiner Nutella",
        img:"nutt.jpg",
        prix: 6.50,
        qt: 40,
        categorie: "Alimentation",
        date_expiration: "2024-04-30",
        fabricant: "Nutella",
        date_achat: "2024-03-01",
        description: "La célèbre pâte à tartiner au chocolat et aux noisettes de la marque Nutella. Un délice fondant à étaler sur vos tartines, crêpes ou à déguster à la cuillère pour une pause gourmande."
        },
        {
        id: 18,
        nom: "Sardines ",
        img:"sardine.jpg",
        prix: 4.29,
        qt: 55,
        categorie: "Conserves",
        date_expiration: "2024-05-05",
        fabricant: "Connétable",
        date_achat: "2024-03-05",
        description: "Des sardines de qualité supérieure, préparées à l'huile d'olive par Connétable. Une source de protéines et d'oméga-3 essentiels pour une alimentation équilibrée."
        },
        {
        id: 19,
        nom: "Epinards surgelés Picard",
        img:"epinards.jpg",
        prix: 3.20,
        qt: 50,
        categorie: "Légumes",
        date_expiration: "2024-04-22",
        fabricant: "Picard",
        date_achat: "2024-03-10",
        description: "Des épinards surgelés de qualité, préparés par Picard. Des légumes frais et savoureux, parfaits pour accompagner vos plats cuisinés ou pour préparer des recettes saines et gourmandes."
        },
        {
        id: 20,
        nom: "limonade",
        img:"limonade.jpg",
        prix: 7.99,
        qt: 90,
        categorie: "Boissons",
        date_expiration: "2024-05-10",
        fabricant: "Coca-Cola",
        date_achat: "2024-03-15",
        description: "La célèbre boisson gazeuse au cola de la marque Coca-Cola. Rafraîchissante et pétillante, parfaite pour accompagner vos repas ou pour une pause désaltérante à tout moment de la journée."
        }
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
                        qt: action.payload.qt,
                        date_achat: action.payload.achat,
                        fabricant: action.payload.fabricant,
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
