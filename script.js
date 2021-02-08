document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('click', musicPlay);
}
document.addEventListener('wheel', musicPlay);

function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('wheel', musicPlay);
}