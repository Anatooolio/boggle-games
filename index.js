// var name = ''
// prompt('Введите свое имя перед началом игры!')
// console.log(name);
//Реализован функционал смешивания и вывода букв в DOM
//Не реализован функционал игры

var dice = [
	'AAEEGN',
	'ABBJOO',
	'ACHOPS',
	'AFFKPS',
	'AOOTTW',
	'CIMOTU',
	'DEILRX',
	'DELRVY',
	'DISTTY',
	'EEGHNW',
	'EEINSU',
	'EHRTVW',
	'EIOSST',
	'ELRTTY',
	'HIMNUQ',
	'HLNNRZ',
]

// console.log(dice);

let letters = Array.from(document.querySelectorAll('.value'))
let output = document.querySelector('.output')
let engWords = []

function randomizer() {
	for (var i = 0; i < dice.length; i += 1) {
		var currentValue = dice[i].split('')
		var diceRandom = Math.floor(Math.random() * 6)
		letters[i].innerHTML = currentValue[diceRandom]
	}
}

let btnReset = document.querySelector('.mix')
btnReset.addEventListener('click', randomizer)

letters.map(button => {
	button.addEventListener('pointerover', elements => {
		engWords.push(elements.target.innerText)
		var res = document.createElement('p')
		res.innerHTML = engWords.join('')
		output.replaceWith(res)
		output = res
		output.classList.add('new')
	})
})

