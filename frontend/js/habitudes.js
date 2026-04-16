// fonction de création de l'objet habitude qui prend les valeurs saisi par l'utilisateur
function addHabit(nom, type, categoryId, frequence, objectifValue = "", objectifUnite = "") {
    const table = getHabit();
    const id = table.length > 0 ? table[table.length - 1].id + 1 : 1;
    const habit = {
        id: id,
        nom: nom,
        categorie: categoryId,
        type: type,
        frequence: frequence,
        objectif: null
    }

    if(objectifValue !== "" && objectifValue > 0 && objectifUnite !== ""){
        habit.objectif = {
            valeur: parseFloat(objectifValue),
            unite: objectifUnite
        };
    }

    return habit;
}

// fonction de suppression d'habitude en fonction de l'id
function delHabit(id) {
    const table = getHabit();
    const newTable = table.filter(element => element.id !== id);
    setHabit(newTable);
}

// fonction de modification d'une habitude
function modifyHabit(id, modify) {
    const table = getHabit();
    const newTable = table.map(element => {
        if(element.id === id){
            return modify = {
                ...element,
                ...modify
            };
        }
        return element;
    });
    setHabit(newTable);
    return newTable;
}

// function de recherche d'une habitude
function getHabitById(id) {
    const table = getHabit();
    const newTable = table.find(element => element.id === id);
    return newTable;
}

function markedDone(habitId, quantity){
    const dateTime = new Date().toISOString().split("T")[0];
    const table = getEntry();
    const existEntry = table.find(element => element.habitId === habitId && element.date === dateTime);
    if(!existEntry){
        const entry = {
            id: Date.now(),
            habitudeId: habitId,
            date: dateTime,
            completee: true,
            quantite: quantity
        };
        return entry
    }
}