const mainContainer = document.querySelector("div.container");
const resetButton = document.createElement("button");
resetButton.textContent = 'Resize Grid';
resetButton.style.fontSize = "25px";
resetButton.style.marginBottom = '20px';

function createGrid (size) {
    mainContainer.innerHTML = '';
    const squareSize = 640 / size;
    
    const grid = document.createElement("div");
    grid.className = 'grid';
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    grid.style.width = '640px';

    // Create 16x16 grid (256 cells)
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = `${squareSize}px`;
        cell.style.height = `${squareSize}px`;
        cell.style.border = '2px solid black';
        cell.style.boxSizing = 'border-box';

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = '#333';
        });

        cell.addEventListener('mouseout', () => {
            cell.style.backgroundColor = ''; // Reset to default
          });

        grid.appendChild(cell)
    };

    mainContainer.prepend(resetButton);
    mainContainer.appendChild(grid);
}

// Function to fill grid with random colors
function randomColors() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        cell.style.backgroundColor = randomColor;
    });
}

createGrid(16);

resetButton.addEventListener('click', () => {
    let size = parseInt(prompt('Enter grid size (max 100):'));
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    createGrid(size);
})