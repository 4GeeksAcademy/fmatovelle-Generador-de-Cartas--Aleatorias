/* eslint-disable */
import "bootstrap";
import "./style.css";

// app.js
function generateRandomCard() {
  const suits = ["spade", "club", "heart", "diamond"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomSuit = Math.floor(Math.random() * suits.length);
  let randomValue = Math.floor(Math.random() * values.length);

  let selectedSuit = suits[randomSuit];
  let selectedValue = values[randomValue];

  let card = document.getElementById("card");

  card.classList.remove("spade", "club", "heart", "diamond");
  card.classList.add(selectedSuit);

  card.innerHTML = `
      <div class="top">${selectedValue}</div>
      <div class="symbol">${getSuitSymbol(selectedSuit)}</div>
      <div class="bottom">${selectedValue}</div>
  `;
}

function getSuitSymbol(suit) {
  if (suit === "spade") return "♠";
  if (suit === "club") return "♣";
  if (suit === "heart") return "♥";
  if (suit === "diamond") return "♦";
}

// Asegúrate de que estás llamando a la función después de que el DOM se haya cargado
window.onload = generateRandomCard; // O simplemente usa `onload` en el HTML
