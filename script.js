// =====================
// Slider Otomatis
// =====================
const slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
    slides[current].classList.remove('active');

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add('active');
}, 4000);


// =====================
// Music Player
// =====================
const audioPlayer = document.getElementById('audioPlayer');
const songs = document.querySelectorAll('.song');

songs.forEach(song => {

    song.addEventListener('click', () => {

        const src = song.dataset.src;
        const icon = song.querySelector('i');

        // Jika lagu yang sama sedang diputar
        if (
            audioPlayer.src.includes(src) &&
            !audioPlayer.paused
        ) {
            audioPlayer.pause();
            icon.className = 'fa-solid fa-play';
            return;
        }

        // Reset semua icon
        document.querySelectorAll('.song i').forEach(i => {
            i.className = 'fa-solid fa-play';
        });

        // Putar lagu
        audioPlayer.src = src;
        audioPlayer.play();

        icon.className = 'fa-solid fa-pause';
    });

});

// Saat lagu selesai
audioPlayer.addEventListener('ended', () => {
    document.querySelectorAll('.song i').forEach(i => {
        i.className = 'fa-solid fa-play';
    });
});