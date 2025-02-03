// Arrow Function
const greet = (name) => `Hello, ${name}!`

class Person {
  constructor(name) {
    this.name = name
  }
  greet() {
    return greet(this.name)
  }
}

// Async/Await Function
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    const data = await response.json()

    document.getElementById('data-output').innerText = JSON.stringify(data, null, 2)
  } catch (error) {
    document.getElementById('data-output').innerText = 'Error fetching data'
  }
}

// Event Listener
document.getElementById('fetch-data').addEventListener('click', fetchData)

// Create a Person instance and log greeting
const person = new Person('Leonardo!')
console.log(person.greet())
