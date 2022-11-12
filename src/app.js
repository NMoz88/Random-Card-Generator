/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let number = [
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
  let palo = ["♦", "♥", "♠", "♣"];

  let selectpalo = palo[Math.floor(Math.random() * (palo.lenght - 1))];
  let selectnumber = number[Math.floor(Math.random() * (number.length - 1))];

  console.log(selectpalo + selectnumber);

  let cambiopalo = document.querySelector(".palo sup");
  cambiopalo.innerHTML = selectpalo;

  let cambiopalo2 = document.querySelector(".palo inf");
  cambiopalo2.innerHTML = selectpalo;

  let cambionumber = document.querySelector(".number");
  cambionumber.innerHTML = selectnumber;
};
