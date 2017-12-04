


listarPokemones=function(url){
	$.getJSON(url, function( data ) {
		var items = [];
		for (var i=0;i<data.results.length;i++) {
			items.push( "<li id='"+i+"'><a href='#' onclick=mostrarPokemon('"+data.results[i].url+"')>" +data.results[i].name+ "</a></li>" );
		}

		$(".my-new-list").remove();
		$("button").remove();

		$( "<ul/>", {
			"class": "my-new-list",
			html: items.join( "" )
		}).appendTo(".nombres");

		$(".nombres").append("<button onclick=listarPokemones('"+data.next+"')>Next</button>");
		$(".nombres").append("<button onclick=listarPokemones('"+data.back+"')>back</button>");
	});
};

mostrarPokemon=function(url){
	$.getJSON(url, function(data) {
		$("p").remove();
		$("img").remove();
		$(".descripcion").append("<img src='"+data.sprites.front_default+"'/>");
		$(".descripcion").append("<p>Nombre: "+data.name+"<br>Peso: "+data.weight+"<br>Altura: "+data.height+"</p>");
	});
};

listarPokemones("https://pokeapi.co/api/v2/pokemon/");