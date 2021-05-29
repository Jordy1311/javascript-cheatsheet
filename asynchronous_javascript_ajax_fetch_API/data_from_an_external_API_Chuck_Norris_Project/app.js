document.getElementById("get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();
  
  let number = document.getElementById("number").value;
  
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = "";

      if(response.type === "success") {
        response.value.forEach(function(joke) {
          output += `
          <li><strong>Type:</strong> ${joke.categories} || <strong>Joke Number:</strong> ${joke.id}</li>
          <p>${joke.joke}</p>
          `;
        });
      } else {
        output += "<li>Something went wrong! Please try again</li>";
      }

      document.getElementById("jokes").innerHTML = output;
    }
  }

  xhr.send();
}