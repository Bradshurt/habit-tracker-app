const formSelct = document.getElementById("form-select");

formSelct.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectHabit = document.getElementById("selectHbait");
    const selectV = selectHabit.value;

    const element = document.querySelector(".title-habiteSelect");

    if(validateField(selectV, selectHabit.value, element)){
        hideErrorMessage();
        const habit = getHabitById(Number(selectV));
        showInfoHabit(habit);
        formSelct.reset();
    }
});

const formCategory = document.getElementById("form-category");
formCategory.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameCat = document.getElementById("nom-categorie");
    const colorCat = document.getElementById("color-categorie");
    const element = document.querySelector(".title_categorie")
    const nameCV = nameCat.value;
    const colorV = colorCat.value;

    if(validateField(nameCV, nameCat.value, element) && validateField(colorV, colorCat.value, element)){
        hideErrorMessage()
        const category = addCategory(nameCV, colorV);
        const tableC = getCategory();
        tableC.push(category);
        setCategory(tableC);
        formCategory.reset();
        readCategory();
    };
});

const form = document.getElementById("form-habit");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const namInput = document.getElementById("name");
    const typeInput = document.getElementById("type");
    const categorieInput = document.getElementById("category");
    const frequenceInput = document.getElementById("frequence");
    const valueInput = document.getElementById("objectifValeur");
    const valueUnit = document.getElementById("objectifUnite");

    const element = document.querySelector(".info");

    const nameV = namInput.value.trim();
    const typeV = typeInput.value;
    const categoryV = categorieInput.value;
    const frequenceV = frequenceInput.value;
    const objectifV = valueInput.value.trim();
    const uniteV = valueUnit.value;

    if(validateField(nameV, namInput.name, element) &&
        validateField(typeV, typeInput.name, element) &&
        validateField(categoryV, categorieInput.value, element) &&
        validateField(frequenceV, frequenceInput.name, element)
    ){
        hideErrorMessage();
        const habit = addHabit(
            nameV,
            typeV,
            categoryV,
            frequenceV,
            objectifV, 
            uniteV
        );

        const table = getHabit();
        table.push(habit);
        setHabit(table);

        hideErrorMessage();

        form.reset();

        showHabit(habit);
    }
});
