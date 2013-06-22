
var hooked = {
    'genus' : 'fish',
    'species' : 'Tilapia',
    'description' : 'red belly',
    'fast' : true,
    'awefulToEat' : false
};

var fishLocations = ['Bradenton Creek, ', //array
                     'Skyway, ',
                     'Rainbow River. '];

console.log( "We have three locations to choose from,");

function locations(fishLocations) {
 
    for (var locations=0; locations<3; locations++) {
    console.log(fishLocations[locations]);

    return(fishLocations)
    }
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
        console.log("We will go to " + fishLocations[0]);
         
    } else {
        console.log("We will go to " + fishLocations[2])
     
    }
       return(fishLocations)
};    
              
whereTo(hooked);
