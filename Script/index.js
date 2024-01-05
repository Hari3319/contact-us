const scriptURL = 'https://script.google.com/macros/s/AKfycbwa4GrMWlpOoN9ebGQsPj1lVSqAs2cvUisrZucMkFv0XeCJAF-X8JDvC7qtZfgewB7QlA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
