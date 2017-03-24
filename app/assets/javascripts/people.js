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
				$('.index_body').append(html);
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
     this.name,
   "</strong></br>", 
   "<strong>",
     this.favoriteCity,
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
			var string = "<h2>" + response.name + "<br>" + response.favoriteCity + "</h2>" 
			$('.show_container').prepend(string)
		});
	}
}



