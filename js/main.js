function askQuestions () {

	var firstName = prompt('What is your first name?');
	//no space after prompt
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName
	console.log(fullName);

	if (firstName == 'General' && lastName != 'Assembly') {
			 console.log('Hello General, we have been expecting you!');		
	}

	var favecolour = prompt('What is your favourite colour?');

	if (favecolour ==='purple'||
		favecolour ==='blue'||
		favecolour ==='pink'){

		$('h1').css('color',favecolour);

	}


	var age = prompt('How old are you?');
	age = parseInt(age);
	//camel case

	if (age>=18){
		console.log('user is an adult');
	} else if (age >= 13) {
		console.log ('user is a teenager');
	} else {
		console.log ('user is a child');
	}

}



//When the page loads
$(function() {
	//hey Jquery, when the page loads and uploads the DOM do some stuff between brackets
	//round for passing an arguement and curly for sectioning off code

	$('img').on('click', askQuestions);

	//When the user clicks a heading
	$('h3').on('click', function() {
		//when the user clicks on h3 do the below
		//Hide the content after the heading 

		$(this).next().slideToggle(100);
		//the word this corresonds to the h3 that the user clicks on as there are multiple one's on the page. 
		//Next is the jquery command that finds the next query in the DOM
		//hide changes the HTML to the CSS display of none or you can select toggle which allows you to toggle the content on and off
		//update styling in css to ensure that the user is aware that the content is clickable so turn cursor in to a pointer and underline the h3
		//you can introduce an arguement via () so in this case stipulate how long the toggle will take to slide content (100 milliseconds)

	});

});