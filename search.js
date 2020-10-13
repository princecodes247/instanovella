const API_URL = 'hhttp://localhost:3000/auth/login'

const login = document.querySelector('#login-form');

login.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(login)
  let nameD = formData.get('name');
  let pass = formData.get('password')

  fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        pass: pass
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
    .catch(err => console.log(err))


})