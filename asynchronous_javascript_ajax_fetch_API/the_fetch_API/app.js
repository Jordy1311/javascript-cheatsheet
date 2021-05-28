document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

// get local text file data
function getText() {
  fetch("test.txt")
    .then(response => response.text())
    .then(data => {
      // console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(error => console.log(error));
}

// get local JSON file data
function getJson() {
  fetch("posts.json")
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      let output = "";
      data.forEach(post => output += `<li>${post.title}</li>`);
      document.getElementById("output").innerHTML = output;
    })
    .catch(error => console.log(error));
}

// get from external API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      let output = "";
      data.forEach(user => output += `<li>${user.login}</li>`);
      document.getElementById("output").innerHTML = output;
    })
    .catch(error => console.log(error));
}