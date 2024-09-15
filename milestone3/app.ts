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
    <h2><strong>Resume</strong></h2>
    <h3>Personal Information</h3>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>

    <h3>Qualification</h3>
    <p>${qualification}</p>

    <h3>Skills</h3>
    <p>${skills}</p>    
    `;
    if(formDisplayElement){
        formDisplayElement.innerHTML = resume;
    }else{
        console.error('field is missing');
    }
}); 