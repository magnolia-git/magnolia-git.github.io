function run() {
	// for legacy browsers
	const context = new (window.AudioContext || window.webkitAudioContext)();

	// get the audio element
	const audioElement = document.querySelector('#untitled');
	console.log(audioElement);

	// pass it into the audio context
	var track = context.createMediaElementSource(audioElement);

	track.connect(context.destination);

	// select our play button
	const playButton = document.querySelector('#press');

	playButton.addEventListener('mousedown', function() {

	    // check if context is in suspended state (autoplay policy)
	    if (context.state === 'suspended') {
	        context.resume();
	    }

	    // play or pause track depending on state
	    if (this.dataset.playing === 'false') {
	        audioElement.play();
	        this.dataset.playing = 'true';
	    } else if (this.dataset.playing === 'true') {
	        audioElement.currentTime = 0;
	    }

	}, false);

	audioElement.addEventListener('ended', () => {
	    playButton.dataset.playing = 'false';
	}, false);
}
