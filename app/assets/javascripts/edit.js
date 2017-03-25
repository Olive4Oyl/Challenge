$(function() {
	if ($('.people.edit').length) {

		backButton();
	}

});

function backButton(){
	$(".backButton").on("click", function(){
		history.go(-1);
	});
}