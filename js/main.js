
function randomDrink() {  
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then (response => {

    return response.json()
})

.then(data => {

   const name = data.drinks[0].strDrink;
   const category = data.drinks[0].strCategory;
   const instructions = data.drinks[0].strInstructions;
  // const category = data.drinks[0].strCategory;

   drinkName.innerHTML = name;
   typeOfDrink.innerHTML = category;
   howToMake.innerHTML = instructions;

})} 

XXXXXX.addEventListener('click', randomDrink)


function colorChangeToRed() {
  document.getElementById("topCocktails").style.backgroundColor = "red";
}

function ColorRevertToOriginal() {
  document.getElementById("topCocktails").style.backgroundColor = "aqua";
}