// Get the chat window and input field
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// Add an event listener to the send button
sendBtn.addEventListener('click', () => {
  // Get the user's message
  const userMessage = chatInput.value;

  // Create a new chat user message element
  const chatUserMessage = document.createElement('div');
  chatUserMessage.classList.add('chat-user-message');
  chatUserMessage.innerHTML = `<p>${userMessage}</p>`;

  // Add the chat user message to the chat window
  chatWindow.appendChild(chatUserMessage);

  // Clear the input field
  chatInput.value = '';

  // Create a new chat bot message element
  const chatBotMessage = document.createElement('div');
  chatBotMessage.classList.add('chat-bot-message');

  // Determine the chat bot's response based on the user's message
  let response = '';
  if (userMessage.toLowerCase().includes('hello')) {
    response = "Hi! How are you feeling today?";
  } else if (userMessage.toLowerCase().includes('anxiety')) {
    response = "It's okay to feel anxious sometimes. Have you tried some relaxation techniques? Deep breathing, progressive muscle relaxation, or mindfulness meditation might help.";
  } else if (userMessage.toLowerCase().includes('depression')) {
    response = "I'm so sorry to hear that you're struggling with depression. Remember that you're not alone, and there is help available. Would you like to talk about what's been going on?";
  } else if (userMessage.toLowerCase().includes('stress')) {
    response = "Stress can be overwhelming. Remember to take breaks and breathe. What's been causing you stress lately?";
  } else if (userMessage.toLowerCase().includes('help')) {
    response = "If you're seeking help, I recommend talking to a licensed professional. They can provide you with personalized support and guidance.";
  } else if (userMessage.toLowerCase().includes('thanks')) {
    response = "You're welcome! I'm here to help. Is there anything else you'd like to talk about?";
  } else {
    response = "I'm here for you. How can I assist further?";
  }

  // Add the chat bot's response to the chat bot message element
  chatBotMessage.innerHTML = `<p>${response}</p>`;

  // Add the chat bot message to the chat window
  chatWindow.appendChild(chatBotMessage);

  // Scroll the chat window to the bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;
});

// Get the score button element
const scoreBtn = document.getElementById('score-btn');

// Add an event listener to the score button
scoreBtn.addEventListener('click', calculateScore);

// Function to calculate the score
function calculateScore() {
    // Get the user's answers from the form
    const answers = [];
    const formElements = document.getElementById('anxietyQuiz').elements;
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'radio' && formElements[i].checked) {
            answers.push(formElements[i].value);
        }
    }

    // Calculate the score based on the answers
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        score += parseInt(answers[i]);
    }

    // Display the score and feedback
    const scoreElement = document.getElementById('score');
    const feedbackElement = document.getElementById('feedback');
    scoreElement.textContent = `Your score is: ${score}`;
    feedbackElement.textContent = getFeedback(score);
}

// Function to get feedback based on the score
function getFeedback(score) {
    if (score <= 10) {
        return 'You have low anxiety levels. Keep up the good work!';
    } else if (score <= 20) {
        return 'You have moderate anxiety levels. Consider seeking help if it affects your daily life.';
    } else {
        return 'You have high anxiety levels. Seek professional help to manage your anxiety.';
    }
}
