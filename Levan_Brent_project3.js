var sport = "bow fishing"
var fisherman = ["jeff",
                "myself"];
var totalFish = 10;
var hooked = {
    'genus' : 'fish',
    'species' : 'Tilapia',
    'description' : 'red belly',
    'fast' : true,
    'awefulToEat' : false
};

console.log(fisherman[0] + " and " + fisherman[1] + " are going " + sport + " today.");

var fishLocations = ['Bradenton Creek, ', //array
                     'Skyway, ',
                     'Rainbow River. '];

console.log( "We have three locations to choose from,");

for (var i=0; i<3; i++) {
  console.log(fishLocations[i]);

};

console.log("We want to fish for " + hooked.species)

function whereTo(fishLocations,hooked) { //array argument
    
    hooked = {
    'genus' : 'fish',
    'species' : 'Tilapia',
    'description' : 'red belly',
    'fast' : true,
    'awefulToEat' : false
};
  
    fishLocations = ["Bradenton Creek",
                     "Skyway",
                     "Rainbow River"];
    
    if (hooked.species === 'Tilapia') {
        console.log("We will go to " + fishLocations[0] + ".");
         
    } else {
        console.log("We will go to " + fishLocations[2] + ".");
     
    }
       return(fishLocations);
};    
              
whereTo(hooked);
;

function gotEm(fish) { //number argument
    while (fish >0) {
        fish =fish-1;
        console.log("Got him! Let's move up.")
        console.log("There's one!")
         }
        console.log("Okay, now let's switch places.")
    
    return(gotEm)
};
gotEm(totalFish);

console.log("Hey look " + fisherman[0] + "," + "a tarpen, are they in season?")

function lookOut(tarpenLegal) {
    if (tarpenLegal === true) {
        console.log("Yes it is, let's try to catch it.");
    } else {
        console.log("No it's not, let's leave it alone.");
    };
    
    return(lookOut)
};
lookOut(tarpenLegal = false)



