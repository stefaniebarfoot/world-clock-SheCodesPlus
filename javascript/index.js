function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let currentTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = currentTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = currentTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisCurrentTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisCurrentTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}
updateTime();
setInterval(updateTime, 1000);
