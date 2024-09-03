
   document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById("headerPlaceholder");
 
    // Load the header HTML file
    fetch("header.html")
        .then(response => response.text())
        .then(html => {
            // Insert the header content into the placeholder
            headerPlaceholder.innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading header:", error);
        });
});
