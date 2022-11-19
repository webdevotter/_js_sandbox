document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  
  const xhr = new XMLHttpRequest();

  xhr.open('GET','https://api.chucknorris.io/jokes/random', true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);

      const output = `<p>${response.value}</p>`
      
      document.querySelector('.get-jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}