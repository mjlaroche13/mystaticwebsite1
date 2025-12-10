// Select elements from the HTML
const beanBtn = document.getElementById('beanBtn');
const counterDisplay = document.getElementById('counterDisplay');
const barkMessage = document.getElementById('barkMessage');

// Initialize pet counter
let petCount = 0;

// Function to handle the click
function petThePuppy() {
    // 1. Increase the number
    petCount++;
    
    // 2. Update the text on screen
    counterDisplay.innerText = "Total Pets: " + petCount;

    // 3. Show the 'Yap!' message
    barkMessage.classList.remove('hidden');

    // 4. Hide the 'Yap!' message after 1 second (1000 milliseconds)
    setTimeout(() => {
        barkMessage.classList.add('hidden');
    }, 1000);
}

// Add event listener to the button
beanBtn.addEventListener('click', petThePuppy);

console.log("Puppy script loaded! Ready for zoomies.");