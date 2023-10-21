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
  .then((todos) =>  console.log(todos))
  .catch((error) =>  console.error(error))

  