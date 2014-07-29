
$(document).ready(function(){
		
    var random;

    var count = 0;

    random = newGame();

    $(".new").on('click', function(){
     random = newGame();
    });
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



  	$('#guessButton').on('click', function(e){
      e.preventDefault();
      var guessValue = $('#userGuess').val();
      
      /*counting the number of guesses*/
      count++;
      $('#count').text(count);

      /*add guesses to the list*/
      $('#guessList').append("<li>" + guessValue + "</li>");


      /*checking whether guess was hot or cold*/
      HotOrCold(random, guessValue);
    });

});


/*starts a new game*/
function newGame(){
/*have other stuff here*/

var randomNum = randomize();
console.log(randomNum);

$('#guessList').children().remove();

$('#count').text("0");

 $('#feedback').text("Make your Guess!");



/*this isn't working*/
/*$('#userGuess').trigger("reset");*/

return randomNum;


}

/*creates a random number between 1 and 100*/
function randomize(){
	var randomNum = Math.floor((Math.random() * 100) + 1);
	return randomNum;
}

/*takes in user value, sees if it is hot or cold compared to random number*/
function HotOrCold(random, input){

var highestHot, lowestHot;

highestHot = random + 20;
lowestHot = random - 20;

if (input > lowestHot && input < highestHot && input != random)
{
  $('#feedback').text("Your guess is hot!");
}
else if (input == random) {
  $('#feedback').text("You guessed right! The answer is " + random);
}
else {
   $('#feedback').text("Your guess is cold!");
}


}

