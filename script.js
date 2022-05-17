console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let count = 0;

let songs = [
    { songName: "Charlie Puth-Attention", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "lewis Capaldi-Someone you Loved", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Anne-Marie feat. Doja Cat - To Be Young", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Charlie Puth - How Long", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Ed Sheeran - Shivers", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "James Bay - Let It Go", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Lewis Capaldi - Before You Go", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Pink Sweat$ - At My Worst", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "Sia - Cheap Trills", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
    { songName: "James Arthur - Say You Wont Let Go", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
]
// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        // `Harsh${id}`.style.opacity=1;
        
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        // `Harsh${id}`.style.opacity=0;
    }
})
