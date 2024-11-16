
const trigger = document.querySelector('.trigger')
const forward = document.querySelector('.forward')
const left = document.querySelector('.left')
const backward = document.querySelector('.backward')
const right = document.querySelector('.right')

let topPosition = 50;
let leftPosition = 50;

function moveUp() {
	topPosition -= 5;
 updatePosition();
}

function moveDown() {
	topPosition += 5;
	updatePosition()
}

function moveLeft() {
	leftPosition -= 5;
	updatePosition()
}

function moveRight() {
	leftPosition += 5;
	updatePosition();
}

function updatePosition() {
	trigger.style.top = `${topPosition}%`;
	trigger.style.left = `${leftPosition}%`;
}


function addGreenBg(direction) {
	direction.classList.add('bg-green');
		setTimeout(() => {
			direction.classList.remove('bg-green')
		}, 200)

}


forward.addEventListener('click', () => {
	addGreenBg(forward);
})
backward.addEventListener('click', () => {
	addGreenBg(backward)
})
left.addEventListener('click', () => {
	addGreenBg(left)
})
right.addEventListener('click', () => {
	addGreenBg(right)
})

forward.addEventListener('click', moveUp)
backward.addEventListener('click', moveDown)
left.addEventListener('click', moveLeft)
right.addEventListener('click', moveRight)


document.addEventListener('keydown',(event) => {
	switch(event.key) {
		case 'ArrowUp': moveUp(), addGreenBg(forward);
		break;
	
	case 'ArrowDown': moveDown(), addGreenBg(backward)
	break;

	case 'ArrowLeft': moveLeft(), addGreenBg(left)
	break;

	case 'ArrowRight': moveRight(), addGreenBg(right)
	break;
	}
})