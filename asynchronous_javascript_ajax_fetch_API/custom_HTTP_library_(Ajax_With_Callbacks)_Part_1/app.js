const http = new easyHTTP;

// get posts
// this has been done asyncronusly with a callback
http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});