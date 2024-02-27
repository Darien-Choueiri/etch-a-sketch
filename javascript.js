const grid = document.querySelector('.grid');

function createGrid(size = 16){
    for (let i = 0; i < size**2; i++){
        const square = document.createElement('div');
        square.classList.add('square');

        grid.appendChild(square);
        square.style.height = `${480/size}px`;
        square.style.width = `${480/size}px`;
    }
}

createGrid();

grid.addEventListener('mouseover', (event) => {
    let target = event.target;
    if (target.classList.contains('square')) {
        target.style.backgroundColor = 'black'; 
    }
});

const pixels = document.querySelector('.pixels');

pixels.addEventListener('click', () => {
    let size = prompt("Enter the nuber of squares desired per side (100 max): ");
    grid.replaceChildren();
    createGrid(size);
});

