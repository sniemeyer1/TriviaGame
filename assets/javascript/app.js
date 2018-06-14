

//still have my work cut out for me
//but I will update soon!!
var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();




$(document).ready(function() {
	var index = 0;
	var timer = {
		time : 5,
		reset: function() {
			this.time = 5;
			$('.timer').html('<p>' + this.time + ' seconds remaining</p>');
		},
		start: function() {
			counter = setInterval(timer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				timer.time--;
				console.log(timer.time);
//				
			if (timer.time >= 0) {
				$('.timer').html('<p>' + timer.time + ' seconds remaining</p>');
			}
			else {
				index++;
				answerWrong();
				timer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};





var questions = [
      {
	    question: "What year what Kansas City founded?",
	    choices: ["1863", "1838", "1859"],
	    correctAnswer: "1838",
      }, 
      
      {
	    question: "What is the median age of a Kansas Citian?",
	    choices: ["29", "33", "35"],
	    correctAnswer: "35",
      }, 
      
      {
	    question: "Which of these neighborhoods is furtherst North?",
	    choices: ["Hyde Park", "Coleman Highlands", "Longfellow"],
	    correctAnswer: "Longfellow",
      }, 
      
      {
	    question: "Which of these is NOT a nickname of Kansas City?",
	    choices: ["Paris of the Plains", "City of Fountains", "Gateway to the West"],
	    correctAnswer: "Gateway to the West",
      }, 
      
      {
	    question: "Which of these was NOT an early name suggestion for Kansas City?",
	    choices: ["Possom Trot", "Rabbitville", "Robin's Nest"],
	    correctAnswer: "Robin's Nest",
	  }, ];
     
      var gameArea = $("#gameHere");

      $(document).on('click', '#startGame', function(){
        game.start();
     });
      
     
    

      $(document).ready(function() {

        var questionCounter = 0;
        var timer = 5;
        var score = 0;
        var incorrectGuesses = 0;

      for(var i=0; i< questions.length; i++){

      }
    })
