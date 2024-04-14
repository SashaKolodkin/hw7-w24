window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    const video = document.getElementById('player1');

    video.loop = false;

    // Play button
    document.getElementById('play').addEventListener('click', function() {
        video.play();
        console.log('Play button clicked');
    });

    // Pause button
    document.getElementById('pause').addEventListener('click', function() {
        video.pause();
        console.log('Pause button clicked');
    });

    // Slow down button
    document.getElementById('slower').addEventListener('click', function() {
        video.playbackRate *= 0.9;
        console.log(`New speed: ${video.playbackRate}`);
    });

    // Speed up button
    document.getElementById('faster').addEventListener('click', function() {
        video.playbackRate /= 0.9;
        console.log(`New speed: ${video.playbackRate}`);
    });

    // Skip ahead button
    document.getElementById('skip').addEventListener('click', function() {
        const newTime = video.currentTime + 10;
        if (newTime >= video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime = newTime;
        }
        console.log(`Skipped ahead. New time: ${video.currentTime}`);
    });

    // Mute button
    document.getElementById('mute').addEventListener('click', function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
        console.log(`Video muted: ${video.muted}`);
    });

    // Volume slider
    document.getElementById('slider').addEventListener('input', function() {
        video.volume = this.value / 100;
        console.log(`Volume set to: ${video.volume}`);
    });

    // Style toggle for 'Old School' style
    document.getElementById('vintage').addEventListener('click', function() {
        video.classList.add('oldSchool');
        console.log('Styled with oldSchool class');
    });

    // Style toggle to return to original
    document.getElementById('orig').addEventListener('click', function() {
        video.classList.remove('oldSchool');
        console.log('Removed oldSchool class');
    });
});
