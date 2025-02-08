// Get the rose element
const rose = document.getElementById('rose');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for click event on the rose
rose.addEventListener('click', () => {
    // Get all petals
    const petals = document.querySelectorAll('.petal');
    
    // Change the color of each petal
    petals.forEach(petal => {
        petal.style.backgroundColor = getRandomColor();
    });
    
    // Change the center color as well
    const center = document.querySelector('.center');
    center.style.backgroundColor = getRandomColor();
});
