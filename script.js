/* Event untuk button di porto */

// ngambil dom button sama item-item nya
const btns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

btns.forEach((btn) => {

  // nambahin event click ke button yang ada di porto
  btn.addEventListener("click", () => {

    // nyimpen value dari attribut filter dari button yang diclick
    const filter = btn.getAttribute('filter');

    // ngeganti display sesuai kesamaan dengan filter
    items.forEach((item) => {
      if (filter === 'all' || item.getAttribute('category') === filter) item.style.display = 'block';
      else item.style.display = 'none';
    });
    
  });
});

/* Logic  untuk ngirim email pake email.js*/
emailjs.init('npWbRdRL4RMSV4lYN');

// ngambil dom submitButton
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  // ngambil data dair form disimpen dalam dic
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };
  
  // ngirim email via email.js
  emailjs.send(
    'kelompok5bst', 
    'template_8vtyv6o', 
    formData, 
    'npWbRdRL4RMSV4lYN'
  )
});