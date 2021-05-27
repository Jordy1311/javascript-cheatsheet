function easyHTTP() {
  this.http = new XMLHttpRequest();
};

// make an HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this; // this gets around the weirdness of function written like this not being able to access this
  // this is all fixed with ES6 arrow functions with a lexical "this"
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
}

// make an HTTP POST request
// make an HTTP PUT request
// make an HTTP DELETE request