document.addEventListener('DOMContentLoaded', () => {
    console.log('Main JS loaded');
    const getStartedButton = document.getElementById('get-started');
    getStartedButton.addEventListener('click', () => {
        window.open('https://docs.qumra.cloud/', '_blank');
    });
});