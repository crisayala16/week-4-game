$(document).ready(function(){
	var randomNumberOutput = $("#random-number-output");
	var winOutput = $("#win-output");
	var lossOutput = $("#loss-output");
	var userScoreOutput = $("#user-score-output");
	var userScore = 0;

	var randomNumber = function(){
		return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	}

	var randomCrystalNumber = function(){
		return Math.floor(Math.random() * 12) + 1;
	}

	var crystal = function(){
		this.value = randomCrystalNumber();
	}

	crystal1 = new crystal;
	crystal2 = new crystal;
	crystal3 = new crystal;
	crystal4 = new crystal;

	function addValue(crys){
		userScore += crys.value;
		userScoreOutput.text(userScore);
	}

	// $("#crystal-1").on("click", addValue(crystal1));

	$("#crystal-1").on("click", function(){
		userScore += crystal1.value;
		userScoreOutput.text(userScore);
	});


	randomNumberOutput.html(randomNumber);
})