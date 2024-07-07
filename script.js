document.getElementById('sign-in-button').addEventListener('click', function(event) {
    const button = event.target;
    button.style.position = 'absolute';
    button.style.transition = 'all 0.5s ease';

    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    const randomRotate = Math.random() * 360;

    button.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.tagName === 'BUTTON') {
        window.location.href = 'rickroll/5 Rickroll in One Video.mp4';
    }
});