console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("Form has been submitted.")
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

const complimentAlert = () => {
	alert("You are the best!")
}

let duckypic = document.getElementById("duckypic")
duckypic.addEventListener('mouseover', complimentAlert)