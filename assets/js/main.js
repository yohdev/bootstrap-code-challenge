const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const button = document.querySelector('button');
const title = document.querySelector('.card-title');
const text = document.querySelector('.card-text');

function changeText(){
  var x = title;
              
            if (x.innerHTML === "JavaScript Challenge") {
                x.innerHTML = fetch('https://jsonplaceholder.typicode.com/posts/1') 
              .then((response) => response.json()) 
              .then((json) => console.log(json));
            } else {
                x.innerHTML = 'NOT SUCCESSFUL';
            }

  var y = text;
    
  if (y.innerHTML === "Card Content") {
      y.innerHTML = fetch('https://jsonplaceholder.typicode.com/posts/1') 
    .then((response) => response.json()) 
    .then((json) => console.log(json));
  } else {
      y.innerHTML = 'NOT SUCCESSFUL';
  }
}