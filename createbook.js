console.log('hello');

const API_URL =  'http://localhost:3000/books/add'

const form = document.querySelector('#create-form')
const title = document.querySelector('#title');
const desc = document.querySelector('#desc');
const category = document.querySelector('#category');


form.addEventListener('submit', ()=>{
  event.preventDefault();
  
  let bookDetails = new FormData(form);
  let bookTitle = bookDetails.get('title')
  let bookDesc = bookDetails.get('desc')
  let bookCateg = bookDetails.get('category')
  
  fetch(API_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    body: JSON.stringify({
      title: bookTitle,
      desc: bookDesc,
      category: bookCateg
    })
  }).then(res =>
    res.json())
    .then(ret => console.log(ret.message))
     .catch(err => console.log(err)) 
  
  
})