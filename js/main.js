const drinkName = document.getElementById('drink-name')
const typeOfDrink = document.getElementById('category')
const howToMake = document.getElementById('drink-instructions')
const randomDrinkButton = document.getElementById('drink-button')

function randomDrink() {  
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then (response => {

    return response.json()
})

.then(data => {

   const name = data.drinks[0].strDrink;
   const image = data.drinks[0].strDrinkThumb;
   const category = data.drinks[0].strCategory;
   const instructions = data.drinks[0].strInstructions;

   drinkName.innerHTML = name + `<img src="${image}/preview"></img>`;
   typeOfDrink.innerHTML = category;
   howToMake.innerHTML = instructions;

})} 

randomDrinkButton.addEventListener('click', randomDrink)


// function colorChangeToRed() {
// var cocktailsList = document.getElementsByClassName("topCocktails")
// var i;
// for (i = 0; i < cocktailsList.length; i++) {
// cocktailsList[i].style.backgroundColor = "red";
// }}

// function ColorRevertToOriginal() {
// var cocktailsList = document.getElementsByClassName("topCocktails")
// var i;
// for (i = 0; i < cocktailsList.length; i++) {
// cocktailsList[i].style.backgroundColor = "aqua";
// }}



