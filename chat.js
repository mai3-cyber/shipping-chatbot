let chat = document.getElementById("chat");
let input = document.getElementById("userInput");

let questions = [
  "Where are you shipping from?",
  "Where are you shipping to?",
  "What is the weight in kg?",
  "Do you want insurance? (yes/no)"
];

let answers = [];
let step = 0;

function next() {
  const userAns = input.value;
  if (!userAns) return;

  chat.innerHTML += `<div class="message user">${userAns}</div>`;
  answers.push(userAns.trim().toLowerCase());
  input.value = "";

  step++;

  if (step < questions.length) {
    chat.innerHTML += `<div class="message bot">🤖 ${questions[step]}</div>`;
  } else {
    let weight = parseFloat(answers[2]);
    let insurance = answers[3] === "yes";

    let cost = calculateCost(weight, insurance);
    chat.innerHTML += `<div class="message bot">💰 Your estimated cost is ₹${cost}</div>`;
    input.disabled = true;
  }

  chat.scrollTop = chat.scrollHeight;
}

function calculateCost(weight, insurance) {
  let base = 300;
  let perKg = 120;
  let insuranceFee = insurance ? 500 : 0;
  return base + (weight * perKg) + insuranceFee;
}
