/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) "FarmAnimal" must have "name", "sound", and "image" instance props
3) Extend the prototype of "FarmAnimal" with a method, "talk" that alert's the animal's "name" and "sound"
4) Create three different animal constructors for your farm - each should inherit from "FarmAnimal".
  Give each animal a "name", a "sound", and an "image" (use the web and copy an image path)
5) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	new rooster = new Rooster('Roger');
	farmAnimals.push(rooster);

*/

// CODE HERE
function FarmAnimal(name, sound, image){
	this.name = name
	this.sound = sound
	this.image = image
}

FarmAnimal.prototype.talk = function(sound){
alert (this.name  +  " says "  +  this.sound  +  " !!!!!")
}

function Jacob(name, sound, image){
   FarmAnimal.call(this, name, sound, image)
}

Jacob.prototype = new FarmAnimal()

jacob = new Jacob ('Lizzy', 'Baaa', 'http://www.bigskyjacobs.com/uploads/6/6/1/8/6618952/8876991_orig.jpg')

 function Llama(name, sound, image) {
   FarmAnimal.call(this, name, sound, image)
}

Llama.prototype = new FarmAnimal()

llama = new Llama( "Willis", 'Hramphhh', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/2560px-Llama_lying_down.jpg')


 function Goat(name, sound, image) {
   FarmAnimal.call(this, name, sound, image)
}

Goat.prototype = new FarmAnimal()

goat = new Goat( 'Classy', 'Ahhhhhhh', 'https://www.veterantv.com/wp-content/uploads/2017/08/f5d784aa1eabbde15ba5e2d90c3ba828.jpg')






// push all animal instances here, ex: farmAnimals.push(rooster)
var farmAnimals = [];
farmAnimals.push(jacob);
farmAnimals.push(llama);
farmAnimals.push(goat);

farmAnimals.forEach(function(animal) {
	var bottom = Math.floor(Math.random() * 75) + '%'
	var left = Math.floor(Math.random() * 75) + '%'
	var $div = $('<div>')
		.addClass('animal')
		.css({ 
			'background': 'url(' + animal.image + ')',
			'background-size': 'cover',
			'bottom': bottom,
			'left': left
		})

	$div.click(function() {
		animal.talk()
	})

	$('body').append($div)
})




