const botonPlay = document.getElementById("play");
const botonPause = document.getElementById("pause");
const audio = document.getElementById("audio");

const play = () => {
    botonPlay.addEventListener('click', () => {
        audio.play();
        botonPlay.style.display = "none"
        botonPause.style.display = "block"
    });
    botonPause.addEventListener("click", () => {
        audio.pause();
        botonPlay.style.display = "block"
        botonPause.style.display = "none"
    });
};

const start = () => {
    play();
}
