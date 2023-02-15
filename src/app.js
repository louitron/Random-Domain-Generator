/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const possibilities = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      const combination = `${pronoun[i]} ${adj[j]} ${noun[k]}`;
      possibilities.push(combination);
    }
  }
}

function addPossibilities() {
  let template = possibilities
    .map(element => `<li class="list-group-item">${element}</li>`)
    .join("\n");
  document.querySelector("ul").innerHTML = template;
}

console.log(possibilities);

window.onload = function() {
  //write your code here
  addPossibilities();
};
