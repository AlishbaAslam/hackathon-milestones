//Import form and displayed form element from html.
const form = document.getElementById('cv-form') as HTMLFormElement;
const formDisplayElement = document.getElementById('generated-resume') as HTMLDivElement;
const shareableLinkDiv = document.getElementById('shareable-link') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-url') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

//Form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

//User inputs

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const qualification = (document.getElementById('qualification') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // form data store in localStorage.

    const resumeData = {
    name,
    email,
    phone,
    qualification,
    experience,
    skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));

    //generated resume content.

    const resume = `
    <h2><strong>Editable Resume</strong></h2>
    <h3>Personal Information</h3>
    <p><strong>Name:</strong><span contenteditable = "true">${name}</span></p>
    <p><strong>Email:</strong><span contenteditable = "true">${email}</span></p>
    <p><strong>Phone:</strong><span contenteditable = "true">${phone}</span></p>

    <h3>Qualification</h3>
    <p contenteditable = "true">${qualification}</span></p>

    <h3>Experience</h3>
    <p contenteditable = "true">${experience}</span></p>

    <h3>Skills</h3>
    <p contenteditable = "true">${skills}</span></p>    
    `;

    // Display generated resume
    formDisplayElement.innerHTML = resume;
    // Generate a shareable URL with username.
    const shareableURL = 
    `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display shareable link
    shareableLinkDiv.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
     });

    //PDF download
    downloadPdfButton.addEventListener('click', () => {
    window.print()
    });

    // Prefill the form based on the username in the URL
    window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

if (username) {
    const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
username;
    (document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
    (document.getElementById('qualification') as HTMLTextAreaElement).value =
resumeData.qualification;
    (document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
    }
   }
}); 


