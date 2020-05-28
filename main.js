window.addEventListener("load", init);
// Creating some global variables
let time = 4;
let score = 0;
let isPlaying;

//DOM
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const audio = new Audio("sounds/ding.mp3");
const point = new Audio("sounds/gameover.wav");
point.loop = false;

const words = [
  "Adult",
  "Aeroplane",
  "Air",
  "Aircraft Carrier",
  "Airforce",
  "Airport",
  "Album",
  "Alphabet",
  "Apple",
  "Arm",
  "Army",
  "Baby",
  "Baby",
  "Backpack",
  "Balloon",
  "Banana",
  "Bank",
  "Barbecue",
  "Bathroom",
  "Bathtub",
  "Bed",
  "Bed",
  "Bee",
  "Bible",
  "Bible",
  "Bird",
  "Bomb",
  "Book",
  "Boss",
  "Bottle",
  "Bowl",
  "Box",
  "Boy",
  "Brain",
  "Bridge",
  "Butterfly",
  "Button",
  "Cappuccino",
  "Car",
  "Car-race",
  "Carpet",
  "Carrot",
  "Cave",
  "Chair",
  "Chess Board",
  "Chief",
  "Child",
  "Chisel",
  "Chocolates",
  "Church",
  "Church",
  "Circle",
  "Circus",
  "Circus",
  "Clock",
  "Clown",
  "Coffee",
  "Coffee-shop",
  "Comet",
  "Compact Disc",
  "Compass",
  "Computer",
  "Crystal",
  "Cup",
  "Cycle",
  "Data Base",
  "Desk",
  "Diamond",
  "Dress",
  "Drill",
  "Drink",
  "Drum",
  "Dung",
  "Ears",
  "Earth",
  "Egg",
  "Electricity",
  "Elephant",
  "Eraser",
  "Explosive",
  "Eyes",
  "Family",
  "Fan",
  "Feather",
  "Festival",
  "Film",
  "Finger",
  "Fire",
  "Floodlight",
  "Flower",
  "Foot",
  "Fork",
  "Freeway",
  "Fruit",
  "Fungus",
  "Game",
  "Garden",
  "Gas",
  "Gate",
  "Gemstone",
  "Girl",
  "Gloves",
  "God",
  "Grapes",
  "Guitar",
  "Hammer",
  "Hat",
  "Hieroglyph",
  "Highway",
  "Horoscope",
  "Horse",
  "Hose",
  "Ice",
  "Ice-cream",
  "Insect",
  "Jet fighter",
  "Junk",
  "Kaleidoscope",
  "Kitchen",
  "Knife",
  "Leather jacket",
  "Leg",
  "Library",
  "Liquid",
  "Magnet",
  "Man",
  "Map",
  "Maze",
  "Meat",
  "Meteor",
  "Microscope",
  "Milk",
  "Milkshake",
  "Mist",
  "Money $$$$",
  "Monster",
  "Mosquito",
  "Mouth",
  "Nail",
  "Navy",
  "Necklace",
  "Needle",
  "Onion",
  "PaintBrush",
  "Pants",
  "Parachute",
  "Passport",
  "Pebble",
  "Pendulum",
  "Pepper",
  "Perfume",
  "Pillow",
  "Plane",
  "Planet",
  "Pocket",
  "Post-office",
  "Potato",
  "Printer",
  "Prison",
  "Pyramid",
  "Radar",
  "Rainbow",
  "Record",
  "Restaurant",
  "Rifle",
  "Ring",
  "Robot",
  "Rock",
  "Rocket",
  "Roof",
  "Room",
  "Rope",
  "Saddle",
  "Salt",
  "Sandpaper",
  "Sandwich",
  "Satellite",
  "School",
  "Ship",
  "Shoes",
  "Shop",
  "Shower",
  "Signature",
  "Skeleton",
  "Snail",
  "Software",
  "Solid",
  "Space Shuttle",
  "Spectrum",
  "Sphere",
  "Spice",
  "Spiral",
  "Spoon",
  "Sports-car",
  "Spot Light",
  "Square",
  "Staircase",
  "Star",
  "Stomach",
  "Sun",
  "Sunglasses",
  "Surveyor",
  "Swimming Pool",
  "Sword",
  "Table",
  "Tapestry",
  "Teeth",
  "Telescope",
  "Television",
  "Tennis racquet",
  "Thermometer",
  "Tiger",
  "Toilet",
  "Tongue",
  "Torch",
  "Torpedo",
  "Train",
  "Treadmill",
  "Triangle",
  "Tunnel",
  "Typewriter",
  "Umbrella",
  "Vacuum",
  "Vampire",
  "Videotape",
  "Vulture",
  "Water",
  "Weapon",
  "Web",
  "Wheelchair",
  "Window",
  "Woman",
  "Worm",
  "X-ray"
];

// Configure the game
function init() {
  // Get initial word
  showWord(words);
  // Matching the input
  wordInput.addEventListener("input", startMatch);
  // Seconds countdown
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    audio.load();
    isPlaying = true;
    time = 4;
    showWord(words);
    wordInput.value = "";
    score++;
    audio.play();
  }
  scoreDisplay.innerHTML = score;
}

// Show random word
function showWord(words) {
  //Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex].toLowerCase();
}

// Match current word to input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Good job!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Timer function
function countdown() {
  // Make sure time is not running out
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;

  }
  // Show time
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "<span style='color: black; font-size:40px'>Game over, sir/madam!</span>";
  }
}
