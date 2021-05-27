const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// };

// function getPosts() {
//   setTimeout(function() {
//     let output = "";
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// };

// // this is done in a syncronus way
// createPost({title: "Post Three", body: "This is post three"});
// getPosts();



function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
};

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

// this is done asyncronusly via the callback function which,
// was called as a second param when calling createPost - see below
createPost({title: "Post Three", body: "This is post three"}, getPosts);
getPosts();