// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const event = document.getElementById('event').value;

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !event) {
        alert('Please fill out all fields.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission (replace with actual backend integration)
    console.log('Registration Details:', { name, email, event });

    // Show success message
    alert(`Thank you, ${name}! You have successfully registered for ${event}.`);

    // Reset form
    document.getElementById('registration-form').reset();
});