// ===============================
// WELCOME MESSAGE
// ===============================

window.onload = function () {
    console.log("Website Loaded Successfully");
};

// ===============================
// FEEDBACK FORM VALIDATION
// ===============================

function validateFeedback() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Feedback submitted successfully!");
    return true;
}

// ===============================
// BUTTON MESSAGE
// ===============================

function showMessage() {
    alert("Thank you for visiting DTEF Website!");
}