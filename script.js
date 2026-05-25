

window.onload = function () {
    console.log("Website Loaded Successfully");
};
//FEEDBACK FORM VALIDATION//


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

// BUTTON MESSAGE//


function showMessage() {
    alert("Thank you for visiting DTEF Website!");
}

// RE-SPONSORSHIP FORM VALIDATION//


function validateResponsorForm() {

    let name = document.getElementById("responsorName").value;
    let email = document.getElementById("responsorEmail").value;
    let reason = document.getElementById("reason").value;

    if (name === "" || email === "" || reason === "") {

        alert("Please complete all required fields.");

        return false;
    }

    alert("Application submitted successfully!");

    return true;
}

// TOP ACHIEVERS FORM VALIDATION//


function validateTopAchieversForm() {

    let name = document.getElementById("topName").value;
    let email = document.getElementById("topEmail").value;
    let results = document.getElementById("results").value;

    if (name === "" || email === "" || results === "") {

        alert("Please complete all required fields.");

        return false;
    }

    alert("Top Achievers application submitted successfully!");

    return true;
}

// LOCAL PLACEMENT FORM VALIDATION//


function validateLocalPlacementForm() {

    let name = document.getElementById("localName").value;
    let email = document.getElementById("localEmail").value;
    let programme = document.getElementById("programme").value;

    if (name === "" || email === "" || programme === "") {

        alert("Please complete all required fields.");

        return false;
    }

    alert("Local Placement application submitted successfully!");

    return true;
}