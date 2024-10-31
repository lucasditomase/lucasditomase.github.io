function sendMail(event) {
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Construct formatted mailto link
    const mailtoLink = `mailto:insolito.egresar.0a@icloud.com?subject=${encodeURIComponent(subject)}&body=` +
        `--- Contact Form Submission ---` +
        `%0A%0A` + // Double line break for spacing
        `Name: ${encodeURIComponent(name)}` +
        `%0A%0A` + // Double line break for section spacing
        `--- Message ---` +
        `%0A%0A` +
        `${encodeURIComponent(message)}` +
        `%0A%0A` + // Double line break for footer
        `--- End of Message ---`;

    // Open mail client with the constructed link
    window.location.href = mailtoLink;

    // Display the Thank You message and hide other elements
    document.getElementById("thank-you").style.display = "block";
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("page-heading").style.display = "none";
    document.getElementById("privacy-link").style.display = "none";
}

function resetForm() {
    // Reset form fields
    document.getElementById("contact-form").reset();

    // Restore visibility of the form and other elements
    document.getElementById("contact-form").style.display = "block";
    document.getElementById("page-heading").style.display = "block";
    document.getElementById("privacy-link").style.display = "block";

    // Hide the Thank You message
    document.getElementById("thank-you").style.display = "none";
}

