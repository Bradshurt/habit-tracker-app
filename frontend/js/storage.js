// fonction de recupération et sauvgarde des données dans le local storage
function getHabit(){
    const habitude = window.localStorage.getItem("habitude");
    return JSON.parse(habitude) || [];
}


function setHabit(habitude){
    window.localStorage.setItem("habitude", JSON.stringify(habitude));
}


function getCategory(){
    const categories = window.localStorage.getItem("categories");
    return JSON.parse(categories) || [];
}

function setCategory(categories){
    window.localStorage.setItem("categories", JSON.stringify(categories));
}

function getEntry(){
    const entry = window.localStorage.getItem("entres");
    return JSON.parse(entry) || [];
}

function setEntry(entry){
    window.localStorage.setItem("entres", JSON.stringify(entry));
}