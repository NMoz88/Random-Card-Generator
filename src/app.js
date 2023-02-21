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

  let selectpalo = palo[Math.floor(Math.random() * palo.length)];
  let selectnumber = number[Math.floor(Math.random() * number.length)];

  console.log(selectnumber + selectpalo);

  let sup = document.querySelector(".palo-sup");
  sup.innerHTML = selectpalo;

  let center = document.querySelector(".number");
  center.innerHTML = selectnumber;

  let inf = document.querySelector(".palo-inf");
  inf.innerHTML = selectpalo;

  if (selectpalo == "♦" || selectpalo == "♥") {
    document.querySelector(".palo-sup").style.color = "red";
    document.querySelector(".palo-inf").style.color = "red";
  } else {
    document.querySelector(".palo-sup").style.color = "black";
    document.querySelector(".palo-inf").style.color = "black";
  }
};
