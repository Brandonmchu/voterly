$(document).ready(function (){

	//This is the event that the user submits
	$( "#mainform" ).submit(function() {

		// $.ajax({
		// 	url: "/submissions",
		// 	type: "POST",
		// 	dataType: 'json',
		// 	data: { submission: { income: 10000 } },
		// 	success: alert("sweet it worked.")
		// })

		//This is where the user inputs are declared as varaibles
		var income = 	document.getElementById('submission_income').value;
		var qOne = 	parseInt($('input[name="submission[ans_one]"]:checked').val());
		var qTwo = 	parseInt($('input[name="submission[ans_two]"]:checked').val());
		var qThree = 	parseInt($('input[name="submission[ans_three]"]:checked').val());

		//This is the formula that takes in the user input and then figures out which candidate
		if ((income*(qOne + qTwo + qThree)) > 500000) {
			$( "#mainform" ).after( "<p>Rob Ford</p>" );
		}
		else {
			$( "#mainform" ).after( "<p>Olivia Chow</p>" );
		}

		alert((income*(qOne + qTwo + qThree)));
	});

});
