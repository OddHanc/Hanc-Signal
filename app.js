const terminal = document.getElementById("terminal-text");
const button = document.getElementById("scan-button");
const signalCount = document.getElementById("signal-count");

let signal = 0;

const anomalies = [
  "VOID RESPONSE DETECTED",
  "UNREGISTERED ENTITY WATCHING",
  "SIGNAL DISTORTION INCREASED",
  "HANC REMEMBERS YOU",
  "UNSTABLE TRANSMISSION",
  "SILENT NODE DISCOVERED",
  "ECHO DETECTED",
  "ANOMALY ACCEPTED",
  "UNKNOWN FREQUENCY",
  "THE SIGNAL BREATHES"
];

button.addEventListener("click", () => {

  signal++;

  signalCount.innerText = signal;

  const random =
    anomalies[Math.floor(Math.random() * anomalies.length)];

  terminal.innerText = random;

  button.style.opacity = "0.6";

  setTimeout(() => {
    button.style.opacity = "1";
  }, 120);

});