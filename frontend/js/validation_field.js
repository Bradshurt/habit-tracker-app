// validation donnée formulaire
function validateField(valeur, nameChamp, div) {
    if(valeur === ""){
        showErrorMessage(nameChamp, div);
        return false;
    }
    return true;
}