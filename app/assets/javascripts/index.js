$(function() {

	newPeople();

});


function newPeople() {

	if ($('.people.index').length){
		$.ajax({
			url: "/people.json",
			method: "GET",
			dataType: "json",
		}).done(function(response) {
			response.forEach(function(people_attr) {
				var person = new Person(people_attr)
				var html = person.toHTML()
				$('#summary').append(html);
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
  var Edit = '<a class="ui button" href="people/' + id + "/edit" + '">' +  "Edit" + "</a><br>" 
  var Profile = '<a class="ui positive button" href="people/' + id + '">' +  "Profile" + "</a><br>"

  return [
  "<br>" + "__________________________________________" + "</br>",
   "<br><strong><h5>",
     "Name: " + this.name + "</h5>",
   "</strong></br>", 
   "<strong><h5>",
    "Favorite City: " + this.favoriteCity + "</h5>",
    Edit + "</br>" + Profile,
  ].join("")
}




