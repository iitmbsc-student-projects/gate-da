// Function to mark a question as read
function markAsRead(questionId) {
    localStorage.setItem(questionId, 'read');
    updateButtonStatus(questionId);
}

// Function to check if a question is read
function isQuestionRead(questionId) {
    return localStorage.getItem(questionId) === 'read';
}

// Function to update button status
function updateButtonStatus(questionId) {
    const button = document.getElementById('markAsReadBtn');
    if (isQuestionRead(questionId)) {
        button.textContent = 'Marked as Read';
        button.disabled = true;
    } else {
        button.textContent = 'Mark as Read';
        button.disabled = false;
    }
}

// Function to initialize the button on page load
function initializeButton() {
    const questionId = document.body.getAttribute('data-question-id');
    if (questionId) {
        const button = document.getElementById('markAsReadBtn');
        button.addEventListener('click', () => markAsRead(questionId));
        updateButtonStatus(questionId);
    }
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeButton);
