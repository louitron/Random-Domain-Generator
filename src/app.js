/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = [
  "The",
  "Our",
  "His",
  "Their",
  "Everyone",
  "That",
  "Self",
  "Neither",
  "Anybody",
  "Whom",
  "Hers",
  "You",
  "Thee",
  "Whoever",
  "Nothing",
  "He",
  "Truly",
  "Who",
  "Something",
  "Mine",
  "None",
  "All",
  "Its",
  "Them",
  "Her",
  "Each",
  "Towhom",
  "We",
  "My",
  "Anyone"
];
const adj = [
  "Great",
  "Big",
  "Thirsty",
  "Courageous",
  "Vexed",
  "Misty",
  "Hapless",
  "Irritated",
  "Delicious",
  "Whimsical",
  "Glossy",
  "Lamentable",
  "Uninterested",
  "Wealthy",
  "Deranged",
  "Futuristic",
  "Ambitious",
  "Dirty",
  "Stupendous",
  "Abrasive",
  "Chilly",
  "Moist",
  "Righteous",
  "Shallow",
  "Zealous",
  "Tiny",
  "Rambunctious",
  "Weary",
  "Fierce",
  "Enchanted",
  "Impartial",
  "Wide",
  "Honorable",
  "Cooperative",
  "Bumpy",
  "Idiotic",
  "Measly",
  "Goofy",
  "Giddy",
  "Screeching",
  "Tender",
  "Feisty",
  "Tangy",
  "Silent",
  "Puzzling",
  "Sour",
  "Wiry",
  "Shy",
  "Jolly",
  "Disastrous",
  "Jagged",
  "Brutal",
  "Swanky",
  "Fluffy",
  "Jaded",
  "Brave",
  "Sweet",
  "Worried",
  "Volatile",
  "Mischievous",
  "Defeated",
  "Able",
  "Luxuriant",
  "Ruddy",
  "Crabby",
  "Cold",
  "Nauseating",
  "Impressive",
  "Terrific",
  "Familiar",
  "Animated",
  "Aggressive",
  "Peaceful",
  "Aquatic",
  "Tacit",
  "Juvenile",
  "Ugly",
  "Parched",
  "Melodic",
  "Aromatic",
  "Prickly",
  "Talented",
  "Perfect",
  "Gigantic",
  "Rough",
  "Woozy",
  "Naughty",
  "Willing",
  "Inquisitive",
  "Smiling",
  "Absorbing",
  "Anxious",
  "Dull",
  "Scrawny",
  "Wasteful",
  "Fat",
  "Breezy",
  "Lopsided",
  "Quaint",
  "Unruly",
  "Tremendous",
  "Wary",
  "Lively",
  "Ripe",
  "Quickest"
];
const noun = [
  "Jogger",
  "Racoon",
  "Pear",
  "Orange",
  "Mirror",
  "Tuxedo",
  "Goblet",
  "Cabbage",
  "Handcuffs",
  "Honeycomb",
  "Skyscraper",
  "Mustache",
  "Dagger",
  "Parachute",
  "Lighthouse",
  "Spade",
  "Butterfly",
  "Harmonica",
  "Whistle",
  "Jacket",
  "Bowtie",
  "Cannon",
  "Accordion",
  "Mushroom",
  "Asparagus",
  "Hose",
  "Gargoyle",
  "Banister",
  "Teapot",
  "Mandolin",
  "Seagull",
  "Mosquito",
  "Harp",
  "Jackhammer",
  "Goose",
  "Gong",
  "Binoculars",
  "Claw",
  "Ruler",
  "Bathtub",
  "Sunglasses",
  "Washer",
  "Saxophone",
  "Wallet",
  "Rollercoaster",
  "Cheeseburger",
  "Popsicle",
  "Trombone",
  "Elevator",
  "Banjo",
  "Carrot",
  "Kangaroo",
  "Hairbrush",
  "Umbrella",
  "Waterfall",
  "Bookshelf",
  "Sombrero",
  "Sushi",
  "Saddle",
  "Xylophone",
  "Blender",
  "Javelin",
  "Leopard",
  "Fingernail",
  "Dolphin",
  "Trampoline",
  "Motorcycle",
  "Snowflake",
  "Spaceship",
  "Broccoli",
  "Pinecone",
  "Seahorse",
  "Penguin",
  "Rhinoceros",
  "Ping-pong",
  "Barbecue",
  "Volcano",
  "Meatball",
  "Electricity",
  "Giraffe",
  "Sunflower",
  "Eraser",
  "Toothbrush",
  "Dandelion",
  "Telephone",
  "Balloon",
  "Magazine",
  "Popsicle",
  "Kettle",
  "Toaster",
  "Peacock",
  "Binoculars",
  "Maracas",
  "Whisk",
  "Rooster",
  "Saw",
  "Barometer",
  "Candle",
  "Teddy-bear",
  "Yo-yo",
  "Corkscrew",
  "Squirrel",
  "Nail",
  "Refrigerator",
  "Stoplight",
  "Wrench",
  "Raccoon",
  "Trumpet",
  "Toucan",
  "Rubber-band",
  "Radio",
  "Caterpillar",
  "Dumbbell",
  "Rattlesnake",
  "Tweezers",
  "Stethoscope",
  "Fire-extinguisher",
  "Lawnmower",
  "Sneaker",
  "Drumstick",
  "Sardine",
  "Toothpaste",
  "Pretzel",
  "Cassette",
  "Key",
  "Suitcase",
  "Airplane",
  "Hotdog",
  "Almond",
  "Keyboard",
  "Gumball",
  "Baseball",
  "Mermaid",
  "Dragonfly",
  "Umbrella",
  "Sewing-machine",
  "Waffle",
  "Butterfly",
  "Lampshade",
  "Yacht"
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
  ".es",
  ".in",
  ".tech"
];

