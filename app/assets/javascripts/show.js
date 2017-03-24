$(function() {
	if ($('.people.show').length) {

		backButton();
		showPeople();
	}

});

function showPeople(){
	$.ajax({
		url: this.location.pathname,
		method: "GET",
		dataType: "json",
	}).done(function(response){
		var string = "<h5>" + "Name: " + response.name + "<br>" + "<br>" + "Favorite City: " + response.favoriteCity + "</h5>" 
		$('.summary').prepend(string)
	});
	
}
