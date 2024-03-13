// Function to dynamically populate the Country dropdown
function populateCountries() {
    var countries = [
        "Select Country",
        "USA",
        "Canada",
        "UK",
        "Australia",
        "India",
        "Japan",
        "Germany",
        "France",
        "China",
        "Brazil"
    ];

    var select = document.getElementById("country");

    for (var i = 0; i < countries.length; i++) {
        var option = document.createElement("option");
        option.text = countries[i];
        select.add(option);
    }
}

window.onload = function () {
    populateCountries();

    // Form submission
    document.getElementById("registrationForm").onsubmit = function (event) {
        event.preventDefault();

        var fullName = document.getElementById("fullName").value.trim();
        var email = document.getElementById("email").value.trim();
        var jobTitle = document.getElementById("jobTitle").value.trim();
        var companyName = document.getElementById("companyName").value.trim();
        var country = document.getElementById("country").value;
        var workshops = document.querySelectorAll('input[name="workshop"]:checked').length;
        var terms = document.getElementById("terms").checked;

        // Reset errors
        document.querySelectorAll('.error').forEach(function (el) {
            el.innerHTML = "";
        });

        // Validation
        var isValid = true;

        if (fullName === "") {
            document.getElementById("fullNameError").innerHTML = "Please enter your full name";
            isValid = false;
        }

        if (email === "") {
            document.getElementById("emailError").innerHTML = "Please enter your email address";
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById("emailError").innerHTML = "Please enter a valid email address";
            isValid = false;
        }

        if (jobTitle === "") {
            document.getElementById("jobTitleError").innerHTML = "Please enter your job title";
            isValid = false;
        }

        if (companyName === "") {
            document.getElementById("companyNameError").innerHTML = "Please enter your company name";
            isValid = false;
        }

        if (country === "Select Country") {
            document.getElementById("countryError").innerHTML = "Please select your country";
            isValid = false;
        }

        if (workshops === 0) {
            document.getElementById("workshopError").innerHTML = "Please select at least one workshop";
            isValid = false;
        }

        if (!terms) {
            document.getElementById("termsError").innerHTML = "Please agree to the Terms and Conditions";
            isValid = false;
        }

        // If form is valid, display success message
        if (isValid) {
            alert("Form submitted successfully!");
            document.getElementById("registrationForm").reset();
        }
    };
};

// Function to validate email address
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
