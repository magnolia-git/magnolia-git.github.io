var context = new (window.AudioContext || window.webkitAudioContext)();

function run() {

	// get the audio element
	const audioElement = document.querySelector('#untitled');
	console.log(audioElement);

	// pass it into the audio context
	var track = context.createMediaElementSource(audioElement);

	track.connect(context.destination);

	// select our play button
	const playButton = document.querySelector('button');

	playButton.addEventListener('mousedown', function() {

		document.getElementById('clap').className = 'clapped';
	    // check if context is in suspended state (autoplay policy)
	    if (context.state === 'suspended') {
	        context.resume();
	    }
	    // play sound
	    if (this.dataset.playing === 'false') {
	        audioElement.play();
	        this.dataset.playing = 'true';
	    } else if (this.dataset.playing === 'true') {
	        audioElement.currentTime = 0;

	    }
			while (!this.dataset.playing) {
				console.log("playing");
			}

	}, false);

	audioElement.addEventListener('ended', () => {
	    playButton.dataset.playing = 'false';
	}, false);
}

function clapped() {
	document.getElementById('clap').className = '';
}
