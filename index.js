document.addEventListener("DOMContentLoaded", function() {
    const userLang = navigator.language || navigator.userLanguage; // Detect browser language

    // Redirect based on language preference
    if (userLang.startsWith('es')) {
        window.location.href = "contact-es.html";
    } else {
        window.location.href = "contact.html";
    }
});
