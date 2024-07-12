function openResume() {
    window.open('resume.pdf','blank_');
}
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggle-button');
    const button = document.getElementById('button');
    const h1Element = document.querySelector('h1');
    const h3Element = document.querySelectorAll('h3');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const body = document.body;
            if (body.style.backgroundColor === 'rgb(212, 163, 115)' || body.style.backgroundColor === '') {
                body.style.backgroundColor = '#023047'; 
                h1Element.style.color = '#023047';
                h3Element.forEach(function(h3){
                h3.style.color = '#023047';
                });
                button.style.backgroundColor='#023047';
            } else {
                body.style.backgroundColor = '#d4a373'; 
                h1Element.style.color = '#d4a373';
                h3Element.forEach(function(h3){
                h3.style.color = '#d4a373';
                });
                button.style.backgroundColor='#d4a373';
                
            }
        });
    } else {
        console.error('Element with ID "toggle-button" not found.');
    }
});



