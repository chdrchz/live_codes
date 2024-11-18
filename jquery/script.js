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

  let currentQuestionIndex = 0; // Start with the first question
  let score = 0; // Initialize score variable

  // Function to render the current question
  function renderQuestion(index) {
    // Clear the container
    $(".questions-container").empty();

    // Create the question element
    const questionElement = $("<h2>").text(questions[index]);
    $(".questions-container").append(questionElement);

    // Create the answer buttons
    answers[index].forEach((answer) => {
        // Create a div to hold the answer buttons
        const answersDiv = $("<div>").addClass("answer-buttons-container");
      
        // Create the answer button element
        const answerButton = $("<button>")
          .addClass("answer-button")
          .text(answer)
          .click(() => {
            checkAnswer(answer, index); // Check the answer when clicked
          });
      
        // Append the answer button to the div
        answersDiv.append(answerButton);
      
        // Append the answers div to the .questions-container
        $(".questions-container").append(answersDiv);
      });
  }

  // Function to check the answer and give feedback
  function checkAnswer(answer, index) {
    // Find the button that was clicked
    const clickedButton = $(".answer-button").filter(function () {
      return $(this).text() === answer;
    });
  
    // Check if the answer is correct
    if (answer === correctAnswers[index]) {
      clickedButton.css("background-color", "green"); // Change button to green if correct
      $(".questions-container").append("<p class='feedback-correct'>Correct!</p>");
      score++; // Increment the score for a correct answer
    } else {
      clickedButton.css("background-color", "red"); // Change button to red if incorrect
      $(".questions-container").append("<p class='feedback-incorrect'>Incorrect. The correct answer was: " + correctAnswers[index] + "</p>");
    }
  
    // After feedback, move to the next question
    setTimeout(nextQuestion, 1000); // Wait 1 second before showing the next question
  }

  // Function to move to the next question
  function nextQuestion() {
    currentQuestionIndex++; // Increment the index

    if (currentQuestionIndex < questions.length) {
      renderQuestion(currentQuestionIndex); // Render the next question
    } else {
      // No more questions; display a completion message with the score
      $(".questions-container").html(`
        <h2>You have completed the quiz!</h2>
        <p>Your score is: ${score} out of ${questions.length}</p>
      `);
    }
  }

  // Render the first question on page load
  renderQuestion(currentQuestionIndex);
});
