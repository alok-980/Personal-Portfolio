// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
    const modal = document.getElementById('javaModal');
    if (event.target === modal) {
        closeModal('javaModal');
    }
}
