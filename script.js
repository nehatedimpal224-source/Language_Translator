// Translation using MyMemory API (Free)
async function translateText() {
  let text = document.getElementById("inputText").value;
  let sourceLang = document.getElementById("sourceLang").value;
  let targetLang = document.getElementById("targetLang").value;

  if (!text) {
    alert("Please enter some text!");
    return;
  }

  let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${sourceLang}|${targetLang}`;

  let response = await fetch(url);
  let data = await response.json();

  let translated = data.responseData.translatedText;
  document.getElementById("outputText").innerText = translated;
}

// Copy Text Feature
function copyText() {
  let output = document.getElementById("outputText").innerText;
  navigator.clipboard.writeText(output);
  alert("Copied to Clipboard!");
}

// Text-to-Speech Feature
function speakText() {
  let text = document.getElementById("outputText").innerText;
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = document.getElementById("targetLang").value;
  window.speechSynthesis.speak(speech);
}
