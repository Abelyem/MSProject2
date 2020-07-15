
/* -- jQuery here based on lesson 'The GitHub API > Making Promises' */ 

function cocktailInformationHTML(cocktail) {

    return `<img class="searched-cocktail-image" src="${cocktail.drinks[0].strDrinkThumb}/preview">
        <div><h4>${cocktail.drinks[0].strDrink}</h4><p>${cocktail.drinks[0].strInstructions}</p></div>`; 
}

function fetchCocktailInformation(event) {

    $("#cocktailData").html("");
    $("#no-cocktail-search-entered").html("");


    var cocktailSearchEntry = $('#cocktailData').val();
    if (!cocktailSearchEntry) {
        $('#no-cocktail-search-entered').html(`
                
    <div class="cocktails-to-try">
      <a href="https://www.bbcgoodfood.com/recipes/cosmopolitan" target="_blank" class="cosmo"><img src="assets/images/Cosmo.png" alt="Cosmo cocktail"></a>
      <a href="https://www.bbcgoodfood.com/recipes/mojito" target="_blank" class="mojito"><img src="assets/images/Mojito.png" alt="Mojito cocktail"></a>
      <a href="https://www.bbcgoodfood.com/recipes/mai-tai" target="_blank" class="mai-tai"><img src="assets/images/Mai_Tai.png" alt="Mai tai cocktail"></a>
      <h6>Popular cocktails to try - click on the image to see what you'll need</h6>
    </div>

        `)
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
