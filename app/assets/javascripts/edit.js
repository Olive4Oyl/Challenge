$(function() {
	if ($('.people.edit').length) {

		backButton();
	}

});

function backButton(){
	$(".backButton").on("click", ()=>{
		window.location.href='/people';
	})
}