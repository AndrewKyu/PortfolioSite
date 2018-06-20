$(document).ready(function(){
	$("#submit_message").click(function(){

		var messageObject = {};
		messageObject["Name"] = $("#fullName").val();
		messageObject["Email"] = $("#emailAddress").val();
		messageObject["Message"] = $("#messageSent").val();

		console.log(messageObject);

	})
})