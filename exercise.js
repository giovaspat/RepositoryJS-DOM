
const user = {
  id: 1,
  name: "John",
  age: 25,
};


function saveUserDatas() {
    const userJSON = JSON.stringify(user);
    return localStorage.setItem("user", userJSON);
}

saveUserDatas();






