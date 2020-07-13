const drinkName = document.getElementById('drink-name')
const ingredientsRequired = document.getElementById('ingredients')
const howToMake = document.getElementById('drink-instructions')
const measurementsRequired = document.getElementById('measurements')
const randomDrinkButton = document.getElementById('random-drink-button')

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

   drinkName.innerHTML = `<h4>${name}</h4><img src="${image}/preview"></img>`;
   howToMake.innerHTML = `<h4>${category}</h4> ${instructions}`;
  
const AllIngredients = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3,
                        data.drinks[0].strIngredient4, data.drinks[0].strIngredient5, data.drinks[0].strIngredient6, 
                        data.drinks[0].strIngredient7, data.drinks[0].strIngredient8, data.drinks[0].strIngredient9,
                        data.drinks[0].strIngredient10, data.drinks[0].strIngredient11, data.drinks[0].strIngredient12,
                        data.drinks[0].strIngredient13, data.drinks[0].strIngredient14, data.drinks[0].strIngredient15]

const AllMeasurements = [data.drinks[0].strMeasure1, data.drinks[0].strMeasure2, data.drinks[0].strMeasure3,
                        data.drinks[0].strMeasure4, data.drinks[0].strMeasure5, data.drinks[0].strMeasure6,
                        data.drinks[0].strMeasure7, data.drinks[0].strMeasure8, data.drinks[0].strMeasure9,
                        data.drinks[0].strMeasure10, data.drinks[0].strMeasure11, data.drinks[0].strMeasure12,
                        data.drinks[0].strMeasure13, data.drinks[0].strMeasure14, data.drinks[0].strMeasure15]

let i;
let j;

for (i = 0; i < AllIngredients.length; i++) {
 if (ingredientsRequired.innerHTML == null) {
     return ingredientsRequired.innerHTML = "";
 }  else {
    ingredientsRequired.innerHTML = AllIngredients.join("<br>");
 }
}

for (j = 0; j < AllMeasurements.length; j++) {
 if (measurementsRequired.innerHTML == null) {
     return measurementsRequired.innerHTML = "".length < 1;
 }  else {
    measurementsRequired.innerHTML = AllMeasurements.join("<br>");
 }
}

})} 

randomDrinkButton.addEventListener('click', randomDrink)





/* -- jQuery here based on lesson 'The GitHub API > Making Promises' */ 

function cocktailInformationHTML(cocktail) {

let i;

for (i = 0; i < AllIngredients.length; i++) {
 if (cocktail == null) {
     return $('#cocktail-search-result').html("")
    `<img src="${cocktail.drinks[0].strDrinkThumb}/preview"></img>
    <div><h4>${cocktail.drinks[0].strDrink}</h4><p>${cocktail.drinks[0].strInstructions}</p></div>`;
 }  else {
    return $('#cocktail-search-result').html(`AllIngredients.join("<br>"))
    <img src="${cocktail.drinks[0].strDrinkThumb}/preview"></img>
    <div><h4>${cocktail.drinks[0].strDrink}</h4><p>${cocktail.drinks[0].strInstructions}</p></div>`);
 } 
 }
}


function fetchCocktailInformation(event) {

    $("#cocktailData").html("");
    $("#no-cocktail-search-entered").html("");


    var cocktailSearchEntry = $('#cocktailData').val();
    if (!cocktailSearchEntry) {
        $('#no-cocktail-search-entered').html(`<p class="no-search-text">If you're not sure what to search for - check out the random drink generator below</p>`)
        $("#cocktail-search-result").html("")
        return;
    }

     $.when($.getJSON(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailSearchEntry}`))
     .then(
        function(response) {
        var cocktails = response;
            $("#cocktail-search-result").html(cocktailInformationHTML(cocktails)); 
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#cocktail-search-result").html(
                    `<h2>No info found for ${cocktailSearchEntry}</h2>`);
            } else {
                console.log(errorResponse);
                $("#cocktail-search-result").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}
