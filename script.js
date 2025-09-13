// LISTEN FOR KEYPRESSES
window.addEventListener('keydown', function(e) {
    // Use the modern .code property (e.g., "KeyA")
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    
    // If no audio found, exit the function
    if (!audio) return;
    
    // Rewind to the start and play
    audio.currentTime = 0;
    audio.play();
    
    // Add visual effect
    key.classList.add('playing');
});

// REMOVE TRANSITION EFFECT
function removeTransition(e) {
    // Skip if it's not a transform transition
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// ADD TRANSITION END LISTENER TO ALL KEYS
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// ADD CLICK FUNCTIONALITY
keys.forEach(key => {
    key.addEventListener('click', function() {
        const keyCode = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        
        if (!audio) return;
        
        audio.currentTime = 0;
        audio.play();
        this.classList.add('playing');
    });
});