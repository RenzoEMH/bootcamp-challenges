class Reproductor {
    constructor() {
        this.audio = document.getElementById("audio");
        this.botonPlay = document.getElementById("play");
        this.botonPause = document.getElementById("pause");
    }

    play() {
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

    iniciar() {
        this.play();
    };

}
