# JavaScript Drum Kit 🥁

A fun and interactive browser-based drum kit that responds to keyboard presses and mouse clicks. Built with vanilla JavaScript, HTML5, and CSS3 as part of the JavaScript30 challenge.😘

![Drum Kit Demo](https://i.imgur.com/b9r5sEL.jpg)

## Features🎇

- **Keyboard Control:** Play sounds by pressing keys A through L
- **Mouse/Touch Support:** Click on drum pads to play sounds
- **Visual Feedback:** Keys light up with a golden glow when activated
- **Responsive Design:** Works on desktop and mobile devices
- **No Dependencies:** Pure vanilla JavaScript - no libraries or frameworks

## How to Use🕶

1. **Keyboard:** Press keys A, S, D, F, G, H, J, K, L to play different drum sounds
2. **Mouse:** Click on any of the drum pads on screen
3. **Sounds:**
   - A → Clap
   - S → Hi-hat
   - D → Kick
   - F → Open hat
   - G → Boom
   - H → Ride
   - J → Snare
   - K → Tom
   - L → Tink

## Project Structure🎇
drum-kit/
│
├── index.html # Main HTML file
├── styles.css # Styles and animations
├── script.js # JavaScript functionality
├── README.md # This documentation file
└── sounds/ # Directory containing audio files
├── clap.wav
├── hihat.wav
├── kick.wav
├── openhat.wav
├── boom.wav
├── ride.wav
├── snare.wav
├── tom.wav
└── tink.wav


## Technical Implementation🦺

### HTML Structure
- Uses `data-key` attributes to connect visual elements with audio elements
- Semantic HTML with `<kbd>` tags for keyboard keys
- HTML5 `<audio>` elements for sound playback

### CSS Features✨
- Flexbox for responsive layout
- CSS transitions for smooth animations
- Background image with overlay effects
- Responsive units (rem) for scalability

### JavaScript functionality🎇
- Event listeners for `keydown` and `click` events
- DOM manipulation using `querySelector` and `classList`
- Audio API for controlling sound playback
- Transitionend events for animation timing

## Key Code Concepts Demonstrated🎇

1. **DOM Manipulation:** Selecting and modifying HTML elements
2. **Event Handling:** Keyboard events, click events, and transition events
3. **Audio API:** Controlling audio playback with JavaScript
4. **CSS Transitions:** Creating smooth animations
5. **Data Attributes:** Using `data-*` attributes to store information
6. **ES6 Template Literals:** Dynamic selector generation

## Setup Instructions✨

1. **Clone or download** the project files
2. **Ensure the file structure** is maintained with the `sounds` folder in the same directory as `index.html`
3. **Open with Live Server** in VS Code:
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"
4. **Or open directly** in a browser (note: some browsers may block audio for local files)

## Troubleshooting🧤

**No sound when pressing keys?**
- Ensure you're using a local server (Live Server recommended)
- Check browser console for errors (F12 → Console)
- Verify the `sounds` folder contains all required .wav files

**Visual effects not working?**
- Check that CSS is properly linked in HTML
- Ensure JavaScript is loading without errors

## Browser Compatibility

Works in all modern browsers that support:
- HTML5 Audio API
- CSS3 Transitions
- ES6 JavaScript features

## Credits🎊

- Project idea from Wes Bos' [JavaScript30](https://javascript30.com/) course
- Drum sounds from the JavaScript30 starter files
- Background image from [Imgur](https://i.imgur.com/b9r5sEL.jpg)

## Learning Outcomes

This project demonstrates:
- Connecting user input to audio/visual feedback
- Manipulating CSS classes with JavaScript
- Handling multiple event types
- Working with audio in the browser
- Creating interactive web experiences without libraries

---

**Enjoy making some noise!** 🎶
