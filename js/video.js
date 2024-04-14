window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    const video = document.getElementById('player1');

    video.autoplay = false;
    video.loop = false;

    // play button
    document.getElementById('playButton').addEventListener('click', function() {
        video.play();
        console.log('Play button clicked');
    });

    // pause button
    document.getElementById('pauseButton').addEventListener('click', function() {
        video.pause();
        console.log('Pause button clicked');
    });

    // Slow down button
    document.getElementById('slowButton').addEventListener('click', function() {
        video.playbackRate *= 0.9;
        console.log(`New speed: ${video.playbackRate}`);
    });

    // speed button
    document.getElementById('speedButton').addEventListener('click', function() {
        video.playbackRate /= 0.9;
        console.log(`New speed: ${video.playbackRate}`);
    });

    // skip  button
    document.getElementById('skipButton').addEventListener('click', function() {
        const newTime = video.currentTime + 10;
        if (newTime >= video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime = newTime;
        }
        console.log(`Skipped ahead. New time: ${video.currentTime}`);
    });

    // mute
    document.getElementById('muteButton').addEventListener('click', function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
        console.log(`Video muted: ${video.muted}`);
    });

    // volume
    document.getElementById('volumeSlider').addEventListener('input', function() {
        video.volume = this.value / 100;
        console.log(`Volume set to: ${video.volume}`);
    });

    // style toggles
    document.getElementById('styledButton').addEventListener('click', function() {
        video.classList.add('oldSchool');
        console.log('Styled with oldSchool class');
    });

    document.getElementById('originalButton').addEventListener('click', function() {
        video.classList.remove('oldSchool');
        console.log('Removed oldSchool class');
    });
});
