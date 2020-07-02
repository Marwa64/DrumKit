document.addEventListener("keydown", function(){
  if(event.keyCode === 65){
    document.getElementById("a").focus();
    var audio = new Audio('sounds/clap.wav');
    audio.play();
  }
  if(event.keyCode === 83){
    document.getElementById("s").focus();
    var audio = new Audio('sounds/hihat.wav');
    audio.play();
  }
  if(event.keyCode === 68){
    document.getElementById("d").focus();
    var audio = new Audio('sounds/kick.wav');
    audio.play();
  }
  if(event.keyCode === 70){
    document.getElementById("f").focus();
    var audio = new Audio('sounds/openhat.wav');
    audio.play();
  }
  if(event.keyCode === 71){
    document.getElementById("g").focus();
    var audio = new Audio('sounds/boom.wav');
    audio.play();
  }
  if(event.keyCode === 72){
    document.getElementById("h").focus();
    var audio = new Audio('sounds/ride.wav');
    audio.play();
  }
  if(event.keyCode === 74){
    document.getElementById("j").focus();
    var audio = new Audio('sounds/snare.wav');
    audio.play();
  }
  if(event.keyCode === 75){
    document.getElementById("k").focus();
    var audio = new Audio('sounds/tom.wav');
    audio.play();
  }
  if(event.keyCode === 76){
    document.getElementById("l").focus();
    var audio = new Audio("sounds/tink.wav");
    audio.play();
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
