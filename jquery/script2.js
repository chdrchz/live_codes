$(document).ready(() => {
    console.log("DOM is fully loaded and ready!");
  
    const questions = [
      "Who dies in the beginning of Stardew Valley?",
      "Which of these are on the map?",
      "Who lives in the tower in the Forest?",
      "What appears periodically in the Forest?",
      "What is the first festival of the year?",
      "Which of these cannot be given as a gift?",
      "Which of these geode minerals does not exist in Stardew Valley?",
      "Which of these weapons is not from Stardew Valley?",
      "Which of these is not a fishing tackle?",
      "What is a junimo?",
    ];
  
    const answers = [
      ["Grandfather", "Grandmother", "Great Uncle", "Great Aunt"],
      ["Marina's Ranch", "Petrified Forest", "Museum", "Jolly Mart"],
      ["The Dwarf", "The Wizard", "The Mouse", "Krobus"],
      ["An umbrella", "A giant", "A travelling cart", "A rainbow tree"],
      [
        "The Egg Festival",
        "The Spooky Pumpkin Festival",
        "Winter Wonderland",
        "The Fish Festival",
      ],
      ["Pizza", "Purple mushroom", "Rainbow shell", "Ring"],
      ["Calcite", "Sandstone", "Thunder Egg", "Unicorn's Eye"],
      ["Pirate's Sword", "Zantetsuken", "Insect Head", "Claymore"],
      ["Normal Bobber", "Barbed Hook", "Treasure Hunter", "Spinner"],
      ["A forest spirit", "A stone golem", "A type of fish", "A geode mineral"],
    ];
  
    const correctAnswers = [
      "Grandfather",
      "Museum",
      "The Wizard",
      "A travelling cart",
      "The Egg Festival",
      "Ring",
      "Unicorn's Eye",
      "Zantetsuken",
      "Normal Bobber",
      "A forest spirit",
    ];
  
      // 1b: Initialize Quiz State Variables
    // These track the current progress of the quiz
    let currentQuestionIndex = 0; // Keeps track of which question we're on
    let score = 0; // Tracks the user's correct answers
  
    // STEP 2: Render Question Function
    // This function displays the current question and its answer options
    function renderQuestion(index) {
      // 2a: Clear previous question
      $(".questions-container").empty();
  
      // 2b: Create and display the question text
      const questionElement = $("<h2>").text(questions[index]);
      $(".questions-container").append(questionElement);
  
      // 2c: Create answer buttons dynamically
      answers[index].forEach((answer) => {
        // Create a container for each set of answer buttons
        const answersDiv = $("<div>").addClass("answer-buttons-container");
        
        // Create clickable buttons for each answer
        const answerButton = $("<button>")
          .addClass("answer-button")
          .text(answer)
          .click(() => {
            // When clicked, check if the answer is correct
            checkAnswer(answer, index);
          });
        
        // Add the button to its container and to the main container
        answersDiv.append(answerButton);
        $(".questions-container").append(answersDiv);
      });
    }
  
    // STEP 3: Answer Checking Function
    // Evaluates the selected answer and provides feedback
    function checkAnswer(answer, index) {
      // 3a: Find the button that was clicked
      const clickedButton = $(".answer-button").filter(function () {
        return $(this).text() === answer;
      });
    
      // 3b: Determine if the answer is correct
      if (answer === correctAnswers[index]) {
        // Correct answer: green button, increment score
        clickedButton.css("background-color", "green");
        $(".questions-container").append("<p class='feedback-correct'>Correct!</p>");
        score++;
      } else {
        // Incorrect answer: red button, show correct answer
        clickedButton.css("background-color", "red");
        $(".questions-container").append("<p class='feedback-incorrect'>Incorrect. The correct answer was: " + correctAnswers[index] + "</p>");
      }
    
      // 3c: Move to next question after a short delay
      setTimeout(nextQuestion, 1000);
    }
  
    // STEP 4: Next Question Management Function
    // Handles progression through the quiz
    function nextQuestion() {
      // 4a: Increment the question index
      currentQuestionIndex++;
  
      // 4b: Check if there are more questions
      if (currentQuestionIndex < questions.length) {
        // If yes, render the next question
        renderQuestion(currentQuestionIndex);
      } else {
        // 4c: If no more questions, show final score
        $(".questions-container").html(`
          <h2>You have completed the quiz!</h2>
          <p class="completed">Your score is: ${score} out of ${questions.length}</p>
        `);
      }
    }
  
    // STEP 5: Start the Quiz
    // Render the first question when the page loads
    renderQuestion(currentQuestionIndex);
  });