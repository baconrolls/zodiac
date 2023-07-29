// Array of random messages for each card
const messages = [
  // Messages for Aries
  [
"Embrace your adventurous spirit and take bold steps towards your dreams.",
"Channel your passion and determination into achieving your goals.",
"Your natural leadership qualities will inspire others to follow your lead.",
"Seek new challenges and opportunities to showcase your competitive edge.",
"Trust your intuition; it will guide you on the right path.",
    // Add more messages for Aries as needed
  ],

  // Messages for Taurus
  [
"Your practicality and perseverance will help you overcome any obstacles.",
"Take time to indulge in self-care and enjoy life's simple pleasures.",
"Embrace change with an open mind, as it brings growth and new opportunities.",
"Your loyalty and reliability make you a cherished friend and partner.",
"Trust your instincts when making financial decisions; you have a good sense of value.",
    // Add more messages for Taurus as needed
  ],
    
// Messages for Gemini
  [
"Your adaptability allows you to excel in various situations and social circles.",
"Embrace your curiosity and keep exploring diverse interests and hobbies.",
"Your excellent communication skills make you a captivating storyteller.",
"Cultivate deep connections by being a good listener and empathetic friend.",
"Keep your mind open to new perspectives; it enriches your intellectual growth.",
    // Add more messages for Gemini as needed
  ],

  // Messages for Card 4
  [
    "Message 1 for Card 2.",
    "Message 2 for Card 2.",
    "Message 3 for Card 2.",
    // Add more messages for Card 2 as needed
  ],

    // Messages for Card 5
  [
    "Message 1 for Card 1.",
    "Message 2 for Card 1.",
    "Message 3 for Card 1.",
    // Add more messages for Card 1 as needed
  ],

  // Messages for Card 6
  [
    "Message 1 for Card 2.",
    "Message 2 for Card 2.",
    "Message 3 for Card 2.",
    // Add more messages for Card 2 as needed
  ],

    // Messages for Card 7
  [
    "Message 1 for Card 1.",
    "Message 2 for Card 1.",
    "Message 3 for Card 1.",
    // Add more messages for Card 1 as needed
  ],

  // Messages for Card 82
  [
    "Message 1 for Card 2.",
    "Message 2 for Card 2.",
    "Message 3 for Card 2.",
    // Add more messages for Card 2 as needed
  ],

    // Messages for Card 9
  [
    "Message 1 for Card 1.",
    "Message 2 for Card 1.",
    "Message 3 for Card 1.",
    // Add more messages for Card 1 as needed
  ],

  // Messages for Card 10
  [
    "Message 1 for Card 2.",
    "Message 2 for Card 2.",
    "Message 3 for Card 2.",
    // Add more messages for Card 2 as needed
  ],

    // Messages for Card 11
  [
    "Message 1 for Card 1.",
    "Message 2 for Card 1.",
    "Message 3 for Card 1.",
    // Add more messages for Card 1 as needed
  ],

  // Messages for Card 12
  [
    "Message 1 for Card 2.",
    "Message 2 for Card 2.",
    "Message 3 for Card 2.",
    // Add more messages for Card 2 as needed
  ],
    
];

function showCard(cardNumber) {
  const resultContainer = document.getElementById("resultContainer");
  const resultMessage = document.getElementById("resultMessage");

  // Show a random message on the selected card
  const randomMessages = messages[cardNumber - 1];
  const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
  resultMessage.textContent = randomMessage;

  // Show the result container
  resultContainer.style.display = "block";
}

function backToMain() {
  // Redirect to the index page or your main page URL
  // Replace "index.html" with your main page URL if needed
  window.location.href = "index.html";
}
