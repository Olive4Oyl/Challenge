$(function() {

	newPeople();
	showPeople();

});

function newPeople() {

	if ($('.people.index').length){

		$.ajax({
			url: "/people",
			method: "GET",
			dataType: "json",
		}).done(function(response) {
			response.forEach(function(people_attr) {
				var person = new Person(people_attr)
				var html = person.toHTML()
				$('.summary').append(html);
			})
		})
	}
}

function Person(attr) {
  this.id = attr.id;
  this.name = attr.name;
  this.favoriteCity = attr.favoriteCity;
}

Person.prototype.toHTML = function(){
  var id = this.id
  var Edit = '<a class="show-link" href="people/' + id + "/edit" + '">' +  "Edit" + "</a><br>"
  var Profile = '<a class="show-link" href="people/' + id + '">' +  "Profile" + "</a><br>"

  return [
   "<br><strong>",
     "Name: " + this.name,
   "</strong></br>", 
   "<strong>",
     "Favorite City: " + this.favoriteCity,
	"<br>" + Edit + Profile
  ].join("")
}

function showPeople(){
	if($('.people.show').length) {
		$.ajax({
			url: this.location.pathname,
			method: "GET",
			dataType: "json",
		}).done(function(response){
			var string = "<h3>" + "Name: " + response.name + "<br>" + "Favorite City: " + response.favoriteCity + "</h3>" 
			$('.summary').prepend(string)
		});
	}
}



