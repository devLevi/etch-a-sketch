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

makeRows(30, 30)

function addHoverToGrid() {
  let gridItem = document.querySelectorAll('.grid-item')
  gridItem.forEach((item) => {
    item.addEventListener('mouseover', function () {
      this.style.backgroundColor = '#333'
      this.style.border = '1px solid #333'
    })
  })
}

addHoverToGrid()

// const generateColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16)
//   container.target = '#' + randomColor
//   color.innerHTML = '#' + randomColor
// }

// genNew.addEventListener('mouseover', generateColors)
// generateColor()
