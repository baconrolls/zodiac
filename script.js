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

  // Messages for Cancer
  [
"Your nurturing nature makes you a source of comfort and support for others.",
"Trust your intuition when making decisions; it rarely leads you astray.",
"Create a harmonious home environment where you can recharge and heal.",
"Your artistic talents shine; express yourself through creative endeavors.",
"Cherish your close relationships; your emotional connections are precious.",
    // Add more messages for Cancer as needed
  ],

    // Messages for Leo
  [
"Your charisma and confidence light up any room you enter.",
"Embrace your individuality and let your unique talents shine.",
"Your generosity knows no bounds; share your blessings with others.",
"Your ambition and determination will lead you to achieve greatness.",
"Surround yourself with those who appreciate your radiant spirit.",
    // Add more messages for Leo as needed
  ],

  // Messages for Virgo
  [
"Your attention to detail and analytical mind make you an excellent problem solver.",
"Embrace your desire for order and organization; it brings a sense of calm.",
"Your thoughtful nature makes you a reliable and supportive friend.",
"Trust your practical instincts when making decisions; they serve you well.",
"Focus on your well-being and practice self-care; it rejuvenates your spirit.",
    // Add more messages for Virgo as needed
  ],

    // Messages for Libra
  [
"Your diplomatic skills make you an excellent mediator and peacemaker.",
"Embrace your sense of harmony and seek balance in all aspects of life.",
"Your charm and grace create a positive and welcoming atmosphere.",
"Cultivate meaningful connections by being attentive to others' needs.",
"Trust your intuition when it comes to making fair and just decisions.",
    // Add more messages for Libra as needed
  ],

  // Messages for Scorpio
  [
"Your intense passion and determination drive you towards success.",
"Embrace your emotional depth and use it as a source of strength.",
"Your intuitive nature allows you to read situations and people accurately.",
"Cultivate trust in your relationships; your loyalty is unwavering.",
"Embrace transformation; it leads to profound personal growth.",
    // Add more messages for Scorpio as needed
  ],

    // Messages for Sagittarius
  [
"Your adventurous spirit leads you to exciting journeys and experiences.",
"Embrace your optimistic outlook; it attracts positive opportunities.",
"Your love for learning drives you to expand your knowledge and horizons.",
"Embrace your candid nature; it makes you a refreshing and honest friend.",
"Trust your intuition when seeking new adventures and opportunities.",
    // Add more messages for Sagittarius as needed
  ],

  // Messages for Capricorn
  [
"Your determination and hard work lead you to achieve your ambitions.",
"Embrace your responsible nature; you can be relied upon by others.",
"Your patience and discipline bring success in your endeavors.",
"Cultivate strong foundations in your relationships; they stand the test of time.",
"Trust your ability to plan and strategize; it leads to steady progress.",
    // Add more messages for Capricorn as needed
  ],

    // Messages for Aquarius
  [
"Your innovative thinking leads you to unique and groundbreaking ideas.",
"Embrace your humanitarian spirit; make a positive impact on the world.",
"Your open-mindedness allows you to embrace diversity and new perspectives.",
"Cultivate meaningful friendships that share your values and passions.",
"Trust your intuition when advocating for social change and progress.",
    // Add more messages for Aquarius as needed
  ],

  // Messages for Pisces
  [
"Your compassionate nature makes you a source of comfort for others.",
"Embrace your artistic talents and express yourself through creativity.",
"Your intuition guides you in making heartfelt and empathetic decisions.",
"Cultivate a sense of inner peace by spending time in introspection.",
"Trust your dreams and imagination; they hold the key to your aspirations.",
    // Add more messages for Pisces as needed
  ],
    
];

  function showCard(cardNumber) {
  const cards = document.querySelectorAll(".card");
  const resultContainer = document.getElementById("resultContainer");
  const resultMessage = document.getElementById("resultMessage");

  // Hide all cards
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Show the selected card
  const selectedCard = document.querySelector(`.card:nth-child(${cardNumber})`);
  selectedCard.style.display = "block";

  // Show a random message on the selected card
  const randomMessages = messages[cardNumber - 1];
  const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
  resultMessage.textContent = randomMessage;

  // Show the result container
  resultContainer.style.display = "block";
}

function backToMain() {
  const cards = document.querySelectorAll(".card");
  const resultContainer = document.getElementById("resultContainer");

  // Hide the result container
  resultContainer.style.display = "none";

  // Show all cards again
  cards.forEach((card) => {
    card.style.display = "block";
  });
}
