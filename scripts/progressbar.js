window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    const progressBar = document.getElementById('myBar');
    const progressText = document.getElementById('progressText');

    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.scrollY;

    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '% læst';
}
