// ==========================================
// PRACTICAL 5
// STUDENT REGISTRATION FORM
// JAVASCRIPT VALIDATION
// ==========================================


// Get form

const form =
    document.getElementById("registrationForm");


// ==========================================
// FORM SUBMIT
// ==========================================

form.addEventListener("submit", function(event) {

    // Prevent page reload

    event.preventDefault();


    // ======================================
    // GET VALUES
    // ======================================

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const course =
        document.getElementById("course").value;

    const year =
        document.getElementById("year").value;

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    const terms =
        document.getElementById("terms").checked;


    // ======================================
    // CLEAR OLD ERRORS
    // ======================================

    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("mobileError").textContent = "";

    document.getElementById("passwordError").textContent = "";

    document.getElementById("confirmPasswordError").textContent = "";

    document.getElementById("courseError").textContent = "";

    document.getElementById("yearError").textContent = "";

    document.getElementById("genderError").textContent = "";

    document.getElementById("termsError").textContent = "";

    document.getElementById("successMessage").textContent = "";


    // ======================================
    // REGULAR EXPRESSIONS
    // ======================================

    // Name: minimum 3 letters

    const nameRegex =
        /^[A-Za-z ]{3,}$/;


    // Email

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Mobile: exactly 10 digits

    const mobileRegex =
        /^[0-9]{10}$/;


    // Password:
    // Minimum 8 characters
    // One uppercase
    // One lowercase
    // One number

    const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;


    // ======================================
    // VALIDATION STATUS
    // ======================================

    let valid = true;


    // ======================================
    // NAME
    // ======================================

    if (name === "") {

        document.getElementById("nameError").textContent =
            "Name is required.";

        valid = false;

    }

    else if (!nameRegex.test(name)) {

        document.getElementById("nameError").textContent =
            "Please enter a valid name.";

        valid = false;

    }


    // ======================================
    // EMAIL
    // ======================================

    if (email === "") {

        document.getElementById("emailError").textContent =
            "Email is required.";

        valid = false;

    }

    else if (!emailRegex.test(email)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        valid = false;

    }


    // ======================================
    // MOBILE
    // ======================================

    if (mobile === "") {

        document.getElementById("mobileError").textContent =
            "Mobile number is required.";

        valid = false;

    }

    else if (!mobileRegex.test(mobile)) {

        document.getElementById("mobileError").textContent =
            "Mobile number must contain exactly 10 digits.";

        valid = false;

    }


    // ======================================
    // PASSWORD
    // ======================================

    if (password === "") {

        document.getElementById("passwordError").textContent =
            "Password is required.";

        valid = false;

    }

    else if (!passwordRegex.test(password)) {

        document.getElementById("passwordError").textContent =
            "Password must have 8 characters, uppercase, lowercase and number.";

        valid = false;

    }


    // ======================================
    // CONFIRM PASSWORD
    // ======================================

    if (confirmPassword === "") {

        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";

        valid = false;

    }

    else if (password !== confirmPassword) {

        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";

        valid = false;

    }


    // ======================================
    // COURSE
    // ======================================

    if (course === "") {

        document.getElementById("courseError").textContent =
            "Please select your course.";

        valid = false;

    }


    // ======================================
    // YEAR
    // ======================================

    if (year === "") {

        document.getElementById("yearError").textContent =
            "Please select your year.";

        valid = false;

    }


    // ======================================
    // GENDER
    // ======================================

    if (!gender) {

        document.getElementById("genderError").textContent =
            "Please select your gender.";

        valid = false;

    }


    // ======================================
    // TERMS
    // ======================================

    if (!terms) {

        document.getElementById("termsError").textContent =
            "Please accept the Terms and Conditions.";

        valid = false;

    }


    // ======================================
    // SUCCESS
    // ======================================

    if (valid) {

        document.getElementById("successMessage").textContent =
            "Registration successful!";

    }

});


// ==========================================
// PASSWORD STRENGTH
// ==========================================

document
    .getElementById("password")
    .addEventListener("input", function() {

        const password = this.value;

        const strength =
            document.getElementById("strengthText");


        // Empty

        if (password.length === 0) {

            strength.textContent = "None";

        }


        // Weak

        else if (password.length < 6) {

            strength.textContent = "Weak";

        }


        // Medium

        else if (password.length < 8) {

            strength.textContent = "Medium";

        }


        // Check strong password

        else {

            const uppercase =
                /[A-Z]/.test(password);

            const lowercase =
                /[a-z]/.test(password);

            const number =
                /[0-9]/.test(password);


            if (
                uppercase &&
                lowercase &&
                number
            ) {

                strength.textContent = "Strong";

            }

            else {

                strength.textContent = "Medium";

            }

        }

    });