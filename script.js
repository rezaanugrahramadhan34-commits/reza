const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const wave = document.getElementById("wave");

playBtn.addEventListener("click", () => {

    if(audio.paused){

        audio.play();

        playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

        wave.classList.add("active");

    }else{

        audio.pause();

        playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

        wave.classList.remove("active");

    }

});

audio.addEventListener("ended", () => {

    playBtn.innerHTML =
    '<i class="fa-solid fa-play"></i>';

    wave.classList.remove("active");

});