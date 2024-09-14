var toggleButton = document.getElementById('togglebutton');
var skillSec = document.getElementById('skills');
if (toggleButton && skillSec) {
    toggleButton.addEventListener('click', function () {
        if (skillSec.style.display === 'none') {
            skillSec.style.display = 'block';
            toggleButton.value = "Hide Skills";
        }
        else {
            skillSec.style.display = 'none';
            toggleButton.value = "Show Skills";
        }
    });
}
else {
    console.log("Required element not found in the DOM");
}
