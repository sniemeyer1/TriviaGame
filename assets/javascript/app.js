

//still have my work cut out for me
//but I will update soon!!



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
