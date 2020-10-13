const API_URL = 'http://localhost:3000/auth/signup'

const signup = document.querySelector('#signup-form');

signup.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(signup)
  let name = formData.get('name');
  let email = formData.get('email');
  let pass = formData.get('password')

  fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        pass
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data.message))
     .catch(err => console.log(err)) 


})