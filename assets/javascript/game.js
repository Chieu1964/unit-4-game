// jquery to wrap everything

$(document).ready(function() {

    // Before starting game/reset game
    var crystalValue1;
    var crystalValue2;
    var crystalValue3;
    var crystalValue4;
    var randomNumber; 
    var totalScore;
    var wins = 0;
    var losses = 0;

    //  Create {random number and values for each crystal

    function newNumbers() {
        totalScore = 0;
        randomNumber = Math.floor((Math.random() * 100) + 19);
        crystalValue1 = Math.floor((Math.random() * 12) + 1);
        crystalValue2 = Math.floor((Math.random() * 12) + 1);
        crystalValue3 = Math.floor((Math.random() * 12) + 1);
        crystalValue4 = Math.floor((Math.random() * 12) + 1);
    };

    
    // New game - need to ask TA or instructructor for more understanding about "data-"

    function newGame() {
        newNumbers();
        totalScore = 0;
        $("#randomNumber").text(randomNumber);
        $("#totalScore").text(totalScore);
        $("#crystal1").attr("data-crystalvalue", crystalValue1);
        $("#crystal2").attr("data-crystalvalue", crystalValue2);
        $("#crystal3").attr("data-crystalvalue", crystalValue3);
        $("#crystal4").attr("data-crystalvalue", crystalValue4);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#wins").text(wins);
        $("#winOrLose").text("");
    };
// newGame();
 
// Displaying results

    function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
        $("#wins").text(wins);
        
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
        $("#losses").text(losses);
       
    }
    
    newGame();

    // CLICK on a crystal image

    $(".crystalimg").on("click", function() {
       
        if (totalScore >= randomNumber) {
			return;
        }
       
        var crystalValue = $(this).attr("data-crystalvalue"); // need more understanding about "$(this)"
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        $("#totalScore").text(totalScore);
        
        if (totalScore === randomNumber) {
            youWin();
           
        } else if (totalScore > randomNumber) {
            youLose();
           
        }

    });

    $(".btn").on("click", function(){
        newGame();

    });


});


