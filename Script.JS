// Set the current year in the footer
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById("CurrentYear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear(); 
    }

    // Show live date time 
    const dateTimeElement = document.getElementById("dateTimeDisplay");
    if (dateTimeElement) { 
        function updateDateTime() {
            const now = new Date ();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                mintue: '2-digit',
                second: '2-digit',
            };
            dateTimeElement.textContent = now.toLocaleDateString('en-ZA', options);
        }
        
        updateDateTime(); // Initial call
        setInterval(updateDateTime, 1000); // Update every second 
    }
}); 

