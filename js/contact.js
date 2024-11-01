// Toggle language dropdown on click
document.querySelector('.language-btn').addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdown = document.querySelector('.language-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown && dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    }
});

// Function to handle form submission
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

// Function to reset the form and display the original form view
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
