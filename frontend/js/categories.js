// fonction de création de l'objet categorie qui prend les valeurs saisi par l'utilisateur
function addCategory(nom, color) {
    const table = getCategory();
    const idC = table.length > 0 ? table[table.length - 1].id + 1 : 1;
    const categories = {
        id: idC,
        nom: nom,
        couleur: color
    }

    return categories;
}

// fonction de lecture de la catégorie
function readCategoryById(id) {
    const table = getCategory();
    const newTable = table.find(element => element.id === id);
    return newTable;
}


// fonction de suppression de la catégorie en fonction de l'id
function delCategory(id) {
    const table = getCategory();
    const newTable = table.filter(element => element.id !== id);
    setCategory(newTable);
}
