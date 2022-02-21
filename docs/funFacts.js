// Fun facts about me:
var facts = {
    1: 'My favorite movie is Inception',
    2: 'My favorite show is Breaking Bad',
    3: 'My favorite sport is soccer',
    4: 'I have never broken a bone',
    5: 'My mom is Italian',
    6: 'My dad is Nepalese',
    7: 'I am allergic to cats',
    8: 'I play guitar',
    9: 'I play violin',
    10: 'My first, middle, and last name all start with \'A\'',
    11: 'I have to concentrate to spell exersice correctly',
    12: 'I used to want to become a lawyer because I watched a lot of Suits',
    13: 'In my first year of university, my roommate had the same birthday as me'
};


// Give new fact on click
function refresh() {
    document.getElementById('funFacts').innerHTML = rand_fact(facts);
}

// Generate a new fun fact
var rand_fact = function(facts) {
    var keys = Object.keys(facts);
    return facts[keys[Math.floor(keys.length * Math.random())]];
}


