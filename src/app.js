/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our", "His", "Their"];
const adj = ["great", "big", "wild", "hairy"];
const noun = ["jogger", "racoon", "pear", "orange"];
const possibilities = [];

const genRanDomain = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        const combination = `${pronoun[i]} ${adj[j]} ${noun[k]}`;
        possibilities.push(combination);
      }
    }
  }
};

function addPossibilities() {
  let template = possibilities
    .map(element => `<li class="list-group-item">${element}</li>`)
    .join("\n");
  document.querySelector("ul").innerHTML = template;
}

console.log(possibilities);

gsap.from(".button", {
  duration: 0.5,
  opacity: 0,
  y: "40%",
  ease: "power.4"
});

let pronounButton = document.querySelector(".addPronoun");
let inputPronoun = document.querySelector(".addPronounInput");

window.onload = function() {
  //write your code here

  addPossibilities(genRanDomain());
};
