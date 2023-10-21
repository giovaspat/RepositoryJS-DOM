const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserDatas() {
    const userJSON = JSON.stringify(user);
    return localStorage.setItem("user", userJSON);
}

const takeUserDatas = localStorage.getItem("user")
// const userDataObj = JSON.parse(takeUserDatas)    // --> se vogliamo recuperare i dati sottoforma di Oggetto

saveUserDatas();
console.log(takeUserDatas)
// console.log(userDataObj)  // --> se vogliamo stampare i dati sottoforma di Oggetto