function updateTime() {
  let losAngelesElement = document.querySelector("#Los-Angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = losAngelesCurrentTime.format(
      "h:mm:ss [<strong>]A[</strong>]"
    );
  }

  let capeTownElement = document.querySelector("#Cape-Town");
  if (capeTownElement) {
    let capeTownDate = capeTownElement.querySelector(".date");
    let capeTownTime = capeTownElement.querySelector(".time");
    let capeTownCurrentTime = moment().tz("Africa/Cape Town");

    capeTownDate.innerHTML = capeTownCurrentTime.format("MMMM Do YYYY");
    capeTownTime.innerHTML = capeTownCurrentTime.format(
      "h:mm:ss [<strong>]A[</strong>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `  
        <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>`;
}
updateTime();
setInterval(updateTime, 1000);
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
