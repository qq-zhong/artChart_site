document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector('.grid-container');

    // Function to create grid items
    function createGridItems(numRows, numCols) {
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                const image = document.createElement('img');
                image.src = 'mona.jpg'; // Ensure the path to the image is correct
                image.alt = 'Mona Image';
                gridItem.appendChild(image);
                gridContainer.appendChild(gridItem);
            }
        }
    }

    // Initially create enough grid items to cover the screen
    createGridItems(Math.ceil(window.innerHeight / 100), Math.ceil(window.innerWidth / 100));

    // Adjust the grid when the window is resized
    window.addEventListener('resize', () => {
        gridContainer.innerHTML = ''; // Clear existing grid
        const numRows = Math.ceil(window.innerHeight / 100);
        const numCols = Math.ceil(window.innerWidth / 100);
        createGridItems(numRows, numCols);
    });
});
