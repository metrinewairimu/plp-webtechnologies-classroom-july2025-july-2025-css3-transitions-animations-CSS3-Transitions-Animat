/**
 * Part 2: JavaScript Functions
 * Demonstrate scope, parameters, return values, and reuse.
 */

// Global counter variable to demonstrate global scope
let globalCounter = 0;

/**
 * Adds two numbers and returns the sum.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Sum of a and b
 */
function addNumbers(a, b) {
  return a + b;
}

/**
 * Increments the global counter and returns the new value.
 * @returns {number} The incremented counter
 */
function incrementCounter() {
  globalCounter++;
  return globalCounter;
}

/**
 * Creates a personalized greeting message.
 * @param {string} name - The name to greet.
 * @returns {string} A greeting message or error if invalid input.
 */
function createGreeting(name) {
  if (!name.trim()) {
    return "Please enter a valid name!";
  }
  const greeting = `Hello, ${name.trim()}! 👋`;
  return greeting;
}

/**
 * Toggles a CSS class on a DOM element.
 * @param {HTMLElement} element - The element to toggle class on.
 * @param {string} className - The class name to toggle.
 */
function toggleClass(element, className) {
  element.classList.toggle(className);
}

/**
 * Shows the modal popup.
 */
function showModal() {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  // Focus the modal for accessibility
  modal.querySelector('.modal-content').focus();
}

/**
 * Hides the modal popup.
 */
function hideModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  // Return focus to show modal button
  showModalBtn.focus();
}

/**
 * Toggles the loading spinner visibility.
 */
function toggleLoader() {
  loader.classList.toggle('active');
  loader.setAttribute('aria-hidden', !loader.classList.contains('active'));
}

/**
 * Handles keyboard accessibility for card flipping.
 * @param {KeyboardEvent} e 
 */
function handleCardKeyPress(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleClass(card, 'flipped');
  }
}

// --- DOM Elements ---
const animateBoxBtn = document.getElementById('animateBoxBtn');
const box = document.getElementById('box');

const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const greetingMessage = document.getElementById('greetingMessage');

const incrementBtn = document.getElementById('incrementBtn');
const counterValue = document.getElementById('counterValue');

const card = document.getElementById('card');
const cardContainer = document.querySelector('.card-container');

const toggleLoaderBtn = document.getElementById('toggleLoaderBtn');
const loader = document.getElementById('loader');

const showModalBtn = document.getElementById('showModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

/* ===== Part 3: Combine CSS & JS - Animation triggers ===== */

/**
 * Animate box on button click by toggling class
 */
animateBoxBtn.addEventListener('click', () => {
  toggleClass(box, 'slide-in');
});

/**
 * Greet user when button clicked
 * Uses createGreeting function with parameter and return value
 */
greetBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const message = createGreeting(name);
  greetingMessage.textContent = message;

  // Animate fade in of greeting message
  greetingMessage.classList.add('visible');
  setTimeout(() => {
    greetingMessage.classList.remove('visible');
  }, 3000);
});

/**
 * Increment counter and update UI
 * Demonstrates global scope modification and return value
 */
incrementBtn.addEventListener('click', () => {
  const newCount = incrementCounter();
  counterValue.textContent = newCount;

  // Animate counter briefly scaling up
  counterValue.style.transform = 'scale(1.4)';
  counterValue.style.transition = 'transform 0.2s ease';

  setTimeout(() => {
    counterValue.style.transform = 'scale(1)';
  }, 200);
});

/**
 * Flip card on click and keyboard accessibility (Enter/Space)
 */
cardContainer.addEventListener('click', () => {
  toggleClass(card, 'flipped');
});

cardContainer.addEventListener('keydown', handleCardKeyPress);

/**
 * Toggle loader visibility on button click
 */
toggleLoaderBtn.addEventListener('click', toggleLoader);

/**
 * Show modal popup on button click
 */
showModalBtn.addEventListener('click', showModal);

/**
 * Hide modal popup on close button click
 */
closeModalBtn.addEventListener('click', hideModal);

/**
 * Hide modal when clicking outside modal content
 */
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

/**
 * Hide modal when pressing Escape key
 */
document.addEventListener('keydown', (event) => {
  if (event.key === "Escape" && modal.classList.contains('active')) {
    hideModal();
  }
});
