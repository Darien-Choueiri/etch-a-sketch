const grid = document.querySelector('.grid');

for (let i = 0; i < 256; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}

grid.addEventListener('mouseover', (event) => {
    let target = event.target;
    if (target.classList.contains('square')) {
        target.style.backgroundColor = 'black'; 
    }
});

const pixels = document.querySelector('.pixels');

pixels.addEventListener('click', () => {
    let size = prompt("Enter the nuber of squares desired per side (100 max): ");
});

