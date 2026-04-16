// fonctions de gestion de l'affichage sur la page
const select = document.getElementById("selectHbait");
function getSelectHabit (){
    select.innerHTML = '<option value="">Choisissez une habitude</option>';
    const data = getHabit();
    data.forEach(element => {
        const option = document.createElement("option");
        option.value = element.id;
        option.textContent = element.nom;
        select.appendChild(option);
    });
};
getSelectHabit();

function showInfoHabit(element){
    const div = document.querySelector(".infos-habit");
    div.innerHTML = '';

    const divNCT = document.createElement("div");
    divNCT.className = "div_name_category_type";

    const divInfo = document.createElement("div");
    divInfo.className = "div_info-type";

    const divButton = document.createElement("div");
    divButton.className = "div_button"

    const name = document.createElement("span");
    const category = document.createElement("span");
    const type = document.createElement("span");
    const pInfoObjectif = document.createElement("span");
    const pInfoFequence = document.createElement("span");
    const btnDone = document.createElement("button");

    name.textContent = element.nom;

    const showNameCategory = readCategoryById(Number(element.categorie));
    category.textContent = showNameCategory.nom;

    type.textContent = element.type;

    const showObjectif = formatObjectif(element);
    pInfoObjectif.textContent = `Objectif : ${showObjectif}`;
    pInfoFequence.textContent = element.frequence;

    btnDone.textContent = "Valider l'habitude";

    divNCT.appendChild(name);
    divNCT.appendChild(category);
    divNCT.appendChild(type);

    divInfo.appendChild(pInfoObjectif);
    divInfo.appendChild(pInfoFequence);
    divButton.appendChild(btnDone);

    div.appendChild(divNCT);
    div.appendChild(divInfo);
    div.appendChild(divButton);
}

// affichage du formulair d'ajout des habitudes et de la liste des habitude
const addButtonForm = document.getElementById("add");
const showButtonList = document.getElementById("show");
const ListHabitShow = document.querySelector(".ul_div");

addButtonForm.addEventListener('click', () => {
    form.style.display = "flex";
    hideErrorMessage()
});
showButtonList.addEventListener('click', () => {
    ListHabitShow.style.display = "flex";
    hideErrorMessage()
});

const btnForm = document.getElementById("suppForm");
const btnList = document.getElementById("supList");

btnForm.addEventListener('click', () => {
    document.getElementById("form-habit").style.display = "none";
});

btnList.addEventListener('click', () => {
    document.querySelector(".ul_div").style.display = "none";
});

// Afficher la liste d'habitude
const showItemHabit = document.querySelector(".ul_div");
const btnShowHabit = document.getElementById("show");

btnShowHabit.addEventListener('click', () => {
    showItemHabit.style.display = "flex";
});

const tBody = document.getElementById("tbody-habitude");
tBody.innerHTML = "";

function formatObjectif(habit){
    if(!habit.objectif ||
        !habit.objectif.valeur ||
        !habit.objectif.unite){
            return "-";
        }
    return `${habit.objectif.valeur} ${habit.objectif.unite}`;
}

function showHabit(element) {
    const tr = document.createElement("tr");
    const btnEdit = document.createElement("button");
    const btnSupp = document.createElement("button");
    const span = document.createElement("span");
    span.classList.add("status");

    if(element.type === "construire"){
        span.classList.add("vert")
    } else {
        span.classList.add("rouge")
    };

    const categorieId = readCategoryById(Number(element.categorie));

    const objectifShow = formatObjectif(element);

    const colonnes = [
        element.nom, 
        element.type, 
        categorieId.nom, 
        element.frequence,
        objectifShow
    ];

    colonnes.forEach((valeur, index) => {
        const td = document.createElement("td");

        if(index === 1) {
            const divType = document.createElement("div");
            divType.classList.add("td-type");
            divType.appendChild(document.createTextNode(valeur));
            divType.appendChild(span);
            td.appendChild(divType);
        }else{
            td.textContent = valeur;
        }
        tr.appendChild(td);
    });

    const tdAction = document.createElement('td');
    const divAction = document.createElement("div");
    divAction.classList.add("td-actions");

    btnEdit.textContent = "Modifier";
    btnSupp.textContent = "Supprimer";

    btnSupp.addEventListener("click", () => {
        delHabit(element.id);
        tBody.innerHTML = "";
        readHabit();
    });

    divAction.appendChild(btnEdit);
    divAction.appendChild(btnSupp);
    tdAction.appendChild(divAction);
    tr.appendChild(tdAction);

    tBody.appendChild(tr);
};

function readHabit() {
    const data = getHabit();
    data.forEach(element => {
        showHabit(element);
    });
}
readHabit();

const category = document.getElementById("category");
function readCategory(){
    category.innerHTML = '<option value="">Choisissez une catégorie</option>';
    const data = getCategory();
    data.forEach(element => {
        const option = document.createElement("option");
        option.value = element.id;
        option.textContent = element.nom;
        category.appendChild(option);
    });
}
readCategory();

// Gestion des messages de vérification des champs
const alertMss = document.createElement("span");
function showErrorMessage(champ, div){
    alertMss.classList.add("error");
    alertMss.textContent =`Le champ ${champ} est vide`;
    div.appendChild(alertMss);
    return alertMss;
}
function hideErrorMessage(){
    const divAlertMss = document.querySelector(".info");
    alertMss.classList.remove("error");
    alertMss.style.display = "none";
    divAlertMss.style.display = "none";
    alertMss.innerHTML = "";
}
