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
    
    // 2b: Create and display the question text
    
    // 2c: Create answer buttons dynamically
    
    // Create a container for each set of answer buttons
      
    // Create clickable buttons for each answer

    // When clicked, check if the answer is correct
          
    // Add the button to its container and to the main container
  }


  // STEP 3: Answer Checking Function
  // Evaluates the selected answer and provides feedback
  function checkAnswer(answer, index) {
    // 3a: Find the button that was clicked
  
    // 3b: Determine if the answer is correct

    // Correct answer: green button, increment score
    
    // Incorrect answer: red button, show correct answer

    // 3c: Move to next question after a short delay

  }


  // STEP 4: Next Question Management Function
  // Handles progression through the quiz
  function nextQuestion() {
    // 4a: Increment the question index

    // 4b: Check if there are more questions
    
      // If yes, render the next question
      
      // 4c: If no more questions, show final score
  
  }

  // STEP 5: Start the Quiz
  // Render the first question when the page loads
  
});