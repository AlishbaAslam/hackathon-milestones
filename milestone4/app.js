//Import form and displayed form element from html.
var form = document.getElementById('cv-form');
var formDisplayElement = document.getElementById('generated-resume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var qualification = document.getElementById('qualification').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resume = "\n    <h2><strong>Editable Resume</strong></h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong><span contenteditable = \"true\">".concat(name, "</span></p>\n    <p><strong>Email:</strong><span contenteditable = \"true\">").concat(email, "</span></p>\n    <p><strong>Phone:</strong><span contenteditable = \"true\">").concat(phone, "</span></p>\n\n    <h3>Qualification</h3>\n    <p contenteditable = \"true\">").concat(qualification, "</span></p>\n\n    <h3>Experience</h3>\n    <p contenteditable = \"true\">").concat(experience, "</span></p>\n\n    <h3>Skills</h3>\n    <p contenteditable = \"true\">").concat(skills, "</span></p>    \n    ");
    if (formDisplayElement) {
        formDisplayElement.innerHTML = resume;
    }
    else {
        console.error('field is missing');
    }
});
