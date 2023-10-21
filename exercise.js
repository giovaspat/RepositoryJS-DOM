
const form = document.querySelector("form")

  form.addEventListener("submit", async (evt) => {
  evt.preventDefault()
    try {
    const response = await setPostReq();
    console.log(response);
  } 
  catch(error) {
    console.error(error);
  }
});


async function setPostReq() {
  
    try {
      const response = await fetch ("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body : JSON.stringify ({
        title : form.querySelector("#todo-title").value,
        flagCompleted : form.querySelector("#todo-completed").checked
        })
  
        
      })

      if(!response.ok) {
        throw new Error("Error request")
      } else {
        return await response.json()
      }
    } catch(error) {
      console.log(error)
      throw(error)
    }


}





