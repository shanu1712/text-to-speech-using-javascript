const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');

playButton.addEventListener('click', () => {
  playText(textInput.value);
});
function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = speedInput.value || 1;
  utterance.addEventListener('end', () => {
    textInput.disabled = false; //this event will make sure that text input become active again after text is successfully played
  });
  textInput.disabled = true; //will stop the text input while it is getting played//
  speechSynthesis.speak(utterance);
} ///this code will let the text input play

pauseButton.addEventListener('click', pauseText);

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

//stop button//
stopButton.addEventListener('click', stopText);

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
//now the text input is ready ,all the buttons are working fine//
//will add more functionality  //
