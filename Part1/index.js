let boardArray = [];

function play(boxID) {
	let player = document.getElementById("player");
	let box = document.getElementById(boxID);
	if (box.innerText) {
		//
	}
	else if (player.innerText === "X") {
		box.innerText = player.innerText;
		boardArray[boxID] = "X";
		player.innerText = "O";
	}
	else {
		box.innerText = player.innerText;
		boardArray[boxID] = "O";
		player.innerText = "X";
	}
	console.log(boardArray);
	function win() {
		if (box.innerText) {
		boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2] && boardArray[0]
			? alert(`${boardArray[0]} wins!`)
		: boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5] && boardArray[3]
			? alert(`${boardArray[3]} wins!`)
		: boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8] && boardArray[6]
			? alert(`${boardArray[6]} wins!`)
		: boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6] && boardArray[0]
			? alert(`${boardArray[0]} wins!`)
		: boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7] && boardArray[1]
			? alert(`${boardArray[1]} wins!`)
		: boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8] && boardArray[2]
			? alert(`${boardArray[2]} wins!`)
		: boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8] && boardArray[0]
			? alert(`${boardArray[0]} wins!`)
		: boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6] && boardArray[2]
			? alert(`${boardArray[2]} wins!`)
		: boardArray[0] && boardArray[1] && boardArray[2] && boardArray[3] && boardArray[4] && boardArray[5] && boardArray[6] && boardArray[7] && boardArray[8]
			? alert("Cat's game!")
		: null
		}
	}
	setTimeout(win, 100);
}