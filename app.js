const posts = [
  {title: 'Post One', body: 'This is post one' },
  {title: 'Post Two', body: 'This is post two' }

];

function createPost() {
  setTimeout(function() {
    posts.push(post);
  }, 2000);

}

function getPosts() {
  setTimeout(function(){
    let output = '';
    posts.forEach(function(){
      output += `<li>${post.title}</li>`;
    });
  }, 1000);
  document.body.innerHTML = output;
}

createPost({title: 'Post Three', body: 'This is post three'});

getPosts();