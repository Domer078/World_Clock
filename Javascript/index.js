function updateTime() {
  let losAngelesElement = document.querySelector("#Los-Angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesCurrentTime.format(
    "h:mm:ss [<strong>A</strong>]"
  );

  let capeTownElement = document.querySelector("#Cape-Town");
  let capeTownDate = capeTownElement.querySelector(".date");
  let capeTownTime = capeTownElement.querySelector(".time");
  let capeTownCurrentTime = moment().tz("Africa/Cape Town");

  capeTownDate.innerHTML = capeTownCurrentTime.format("MMMM Do YYYY");
  capeTownTime.innerHTML = capeTownCurrentTime.format(
    "h:mm:ss [<strong>A</strong>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
