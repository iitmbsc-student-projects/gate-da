document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.mark-as-read-btn');
  
  buttons.forEach(button => {
    const path = button.getAttribute('data-path');
    const isRead = localStorage.getItem(path) === 'read';
    
    updateButtonState(button, isRead);
    
    button.addEventListener('click', function() {
      const currentState = localStorage.getItem(path) === 'read';
      const newState = !currentState;
      
      localStorage.setItem(path, newState ? 'read' : 'unread');
      updateButtonState(button, newState);
    });
  });
});

function updateButtonState(button, isRead) {
  if (isRead) {
    button.textContent = 'Marked as Read';
    button.classList.add('read');
  } else {
    button.textContent = 'Mark as Read';
    button.classList.remove('read');
  }
}
