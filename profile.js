const alertColor = () => {
	alert("My favorite color is blue")
}
let colorBtn = document.getElementById("color")
colorBtn.addEventListener('click', alertColor)

const alertPlace = () => {
	alert("My favorite place is Jackson Hole")
}
let placeBtn = document.getElementById("place")
placeBtn.addEventListener('click', alertPlace)

const alertRitual = () => {
	alert("My favorite ritual is walking in the morning")
}
let ritualBtn = document.getElementById("ritual")
ritualBtn.addEventListener('click', alertRitual)