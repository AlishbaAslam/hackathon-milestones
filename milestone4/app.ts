//Import form and displayed form element from html.
const form = document.getElementById('cv-form') as HTMLFormElement;
const formDisplayElement = document.getElementById('generated-resume') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const qualification = (document.getElementById('qualification') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

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
    if(formDisplayElement){
        formDisplayElement.innerHTML = resume;
    }else{
        console.error('field is missing');
    }
}); 