const genRanDomain = () => {
  console.log("Here is the domain generator exersice:");
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        const combination = `${pronoun[i]} ${adj[j]} ${noun[k]}`;
        console.log(combination);
      }
    }
  }
  console.log(
    "This exersice was boring and I wanted to expand on it, so I made a general domain generator"
  );
};

//

gsap.from("button", {
  duration: 1,
  opacity: 0,
  y: "40%",
  ease: "power.4"
});

const generateBtn = document.getElementById("generate-btn");
const combinationsList = document.getElementById("combinations-list");

function generateCombinations() {
  // Clear the previous items
  combinationsList.innerHTML = "";

  // Loop 27 times to generate all possible combinations
  for (let i = 0; i < 5; i++) {
    // Generate 3 random indices for each array
    const pronounIndex = Math.floor(Math.random() * pronoun.length);
    const adjIndex = Math.floor(Math.random() * adj.length);
    const nounIndex = Math.floor(Math.random() * noun.length);
    const domainNameIndex = Math.floor(Math.random() * domainEnd.length);

    // Retrieve the values at these indices
    const pronounValue = pronoun[pronounIndex];
    const adjValue = adj[adjIndex];
    const nounValue = noun[nounIndex];
    const domainValue = domainEnd[domainNameIndex];

    // Create a new list item and add it to the list
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = `${pronounValue}${adjValue}${nounValue}${domainValue}`;
    combinationsList.appendChild(listItem);
  }
  gsap.fromTo(
    "li",
    {
      duration: 1,
      opacity: 0,
      // y: "40%",
      ease: "power.4"
    },
    { backgroundColor: "#0088F3", opacity: 1, color: "white" }
  );
}

window.onload = function() {
  //write your code here
  genRanDomain();
  // Add an event listener to the button to trigger the function on click
  generateBtn.addEventListener("click", generateCombinations);

  // addPossibilities(genRanDomain());
};
