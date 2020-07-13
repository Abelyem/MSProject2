
/* -- jQuery here based on lesson 'The GitHub API > Making Promises' */ 

function cocktailInformationHTML(cocktail) {
return `<img src="${cocktail.drinks[0].strDrinkThumb}/preview"></img>
        <div><h4>${cocktail.drinks[0].strDrink}</h4><p>${cocktail.drinks[0].strInstructions}</p></div>`;
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
