const musicList = [
    {
        title: "Música 1",
        src: "music/music1.mp3",
        cover: "images/music1.jpg"
    },
    {
        title: "Música 2",
        src: "music/music2.mp3",
        cover: "images/music2.jpg"
    },
    {
        title: "Música 3",
        src: "music/music3.mp3",
        cover: "images/music3.jpg"
    }
];

let currentIndex = 0;

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const playButton = document.getElementById('play');

function loadMusic(index) {
    audio.src = musicList[index].src;
    title.textContent = musicList[index].title;
    cover.src = musicList[index].cover;
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
}

function prevMusic() {
    currentIndex = (currentIndex - 1 + musicList.length) % musicList.length;
    loadMusic(currentIndex);
    audio.play();
    playButton.textContent = 'Pause';
}

function nextMusic() {
    currentIndex = (currentIndex + 1) % musicList.length;
    loadMusic(currentIndex);
    audio.play();
    playButton.textContent = 'Pause';
}

audio.addEventListener('ended', nextMusic);

loadMusic(currentIndex);
