const speech = new SpeechSynthesisUtterance();
const voiceList = document.querySelector("select");
const speakBtn = document.querySelector("button");
function loadVoices() {
  const voices = window.speechSynthesis.getVoices();
  voiceList.innerHTML = "";
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.text = `${voice.name} (${voice.lang})`;
    voiceList.appendChild(option);
  });