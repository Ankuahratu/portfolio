// Modal functionality
function showModal(projectId) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    switch (projectId) {
        case 'brick-breaker':
            title.textContent = 'Brick Breaker Game';
            description.textContent = 'Developed a Brick Breaker game using Java. The game features different levels and increasing difficulty. It helped me enhance my problem-solving skills and understanding of game development.';
            break;
        case 'hospital-management':
            title.textContent = 'Hospital Management System';
            description.textContent = 'Created a comprehensive Hospital Management System using Java, MySQL, and Spring. This system manages patient records, appointments, and billing, streamlining the hospital\'s operations.';
            break;
        case 'employee-management':
            title.textContent = 'Employee Management System';
            description.textContent = 'Developed an Employee Management System as a college project using Java and MySQL. This system tracks employee information, attendance, and performance evaluations.';
            break;
        default:
            title.textContent = '';
            description.textContent = '';
    }

    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Form validation and submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you shortly.');
        // Here you would typically send the form data to your server
        // For demonstration purposes, we'll just clear the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
