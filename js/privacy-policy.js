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
