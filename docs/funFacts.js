// Fun facts about me:
var facts = [
    'My favorite movie is Inception',
    'My favorite show is Breaking Bad',
    'My favorite sport is soccer',
    'I have never broken a bone',
    'My mom is Italian',
    'My dad is Nepalese',
    'I am allergic to cats',
    'I play the guitar',
    'I play the violin',
    'My first name, middle name, and last name all start with \'A\'',
    'I have to concentrate to spell exersice correctly',
    'I used to want to become a lawyer because I watched a lot of Suits',
    'In my first year of university, my roommate had the same birthday as me',
    'My favorite colour is red',
    'I can juggle',
    'I used to sleepwalk',
    'I lived in Milan when I was very small',
    'I have been stung by a jellyfish',
    'My favorite book is "Tales of the Unexpected", a collection of short stories written by Roald Dahl',
    'I am triple vaccinated',
    'The first time I drove a car, I hit a tree',
    'One of my favorite albums of all time is Trilogy by The Weeknd',
    'My favorite card game is a Nepali card game called Marriage, played with 3 decks of cards',
    'I was the co-president of my high school\'s Model United Nations club',
    'My favorite season is summer'
];

// shuffle facts array
function shuffleFacts(arr) {
    let currentIndex = arr.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
  }

// Give new fact on click
function refresh() {
    document.getElementById('funFacts').innerHTML = popElem(shuffleFacts(facts));
}

// Return new fun fact
function popElem(arr) {
    if (arr.length > 0) {
        return arr.pop();
    } else {
        return "I'll add more facts soon!"
    }
}

// Generate a new fun fact but REPEATS FACTS
// var rand_fact = function(facts) {
//     return facts[Math.floor(keys.length * Math.random())];
// }


