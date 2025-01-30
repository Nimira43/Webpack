import _ from 'lodash'

document.getElementById('btn-1').addEventListener('click', () => {
  const el = document.getElementById('header')
  el.innerHTML = 'Update Completed!'
 
  const listItems = ['Dune', 'Life of Brian', 'Skyfall']
  const ul = document.getElementById('movie-list')
  
  _.forEach(listItems, (item) => {
    const tempEl = document.createElement('li')
    tempEl.innerHTML = item
    ul.appendChild(tempEl)
  })
})
