console.log("welcome to spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mpeg');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Tera Sang Yara - Rustom", filePath: "1.mpeg", coverPaths: "1.jpg"},
    {songName: "Lut Gaya - Song", filePath: "2.mpeg", coverPaths: "2.jpg"},
    {songName: "Humko Dewana Kar gaya", filePath: "3.mpeg", coverPaths: "3.jpg"},
    {songName: "Rata lambaya lambaya RE", filePath: "4.mpeg", coverPaths: "4.jpg"},
    {songName: "TU ADDA HA TU MOHABAT", filePath: "5.mpeg", coverPaths: "5.jpg"},
    {songName: "KGF - Chapter-2 song", filePath: "6.mpeg", coverPaths: "6.jpg"},
    {songName: "KGF - Chapter-1 song", filePath: "7.mpeg", coverPaths: "7.jpg"},
    {songName: "Naccho Naccho - RRR", filePath: "8.mpeg", coverPaths: "8.jpg"},
    {songName: "Mehbooba song - KGF", filePath: "9.mpeg", coverPaths: "9.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();

// Handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =  `${songIndex+1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
       
    
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex+= 1;
    }
    audioElement.src =  `${songIndex+1}.mpeg`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex-= 1;
    }
    audioElement.src =  `${songIndex+1}.mpeg`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})