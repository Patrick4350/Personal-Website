/* Email Submission */
emailjs.init({
    publicKey: "U691jdN9DhdnFb1wp"
});

function sendEmail(event) {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    emailjs.send("service_31ns1oj", "template_lfi0q6e", data)
    .then(response => {
        alert('Thank you for your message! It has been sent successfully, and I will get back to you shortly.');
        form.reset();
    })
    .catch(error => {
        alert('Oops! Something went wrong. Please try again.');
    });
}

document.getElementById('contact-form').addEventListener('submit', sendEmail);
