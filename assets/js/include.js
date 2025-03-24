// Function to include HTML content
function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
}

// Load header and footer when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    includeHTML('header.html', 'header-include');
    includeHTML('footer.html', 'footer-include');
}); 