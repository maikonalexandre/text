//--------------------------------------------->>>>>
const videoElement = document.querySelector("#video");

function startVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      videoElement.srcObject = stream;
    })
    .catch((err) => {
      console.log(err);
    });
}
window.addEventListener("DOMContentLoaded", startVideo);
// ---------------------------------->>>>

