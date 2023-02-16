/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = [
  "the",
  "our",
  "His",
  "Their",
  "everyone",
  "himself",
  "itself",
  "neither",
  "anybody",
  "whom",
  "hers",
  "you",
  "thee",
  "myself",
  "whoever",
  "herself",
  "nothing",
  "he",
  "ourselves",
  "who",
  "themselves",
  "something",
  "mine",
  "none",
  "all",
  "whichever",
  "them",
  "her",
  "each",
  "yourself",
  "whomever",
  "us",
  "my",
  "anyone"
];
const adj = [
  "thirsty",
  "courageous",
  "vexed",
  "misty",
  "hapless",
  "irritated",
  "delicious",
  "whimsical",
  "glossy",
  "lamentable",
  "uninterested",
  "wealthy",
  "deranged",
  "futuristic",
  "ambitious",
  "dirty",
  "stupendous",
  "abrasive",
  "chilly",
  "moist",
  "righteous",
  "shallow",
  "zealous",
  "tiny",
  "rambunctious",
  "weary",
  "fierce",
  "enchanted",
  "impartial",
  "wide",
  "honorable",
  "cooperative",
  "bumpy",
  "idiotic",
  "measly",
  "goofy",
  "giddy",
  "screeching",
  "tender",
  "feisty",
  "tangy",
  "silent",
  "puzzling",
  "sour",
  "wiry",
  "shy",
  "jolly",
  "disastrous",
  "jagged",
  "brutal",
  "swanky",
  "fluffy",
  "jaded",
  "brave",
  "sweet",
  "worried",
  "volatile",
  "mischievous",
  "defeated",
  "able",
  "luxuriant",
  "ruddy",
  "crabby",
  "cold",
  "nauseating",
  "impressive",
  "terrific",
  "familiar",
  "animated",
  "aggressive",
  "peaceful",
  "aquatic",
  "tacit",
  "juvenile",
  "ugly",
  "parched",
  "melodic",
  "aromatic",
  "prickly",
  "talented",
  "perfect",
  "gigantic",
  "rough",
  "woozy",
  "naughty",
  "willing",
  "inquisitive",
  "smiling",
  "absorbing",
  "anxious",
  "dull",
  "scrawny",
  "wasteful",
  "fat",
  "breezy",
  "lopsided",
  "quaint",
  "unruly",
  "tremendous",
  "wary",
  "lively",
  "ripe",
  "quickest"
];
const noun = [
  "jogger",
  "racoon",
  "pear",
  "orange",
  "mirror",
  "tuxedo",
  "goblet",
  "cabbage",
  "handcuffs",
  "honeycomb",
  "skyscraper",
  "mustache",
  "dagger",
  "parachute",
  "lighthouse",
  "spade",
  "butterfly",
  "harmonica",
  "whistle",
  "jacket",
  "bowtie",
  "cannon",
  "accordion",
  "mushroom",
  "asparagus",
  "hose",
  "gargoyle",
  "banister",
  "teapot",
  "mandolin",
  "seagull",
  "mosquito",
  "harp",
  "jackhammer",
  "goose",
  "gong",
  "binoculars",
  "claw",
  "ruler",
  "bathtub",
  "sunglasses",
  "washer",
  "saxophone",
  "wallet",
  "rollercoaster",
  "cheeseburger",
  "popsicle",
  "trombone",
  "elevator",
  "banjo",
  "carrot",
  "kangaroo",
  "hairbrush",
  "umbrella",
  "waterfall",
  "bookshelf",
  "sombrero",
  "sushi",
  "saddle",
  "xylophone",
  "blender",
  "javelin",
  "leopard",
  "fingernail",
  "dolphin",
  "trampoline",
  "motorcycle",
  "snowflake",
  "spaceship",
  "broccoli",
  "pinecone",
  "seahorse",
  "penguin",
  "rhinoceros",
  "ping-pong",
  "barbecue",
  "volcano",
  "meatball",
  "electricity",
  "giraffe",
  "sunflower",
  "eraser",
  "toothbrush",
  "dandelion",
  "telephone",
  "balloon",
  "magazine",
  "popsicle",
  "kettle",
  "toaster",
  "peacock",
  "binoculars",
  "maracas",
  "whisk",
  "rooster",
  "saw",
  "barometer",
  "candle",
  "teddy-bear",
  "yo-yo",
  "corkscrew",
  "squirrel",
  "nail",
  "refrigerator",
  "stoplight",
  "wrench",
  "raccoon",
  "trumpet",
  "toucan",
  "rubber-band",
  "radio",
  "caterpillar",
  "dumbbell",
  "rattlesnake",
  "tweezers",
  "stethoscope",
  "fire-extinguisher",
  "lawnmower",
  "sneaker",
  "drumstick",
  "sardine",
  "toothpaste",
  "pretzel",
  "cassette",
  "key",
  "suitcase",
  "airplane",
  "hotdog",
  "almond",
  "keyboard",
  "gumball",
  "baseball",
  "mermaid",
  "dragonfly",
  "umbrella",
  "sewing-machine",
  "waffle",
  "butterfly",
  "lampshade",
  "yacht"
];
const domainEnd = [
  ".com",
  ".org",
  ".net",
  ".edu",
  ".gov",
  ".mil",
  ".biz",
  ".info",
  ".io",
  ".co",
  ".us",
  ".uk",
  ".ca",
  ".au",
  ".de",
  ".fr",
  ".jp",
  ".ru",
  ".cn",
  ".es",
  ".in",
  ".mx",
  ".br",
  ".nl",
  ".ch",
  ".se",
  ".no",
  ".at",
  ".dk",
  ".eu"
];

// const genRanDomain = () => {
//   for (let i = 0; i < pronoun.length; i++) {
//     for (let j = 0; j < adj.length; j++) {
//       for (let k = 0; k < noun.length; k++) {
//         const combination = `${pronoun[i]} ${adj[j]} ${noun[k]}`;
//         possibilities.push(combination);
//       }
//     }
//   }
// };

// function addPossibilities() {
//   let template = possibilities
//     .map(element => `<li class="list-group-item">${element}</li>`)
//     .join("\n");
//   document.querySelector("ul").innerHTML = template;
// }

gsap.from(".button", {
  duration: 0.5,
  opacity: 0,
  y: "40%",
  ease: "power.4"
});

const generateBtn = document.getElementById("generate-btn");
const combinationsList = document.getElementById("combinations-list");

function generateCombinations() {
  // Clear the previous list items
  combinationsList.innerHTML = "";

  // Loop 27 times to generate all possible combinations
  for (let i = 0; i < 15; i++) {
    // Generate 3 random indices for each array
    const index1 = Math.floor(Math.random() * pronoun.length);
    const index2 = Math.floor(Math.random() * adj.length);
    const index3 = Math.floor(Math.random() * noun.length);
    const index4 = Math.floor(Math.random() * domainEnd.length);

    // Retrieve the values at these indices
    const value1 = pronoun[index1];
    const value2 = adj[index2];
    const value3 = noun[index3];
    const value4 = domainEnd[index4];

    // Create a new list item and add it to the list
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = `${value1}${value2}${value3}.${value4}`;
    combinationsList.appendChild(listItem);
  }
}

window.onload = function() {
  //write your code here

  // Add an event listener to the button to trigger the function on click
  generateBtn.addEventListener("click", generateCombinations);

  // addPossibilities(genRanDomain());
};
