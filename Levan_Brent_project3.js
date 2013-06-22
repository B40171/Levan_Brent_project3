var sport = "bow fishing"
var fisherman = ["jeff",
                "myself"];


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

function whereTo(fishLocations,hooked) { //boolean argument
    
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
    
    if (hooked.awefulToEat === false) {
        console.log("We will go to " + fishLocations[0] + ".");
         
    } else {
        console.log("We will go to " + fishLocations[2] + ".");
     
    }
       return(fishLocations);
};    
              
whereTo(hooked);


