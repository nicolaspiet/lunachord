const chordInput = document.getElementById('chord')
const searchButton = document.getElementById('search-chord')
const embedChords = document.getElementById('embed-chords')
const firstPage = document.getElementById('first-page')
const secondPage = document.getElementById('second-page')

const delay = 500;
let lastExecution = 0;

function consult() {
	if ((lastExecution + delay) < Date.now()){

		if (chordInput.value != 0) {
			chordToCon = chordInput.value.toLowerCase()
			embedChords.setAttribute('src', `https://api.uberchord.com/v1/embed/chords?nameLike=${chordToCon}`)
			firstPage.style.display = 'none'
			secondPage.style.display = 'block'
		}
        lastExecution = Date.now();
    }
}

function backToFP() {
	if ((lastExecution + delay) < Date.now()){

		firstPage.style.display = 'block'
		secondPage.style.display = 'none'

        lastExecution = Date.now();
    }
}