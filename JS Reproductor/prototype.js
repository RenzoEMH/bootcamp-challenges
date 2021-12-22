const ReproductorPrototype = function () {
    this.audio = document.getElementById("audio");
}

ReproductorPrototype.prototype.play = function () {
    const botonPlay = document.getElementById("play");
    const botonPause = document.getElementById("pause");

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
}

ReproductorPrototype.prototype.start = function () {
    this.play();
}