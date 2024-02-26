const container = document.querySelector('.container');

for (let i = 0; i < 256; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.addEventListener('mouseenter', () => {
        grid.style.backgroundColor = 'black'; 
    });

    grid.addEventListener('mouseleave', () => {
        grid.style.backgroundColor = 'white';
    });
    container.appendChild(grid);
}

