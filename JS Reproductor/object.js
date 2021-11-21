const ReproductorObjeto = {
    botonPlay: document.getElementById("play"),
    botonPause: document.getElementById("pause"),
    audio: document.getElementById("audio"),

    play: function () {

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
    },

    start: function () {
        this.play();
    }
}