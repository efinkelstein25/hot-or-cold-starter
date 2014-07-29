
$(document).ready(function(){
		
    var random;

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
      HotOrCold(random, guessValue);
    });

});


/*starts a new game*/
function newGame(){
/*have other stuff here*/

var randomNum = randomize();
console.log(randomNum);

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

if (input >= lowestHot && input <= highestHot)
{
  console.log("It's hot!");
}
else{
  console.log("It's cold!");
}

}

