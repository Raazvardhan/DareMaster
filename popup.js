document.getElementById('dare-button').addEventListener('click', function() {
  const easyDares = [
    "Ask a stranger for the time and strike up a conversation.",
    "Sing a song loudly in a public place.",
    "Give a compliment to at least 3 strangers.",
    "Go to a cafe and introduce yourself to someone new."
  ];

  const hardDares = [
    "Take a selfie with a stranger.",
    "Start a conversation with someone in a queue.",
    "Join a group of people and participate in their conversation.",
    "Make a prank call to a friend and share a funny story.",
    "Dance in public for at least 30 seconds.",
    "Wear something unusual and walk in a crowded place."
  ];

  const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
  const dares = (difficulty === 'easy') ? easyDares : hardDares;

  const randomIndex = Math.floor(Math.random() * dares.length);
  const randomDare = dares[randomIndex];

  document.getElementById('confirm-text').innerText = "Are you ready for a challenge? Accepting this dare will push you out of your comfort zone. If you don't complete it, today might not be as fun!";
  document.getElementById('dare-container').style.display = 'block';
  document.getElementById('dare-text').innerText = randomDare;
});

document.getElementById('accept-dare-button').addEventListener('click', function() {
  document.getElementById('confirm-text').innerText = "Great! Have fun completing your dare!";
  document.getElementById('dare-container').style.display = 'none';
});

document.getElementById('decline-dare-button').addEventListener('click', function() {
  document.getElementById('confirm-text').innerText = "Maybe next time! Remember, challenges help us grow.";
  document.getElementById('dare-container').style.display = 'none';
});
