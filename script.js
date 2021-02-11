document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('click', musicPlay);
}
document.addEventListener('scroll', musicPlay);

function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('scroll', musicPlay);
}