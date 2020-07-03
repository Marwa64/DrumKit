const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const clap = document.querySelector('#clap');
const hihat = document.querySelector('#hihat');
const boom = document.querySelector('#boom');
const kick = document.querySelector('#kick');
const openhat = document.querySelector('#openhat');
const ride = document.querySelector('#ride');
const snare = document.querySelector('#snare');
const tom = document.querySelector('#tom');
const tink = document.querySelector('#tink');

var recordedChunks = [];
const mediaStreamDestination = audioContext.createMediaStreamDestination();

const track1 = audioContext.createMediaElementSource(clap);
const track2 = audioContext.createMediaElementSource(hihat);
const track3 = audioContext.createMediaElementSource(boom);
const track4 = audioContext.createMediaElementSource(kick);
const track5 = audioContext.createMediaElementSource(openhat);
const track6 = audioContext.createMediaElementSource(ride);
const track7 = audioContext.createMediaElementSource(snare);
const track8 = audioContext.createMediaElementSource(tom);
const track9 = audioContext.createMediaElementSource(tink);

const mediaRecorder = new MediaRecorder(mediaStreamDestination.stream);
mediaRecorder.ondataavailable = handleDataAvailable;

var rec = document.querySelector("#rec");
rec.addEventListener('click', function(){
  if (this.dataset.recording === 'false'){
    mediaRecorder.start();
    console.log("recording!");
    this.dataset.recording = 'true';
    this.classList.remove("btn-success");
    this.classList.add("btn-danger");
    this.innerHTML = "<h4>Stop Recording</h4>";
  } else {
    this.dataset.recording = 'false'
    this.classList.remove("btn-danger");
    this.classList.add("btn-success");
    this.innerHTML = "<h4>Start Recording</h4>";
    mediaRecorder.stop();
    handleDataAvailable();
  }
})
function handleDataAvailable(event) {
  console.log("data-available");
  recordedChunks.push(event.data);
  console.log(recordedChunks);
  download();
}
function download() {
  var blob = new Blob(recordedChunks, {
    type: "video/webm"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "DrumKit.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}

const gainNode1 = audioContext.createGain();
const gainNode2 = audioContext.createGain();
const gainNode3 = audioContext.createGain();

track1.connect(gainNode1).connect(mediaStreamDestination);
track2.connect(gainNode2).connect(mediaStreamDestination);
track3.connect(gainNode3).connect(mediaStreamDestination);
track4.connect(gainNode1).connect(mediaStreamDestination);
track5.connect(gainNode2).connect(mediaStreamDestination);
track6.connect(gainNode3).connect(mediaStreamDestination);
track7.connect(gainNode1).connect(mediaStreamDestination);
track8.connect(gainNode2).connect(mediaStreamDestination);
track9.connect(gainNode3).connect(mediaStreamDestination);

track1.connect(gainNode1).connect(audioContext.destination);
track2.connect(gainNode2).connect(audioContext.destination);
track3.connect(gainNode3).connect(audioContext.destination);
track4.connect(gainNode1).connect(audioContext.destination);
track5.connect(gainNode2).connect(audioContext.destination);
track6.connect(gainNode3).connect(audioContext.destination);
track7.connect(gainNode1).connect(audioContext.destination);
track8.connect(gainNode2).connect(audioContext.destination);
track9.connect(gainNode3).connect(audioContext.destination);

/*const volumeClap = document.querySelector("#volumeClap");
volumeClap.addEventListener('input', function(){
  gainNode1.gain.value = this.value;
});
const volumeHithat = document.querySelector("#volumeHithat");
volumeHithat.addEventListener('input', function(){
  gainNode2.gain.value = this.value;
});
const volumeBoom = document.querySelector("#volumeBoom");
volumeBoom.addEventListener('input', function(){
  gainNode3.gain.value = this.value;
});*/

function playSound(audio){
 if (audioContext.state === 'suspended'){
   audioContext.resume().then(() => {
     console.log('playback resumed!');
   });
 }
 audio.pause();
 audio.currentTime = 0;
 audio.play();
}

document.addEventListener("keydown", function(){
  document.querySelector('.rippleBackground').classList.add("ripple");
  setTimeout(function(){document.querySelector('.rippleBackground').classList.remove("ripple");}, 1000);
  if(event.keyCode === 65){
    playSound(clap);
    document.getElementById("a").focus();
  }
  if(event.keyCode === 83){
    playSound(hihat);
    document.getElementById("s").focus();
  }
  if(event.keyCode === 68){
    playSound(kick);
    document.getElementById("d").focus();
  }
  if(event.keyCode === 70){
    playSound(openhat);
    document.getElementById("f").focus();
  }
  if(event.keyCode === 71){
    playSound(boom);
    document.getElementById("g").focus();
  }
  if(event.keyCode === 72){
    playSound(ride);
    document.getElementById("h").focus();
  }
  if(event.keyCode === 74){
    playSound(snare);
    document.getElementById("j").focus();
  }
  if(event.keyCode === 75){
    playSound(tom);
    document.getElementById("k").focus();
  }
  if(event.keyCode === 76){
    playSound(tink);
    document.getElementById("l").focus();
  }
});

document.addEventListener("keyup", function(){
  if(event.keyCode === 65){
    document.getElementById("a").blur();
  }
  if(event.keyCode === 83){
    document.getElementById("s").blur();
  }
  if(event.keyCode === 68){
    document.getElementById("d").blur();
  }
  if(event.keyCode === 70){
    document.getElementById("f").blur();
  }
  if(event.keyCode === 71){
    document.getElementById("g").blur();
  }
  if(event.keyCode === 72){
    document.getElementById("h").blur();
  }
  if(event.keyCode === 74){
    document.getElementById("j").blur();
  }
  if(event.keyCode === 75){
    document.getElementById("k").blur();
  }
  if(event.keyCode === 76){
    document.getElementById("l").blur();
  }
});
