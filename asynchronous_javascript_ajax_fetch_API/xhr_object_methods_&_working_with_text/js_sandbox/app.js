function loadData() {
  // create an XHR object
  const xhr = new XMLHttpRequest();

  console.log('READYSTATE', xhr.readyState); // readyState = 0
  
  // open method
  xhr.open("GET", "data.txt", true);
  console.log('READYSTATE', xhr.readyState); // readyState = 1
  
  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState); // readyState = 3
  }

  // at this .onload step we are already at readyState: 4
  // .onload relatively new, see below for OLDPROCESS
  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState); // readyState = 4
    if(this.status === 200) {
      console.log(this.responseText);
      document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // in case of error
  xhr.onerror = function() {
    console.log("Request error!");
  }

  xhr.send();
}

document.getElementById("button").addEventListener("click", loadData);


// OLDPROCESS
// xhr.onreadystatechange = function() {
//   console.log('READYSTATE', xhr.readyState);
//   if(this.status === 200 && this.readyState === 4){
//     console.log(this.responseText);
//   }
// }

  // readyState Values
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"