var fishLocations = ["Bradenton Creek",
                     "Skyway",
                     "Rainbow River"];
var hooked = {
    'genus' : 'fish',
    'species' : 'Tilapia',
    'description' : 'red belly',
    'fast' : true,
    'awefulToEat' : false
};


//array
console.log( "We have three locations to choose from,");

var fishLocations = ['Bradenton Creek, ',
                     'Skyway, ',
                     'Rainbow River. '];

for (var i=0; i<3; i++) {
  console.log(fishLocations[i]);

    
};

var hooked = {
    'genus' : 'fish',
    'species' : 'Tilapia',
    'description' : 'red belly',
    'fast' : true,
    'awefulToEat' : false
};

 var fishLocations = ["Bradenton Creek",
                     "Skyway",
                     "Rainbow River"];
 
var whereTo = function (fishLocations) {
    if (hooked.awefulToEat === false) {
        console.log("We will go to " + fishLocations[0]);
        
    } else {
        console.log("We will go to " + fishLocations[2])
    
    }
};

whereTo(hooked.awefulToEat =true );
  