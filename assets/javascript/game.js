$(document).ready(function(){
	var randomNumberOutput = $("#random-number-output");
	var winOutput = $("#win-output");
	var lossOutput = $("#loss-output");
	var userScoreOutput = $("#user-score-output");
	var userScore = 0;
	var win = 0;
	var loss = 0;
	var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	

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
	function reset(){
		crystal1 = new crystal;
		crystal2 = new crystal;
		crystal3 = new crystal;
		crystal4 = new crystal;
		randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		randomNumberOutput.html(randomNumber);
		userScore = 0;
		userScoreOutput.text(userScore);
	}
	function checkScore(){
		if(userScore === randomNumber){
			win++;
			winOutput.text(win);
			reset();
		}
		if(userScore > randomNumber){
			loss++;
			lossOutput.text(loss);
			reset();
		}
	}

	// $("#crystal-1").on("click", addValue(crystal1));

	$("#crystal-1").on("click", function(){
		userScore += crystal1.value;
		userScoreOutput.text(userScore);
		checkScore();
	});
	$("#crystal-2").on("click", function(){
		userScore += crystal2.value;
		userScoreOutput.text(userScore);
		checkScore();
	});
	$("#crystal-3").on("click", function(){
		userScore += crystal3.value;
		userScoreOutput.text(userScore);
		checkScore();
	});
	$("#crystal-4").on("click", function(){
		userScore += crystal4.value;
		userScoreOutput.text(userScore);
		checkScore();
	});
	randomNumberOutput.html(randomNumber);
})