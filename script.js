var queryURL = "https://www.goodreads.com/search.xml?key=aggLUnmEp7NYAibUiLkg&q=Ender%27s+Game";

$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);

});
