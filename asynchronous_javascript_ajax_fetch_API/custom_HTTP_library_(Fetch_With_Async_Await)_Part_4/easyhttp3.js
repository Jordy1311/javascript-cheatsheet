/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

 class EasyHTTP {
  // make HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }

  // make HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData
  }

  // make HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData
  }

  // make HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const responseData = await "Resource deleted!!";
    return responseData
  }
}

