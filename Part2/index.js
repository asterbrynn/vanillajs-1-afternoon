console.log("The house always wins!")

let id = document.getElementById("id-input")
let color = document.getElementById("style-input")

function setCard() {
	let card = document.getElementById(id.value);
	card.style.color = color.value;
}

function resetCards() {
	let cards = document.getElementsByClassName("suit");
	for (i = 0; i < cards.length; i++) {
		if(cards[i].style.color) {
				cards[i].style.color = "#808080";
		}
	}
}