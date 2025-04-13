document.body.style.fontFamily = "'Circular Std', sans-serif";
document.body.style.color = '#191818';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.minHeight = '100vh';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';

const backgroundLayer = document.querySelector('.background-layer');
backgroundLayer.style.position = 'fixed';
backgroundLayer.style.top = '0';
backgroundLayer.style.left = '0';
backgroundLayer.style.width = '100%';
backgroundLayer.style.height = '100%';
backgroundLayer.style.backgroundImage = "url('https://identity.iti.gov.eg/images/ITI%20logo.png')";
backgroundLayer.style.backgroundRepeat = 'no-repeat';
backgroundLayer.style.backgroundPosition = 'center';
backgroundLayer.style.backgroundSize = 'contain';
backgroundLayer.style.opacity = '0.1';
backgroundLayer.style.zIndex = '-1';

const header = document.querySelector('header');
// header.style.backgroundColor = 'rgba(3, 106, 255, 0.9)';
header.style.backgroundImage = 'linear-gradient(120deg, #ed10de 0%, #9405e7 100%)';
header.style.color = 'white';
header.style.padding = '20px';
header.style.textAlign = 'center';
header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

const container = document.querySelector('.container');
container.style.maxWidth = '800px';
container.style.minWidth = '800px'
container.style.margin = '40px auto';
container.style.padding = '20px';
container.style.textAlign = 'center';
container.style.flex = '1';
container.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
container.style.borderRadius = '10px';
container.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';

document.getElementById('year').textContent = new Date().getFullYear();
const footer = document.querySelector('footer');
footer.style.textAlign = 'center';
footer.style.padding = '20px';
footer.style.backgroundColor = 'rgba(25, 24, 24, 0.9)';
footer.style.color = 'white';
footer.style.marginTop = 'auto';


const form = document.querySelector('#feedbackForm');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '15px';

const formGroups = document.querySelectorAll('.form-group');
formGroups.forEach(group => {
    group.style.display = 'flex';
    group.style.flexDirection = 'column';
    group.style.alignItems = 'flex-start';
});

const labels = document.querySelectorAll('label');
labels.forEach(label => {
    label.style.fontWeight = 'bold';
    label.style.marginBottom = '5px';
});

const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '5px';
    input.style.fontSize = '16px';
});

const button = document.querySelector('button');
button.style.backgroundColor = '#036aff';
button.style.color = 'white';
button.style.padding = '12px';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.fontSize = '16px';
button.style.marginTop = '10px';
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#0251cc';
});
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#036aff';
});

const errorSpans = document.querySelectorAll('.error');
errorSpans.forEach(span => {
    span.style.color = 'red';
    span.style.fontSize = '14px';
    span.style.marginTop = '5px';
});


document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.querySelectorAll('.error').forEach(span => span.textContent = '');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;
    let isValid = true;
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    if (!rating) {
        document.getElementById('ratingError').textContent = 'Please select a rating';
        isValid = false;
    }
    if (!feedback) {
        document.getElementById('feedbackError').textContent = 'Feedback is required';
        isValid = false;
    }

    if (isValid) {
        const feedbackEntry = {
            name,
            email,
            rating,
            feedback,
            timestamp: new Date().toISOString()
        };
        let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
        feedbackList.push(feedbackEntry);
        localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('feedbackForm').reset();
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }

    window.location.href = '../sessionDetails/session.html';
});

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}