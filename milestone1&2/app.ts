const toggleButton = document.getElementById('togglebutton') as HTMLButtonElement|null;
const skillSec = document.getElementById('skills') as HTMLUListElement|null;

if (toggleButton && skillSec) {
    toggleButton.addEventListener('click', () => {
        if(skillSec.style.display === 'none'){
            skillSec.style.display = 'block';
            toggleButton.value = "Hide Skills";
        }else{
            skillSec.style.display = 'none';
            toggleButton.value = "Show Skills";
        }
    })
}
else {
    console.log("Required element not found in the DOM");
    
}