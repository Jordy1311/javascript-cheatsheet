const http = new easyHTTP;

// // get posts
// // this has been done asyncronusly with a callback
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// // get single post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// create data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};

// // create post - note that id is 101 which was made by the rest api
// http.post("https://jsonplaceholder.typicode.com/posts/", data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // update post - note that we have amended the post with the id: 1
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// })

// delete post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});