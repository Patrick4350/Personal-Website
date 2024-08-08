/* Email Submission */
emailjs.init("service_31ns1oj");

function sendEmail(event) {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    emailjs.send("your_service_id", "your_template_id", data)
        .then(response => {
            alert('Message sent successfully!');
            form.reset(); 
        })
        .catch(error => {
            alert('Failed to send message. Please try again.');
            console.error('Error:', error);
        });
}

document.getElementById('contact-form').addEventListener('submit', sendEmail);
