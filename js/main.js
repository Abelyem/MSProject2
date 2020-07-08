const drinkName = document.getElementById('drink-name')
const ingredientsRequired = document.getElementById('ingredients')
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

   drinkName.innerHTML = `<h3>${name}</h3><img src="${image}/preview"></img>`;
   howToMake.innerHTML = `<h4>${category}</h4> ${instructions}`;
  
const ingredient1 = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3,
                    data.drinks[0].strIngredient4, data.drinks[0].strIngredient5, data.drinks[0].strIngredient6, 
                    data.drinks[0].strIngredient7, data.drinks[0].strIngredient8, data.drinks[0].strIngredient9,
                    data.drinks[0].strIngredient10, data.drinks[0].strIngredient11, data.drinks[0].strIngredient12,
                    data.drinks[0].strIngredient13, data.drinks[0].strIngredient14, data.drinks[0].strIngredient15]

let i;

for (i = 0; i < ingredient1.length; i++) {
 if (ingredientsRequired.innerHTML == null) {
     return ingredientsRequired.innerHTML = "";
 }  else {
    ingredientsRequired.innerHTML = ingredient1.join(`<br>`);
 }
}
 




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



