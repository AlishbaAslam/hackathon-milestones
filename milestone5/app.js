//Import form and displayed form element from html.
var form = document.getElementById('cv-form');
var formDisplayElement = document.getElementById('generated-resume');
var shareableLinkDiv = document.getElementById('shareable-link');
var shareableLinkElement = document.getElementById('shareable-url');
var downloadPdfButton = document.getElementById('download-pdf');
//Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //User inputs
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var qualification = document.getElementById('qualification').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // form data store in localStorage.
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        qualification: qualification,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    //generated resume content.
    var resume = "\n    <h2><strong>Editable Resume</strong></h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong><span contenteditable = \"true\">".concat(name, "</span></p>\n    <p><strong>Email:</strong><span contenteditable = \"true\">").concat(email, "</span></p>\n    <p><strong>Phone:</strong><span contenteditable = \"true\">").concat(phone, "</span></p>\n\n    <h3>Qualification</h3>\n    <p contenteditable = \"true\">").concat(qualification, "</span></p>\n\n    <h3>Experience</h3>\n    <p contenteditable = \"true\">").concat(experience, "</span></p>\n\n    <h3>Skills</h3>\n    <p contenteditable = \"true\">").concat(skills, "</span></p>    \n    ");
    // Display generated resume
    formDisplayElement.innerHTML = resume;
    // Generate a shareable URL with username.
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display shareable link
    shareableLinkDiv.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
//PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('qualification').value =
                resumeData.qualification;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
