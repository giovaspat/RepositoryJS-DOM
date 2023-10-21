const container = document.getElementById("container")
const h2 = container.querySelector("h2")
const input = container.querySelector("input")

async function fetchTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
    if(!response.ok) {
      throw new Error ("error request")
    } else {
      const data = await response.json()
      h2.textContent = data.title;
      input.checked = data.completed;
    }
  }
  catch (error){
    console.log(error)
    throw(error)
  }
}

fetchTodo()
 
