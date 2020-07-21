// goal: make a 16 by 16 box using JS
// identify the container
// create the div element (box)
// use array methods to create a 16x16 grid of divs

const container = document.querySelector('.container')
// container.classList.add('flex-grid')

// const divBox = document.createElement('div')
// divBox.classList.add('box')
// container.append(divBox)

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows)
  container.style.setProperty('--grid-cols', cols)
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div')
    container.appendChild(cell).className = 'grid-item'
  }
}

makeRows(100, 100)
