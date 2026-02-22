// 1. Grab the elements we need to interact with
const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

// 2. Create a main function that handles everything when a drum is hit
function playSound(padElement) {
    if (!padElement) return; // Safety check: if no pad is passed in, do nothing

    // Find the <audio> tag inside the specific pad that was triggered
    const audio = padElement.querySelector('.clip');

    // Reset the audio to the beginning. 
    // This is crucial so you can hit the same drum rapidly without waiting for the track to finish!
    audio.currentTime = 0;

    // Play the sound
    audio.play();

    // Update the display. 
    // We grab the pad's ID (e.g., "snare-drum"), replace the hyphens with spaces, and make it uppercase.
    const rawId = padElement.id;
    const formattedName = rawId.replace(/-/g, ' ').toUpperCase();
    display.innerText = formattedName;

    // Add the CSS class that triggers your visual "glow/press" effect
    padElement.classList.add('active');

    // Remove that visual effect after 100 milliseconds so the button "pops" back up
    setTimeout(() => {
        padElement.classList.remove('active');
    }, 100);
}

// 3. Handle Mouse Clicks
// We loop through every pad and attach a "click" event listener to it.
drumPads.forEach(pad => {
    pad.addEventListener('click', function () {
        // 'this' refers to the specific pad that was clicked
        playSound(this);
    });
});

// 4. Handle Keyboard Presses
// We listen to the whole document for any key press
document.addEventListener('keydown', function (event) {
    // Convert the pressed key to uppercase to match your HTML audio IDs (Q, W, E, etc.)
    const keyPressed = event.key.toUpperCase();

    // Look for an audio element that has this letter as its ID
    const audio = document.getElementById(keyPressed);

    // If we found an audio element (meaning they pressed a valid drum key)
    if (audio) {
        // The parent element of the <audio> tag is the .drum-pad div
        const parentPad = audio.parentElement;

        // Pass that parent pad into our main function
        playSound(parentPad);
    }
});