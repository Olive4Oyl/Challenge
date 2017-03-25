$(function() {
	if ($('.people.edit').length) {

		backButton();
	}

});

function backButton(){
	$(".backButton").on("click", function(){
		location.href = "https://shrouded-shore-47899.herokuapp.com/people";
	});
}