var currentBtn = '';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const clap = document.querySelector('#aAudio');
const hihat = document.querySelector('#sAudio');
const boom = document.querySelector('#gAudio');
const kick = document.querySelector('#dAudio');
const openhat = document.querySelector('#fAudio');
const ride = document.querySelector('#hAudio');
const snare = document.querySelector('#jAudio');
const tom = document.querySelector('#kAudio');
const tink = document.querySelector('#lAudio');

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

track1.connect(mediaStreamDestination);
track2.connect(mediaStreamDestination);
track3.connect(mediaStreamDestination);
track4.connect(mediaStreamDestination);
track5.connect(mediaStreamDestination);
track6.connect(mediaStreamDestination);
track7.connect(mediaStreamDestination);
track8.connect(mediaStreamDestination);
track9.connect(mediaStreamDestination);

track1.connect(audioContext.destination);
track2.connect(audioContext.destination);
track3.connect(audioContext.destination);
track4.connect(audioContext.destination);
track5.connect(audioContext.destination);
track6.connect(audioContext.destination);
track7.connect(audioContext.destination);
track8.connect(audioContext.destination);
track9.connect(audioContext.destination);

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

document.addEventListener("keydown", playKey);
function playKey(){
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
}

document.addEventListener("keyup", stopPlaying);
function stopPlaying(){
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
}

function saveSettings(){
  closeModal();
  if (currentBtn === 'a'){
    var name = document.querySelector("#name").value;
    if (name != ""){
      document.querySelector("#btnA").innerHTML = name;
    }
    const selectedFile = document.getElementById('file').files[0];
    console.log(selectedFile);
    $("#aSrc").attr("src", URL.createObjectURL(selectedFile));
    document.getElementById("aAudio").load();
  }
  if (currentBtn === 's'){
    var name = document.querySelector("#name").value;
    if (name != ""){
      document.querySelector("#btnS").innerHTML = name;
    }
    const selectedFile = document.getElementById('file').files[0];
    console.log(selectedFile);
    $("#sSrc").attr("src", URL.createObjectURL(selectedFile));
    document.getElementById("sAudio").load();
  }
  if (currentBtn === 'd'){
    var name = document.querySelector("#name").value;
    if (name != ""){
      document.querySelector("#btnD").innerHTML = name;
    }
    const selectedFile = document.getElementById('file').files[0];
    console.log(selectedFile);
    $("#dSrc").attr("src", URL.createObjectURL(selectedFile));
    document.getElementById("dAudio").load();
  }
  if (currentBtn === 'f'){
    var name = document.querySelector("#name").value;
    if (name != ""){
      console.log(name);
      document.querySelector("#btnF").innerHTML = name;
    }
    const selectedFile = document.getElementById('file').files[0];
    console.log(selectedFile);
    $("#fSrc").attr("src", URL.createObjectURL(selectedFile));
    document.getElementById("fAudio").load();
  }
  if (currentBtn === 'g'){
    var name = document.querySelector("#name").value;
    if (name != ""){
      console.log(name);
      document.querySelector("#btnG").innerHTML = name;
    }
    const selectedFile = document.getElementById('file').files[0];
    console.log(selectedFile);
    $("#gSrc").attr("src", URL.createObjectURL(selectedFile));
    document.getElementById("gAudio").load();
  }
  if (currentBtn === 'h'){
    var name = document.querySelector("#name").value;
    if (name != ""){
      console.log(name);
      document.querySelector("#btnH").innerHTML = name;
    }
    const selectedFile = document.getElementById('file').files[0];
    console.log(selectedFile);
    $("#hrc").attr("src", URL.createObjectURL(selectedFile));
    document.getElementById("hAudio").load();
  }
  if (currentBtn === 'j'){
    var name = document.querySelector("#name").value;
    if (name != ""){
      console.log(name);
      document.querySelector("#btnJ").innerHTML = name;
    }
    const selectedFile = document.getElementById('file').files[0];
    console.log(selectedFile);
    $("#jSrc").attr("src", URL.createObjectURL(selectedFile));
    document.getElementById("jAudio").load();
  }
  if (currentBtn === 'k'){
    var name = document.querySelector("#name").value;
    if (name != ""){
      console.log(name);
      document.querySelector("#btnK").innerHTML = name;
    }
    const selectedFile = document.getElementById('file').files[0];
    console.log(selectedFile);
    $("#kSrc").attr("src", URL.createObjectURL(selectedFile));
    document.getElementById("kAudio").load();
  }
  if (currentBtn === 'l'){
    var name = document.querySelector("#name").value;
    if (name != ""){
      console.log(name);
      document.querySelector("#btnL").innerHTML = name;
    }
    const selectedFile = document.getElementById('file').files[0];
    console.log(selectedFile);
    $("#lSrc").attr("src", URL.createObjectURL(selectedFile));
    document.getElementById("lAudio").load();
  }
}
function setCurrentBtn(value){
    currentBtn=value;
    console.log(currentBtn);
    document.removeEventListener("keydown", playKey);
    document.removeEventListener("keyup", stopPlaying);
}
var toggleSettings = document.querySelector("#toggleSettings");
toggleSettings.addEventListener('click', function(){
  if (this.dataset.visible === 'false'){
    var settings = document.querySelectorAll("a");
    for (i = 0; i < settings.length; i++) {
      settings[i].style.visibility = "visible";
    }
    this.dataset.visible = 'true';
  } else {
    var settings = document.querySelectorAll("a");
    for (i = 0; i < settings.length; i++) {
      settings[i].style.visibility = "hidden";
    }
    this.dataset.visible = 'false';
  }
});

function closeModal(){
  document.querySelector("#name").value = "";
  document.addEventListener("keydown", playKey);
  document.addEventListener("keyup", stopPlaying);
}
