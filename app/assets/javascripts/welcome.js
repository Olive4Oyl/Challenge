$(function() {
	if ($('.welcome.index').length) {

		appButton();
	}

});

function appButton(){
	$(".appButton").on("click", function(){
		location.href = "https://shrouded-shore-47899.herokuapp.com/people";
	});
}

