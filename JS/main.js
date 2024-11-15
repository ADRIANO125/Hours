var hrs = document.getElementById("hrs");
var mins = document.getElementById("min");
var secs = document.getElementById("sec");

setInterval(() => {
  var currentTime = new Date();

  let hour = currentTime.getHours();


  if (hour < 10) {
    hrs.innerHTML = "0" + hour;
  } else if (hour > 12) {

    hour -= 12;
    hrs.innerHTML = hour < 10 ? "0" + hour : hour;
  } else {
    hrs.innerHTML = hour;
  }

  if (currentTime.getMinutes() < 10) {
    mins.innerHTML = "0" + currentTime.getMinutes();
  } else {
    mins.innerHTML = currentTime.getMinutes();
  }

  if (currentTime.getSeconds() < 10) {
    secs.innerHTML = "0" + currentTime.getSeconds();
  } else {
    secs.innerHTML = currentTime.getSeconds();
  }
}, 1000);
