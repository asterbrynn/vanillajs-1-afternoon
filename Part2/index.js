console.log("The house always wins!")

const id = document.getElementById("id-input")
const color = document.getElementById("style-input")

function setCard() {
	let card = id.value;
	console.log(card);
	card.style.color = color.value;
}
