async function fetchTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    if (!response.ok) {
      throw new Error("error request HTTP");
    } else {
      const datas = await response.json();
      return datas;
    }
     
  } catch (error) {
    console.error(error);
    throw error;
  }
}


fetchTodos()
   .then((todos) => {
    todos.forEach(el => {
      const ulList = document.querySelector(".todo-list");
      const lis = document.createElement("li")
      lis.textContent = el.title
      ulList.appendChild(lis)
    });
  })
  
  .catch((error) => console.error(error));
  




