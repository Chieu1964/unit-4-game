


// jquery to wrap everything

$(document).ready(function () {

    // Before starting game

    var crystalValue1;
    var crystalValue2;
    var crystalValue3;
    var crystalValue4;
    var randomNumber;
    var totalScore;
    var wins = 0;
    var losses = 0;

    //  Create random number and random values for each crystal

    function newNumbers() {
        totalScore = 0;
        randomNumber = Math.floor((Math.random() * 100) + 19);
        crystalValue1 = Math.floor((Math.random() * 12) + 1);
        crystalValue2 = Math.floor((Math.random() * 12) + 1);
        crystalValue3 = Math.floor((Math.random() * 12) + 1);
        crystalValue4 = Math.floor((Math.random() * 12) + 1);
    };


    // New game || Reset game => need to ask TA or instructructor for more understanding about "data-"

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


    // Displaying results

    function youWin() {
        var winer = ["You win!", "You rock!", "You did it!", "Way to go!", "Super job!", "Thumbs up!", "Way cool!", "Yea!", "Super work!", "You the MPV!"];
        winGame = winer[Math.floor(Math.random() * winer.length)];

        // var winImage = "assets/images/smiley-1.png";
        // $("#winImage").attr("src",winImage);
        // setTimeout(winImage, 4000);

        $("#winOrLose").text(winGame);
        wins++;
        $("#wins").text(wins);
        
        
    }

    function youLose() {

        var loser = ["You lose!", "Keep calm because you lost the game!", "You just lost! Why so serious?", "Oopsie Whoopsie! You just lost!", "Bad new! You lost!", "Ha! Sucker!", "Better luck next time!"];
        loseGame = loser[Math.floor(Math.random() * loser.length)];

        $("#winOrLose").text(loseGame);
        losses++;
        $("#losses").text(losses);

    }

    newGame();

    // CLICK on a crystal image

    $(".crystalimg").on("click", function () {

        if (totalScore >= randomNumber) {
            return;
        }

        var crystalValue = $(this).attr("data-crystalvalue"); // need more understanding about "$(this)"
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;

        $("#totalScore").text(totalScore);

        if (totalScore === randomNumber) {
            youWin();
            var source = "assets/audio/Horse-whinny.mp3"
            var audio = document.createElement("audio");
            //
            audio.autoplay = true;
            //
            audio.load()
            audio.addEventListener("load", function () {
                audio.play();
            }, true);
            audio.src = source;

            setTimeout(newGame, 4000);

        } else if (totalScore > randomNumber) {
            youLose();

            var source = "assets/audio/Cat-meow-noise.mp3"
            var audio = document.createElement("audio");
            //
            audio.autoplay = true;
            //
            audio.load()
            audio.addEventListener("load", function () {
                audio.play();
            }, true);
            audio.src = source;

            setTimeout(newGame, 4000);

        }


    });

});




