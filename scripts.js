document.addEventListener("keydown", function(){
  document.querySelector('.rippleBackground').classList.add("ripple");
  setTimeout(function(){document.querySelector('.rippleBackground').classList.remove("ripple");}, 1000);
  if(event.keyCode === 65){
    clap();
    document.getElementById("a").focus();
  }
  if(event.keyCode === 83){
    hihat();
    document.getElementById("s").focus();
  }
  if(event.keyCode === 68){
    kick()
    document.getElementById("d").focus();
  }
  if(event.keyCode === 70){
    openhat();
    document.getElementById("f").focus();
  }
  if(event.keyCode === 71){
    boom();
    document.getElementById("g").focus();
  }
  if(event.keyCode === 72){
    ride();
    document.getElementById("h").focus();
  }
  if(event.keyCode === 74){
    snare();
    document.getElementById("j").focus();
  }
  if(event.keyCode === 75){
    tom();
    document.getElementById("k").focus();
  }
  if(event.keyCode === 76){
    tink();
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

function boom(){
  var audio = new Audio('sounds/boom.wav');
  audio.play();
}
function clap(){
  var audio = new Audio('sounds/clap.wav');
  audio.play();
}
function hihat(){
  var audio = new Audio('sounds/hihat.wav');
  audio.play();
}
function kick(){
  var audio = new Audio('sounds/kick.wav');
  audio.play();
}
function openhat(){
  var audio = new Audio('sounds/openhat.wav');
  audio.play();
}
function ride(){
  var audio = new Audio('sounds/ride.wav');
  audio.play();
}
function snare(){
  var audio = new Audio('sounds/snare.wav');
  audio.play();
}
function tink(){
  var audio = new Audio("sounds/tink.wav");
  audio.play();
}
function tom(){
  var audio = new Audio('sounds/tom.wav');
  audio.play();
}
var recording = false;
var record = document.querySelector("#record")
record.addEventListener("click", function(){
  if (recording === false){
    record.classList.remove("btn-success");
    record.classList.add("btn-danger");
    record.innerHTML = "<h4>Stop Recording</h4>";
    recording = true;

    var mediaStream = document.querySelector("#audio1").captureStream();
    var recorder = RecordRTC(mediaStream, {
  type: 'audio'
});

  } else {
    record.classList.add("btn-success");
    record.classList.remove("btn-danger");
    record.innerHTML = "<h4>Start Recording</h4>";
    recording = false;
  }
})
