const zupanija = document.getElementById("zupanija");
const jelo = document.getElementById("jelo");
const recept = document.getElementById("recept");
const image = document.getElementById("image");
const information = document.getElementById("information");
const sastojci = document.getElementById("sastojci");
const displayImage = document.getElementById("displayImageAndVideo");
const arrow = document.getElementById("arrow");
const land = document.getElementsByClassName("land");
const dayNight = document.getElementById("dayNight");
const body = document.body;
const nav = document.getElementsByTagName("nav");
const nMode = document.getElementById("nightMode");
const dropdownMenu = document.getElementById("dropdownMenu");
const options = document.getElementsByTagName("option");

//// Prikaz imena zupanije hoverom miša

function showCountyName(county) {
  document
    .getElementById(county.id)
    .addEventListener("mouseenter", function () {
      document.getElementById("imeZupanije").innerHTML = county.županija;
    });
}

//// Function for adding css classes (Adding elements to the page)

function addClasses() {
  information.classList.remove("invisible");
  sastojci.classList.remove("invisible");
  displayImage.classList.remove("invisible");
  arrow.classList.remove("invisible");
}

//// Function for adding text and image

function addText(el) {
  zupanija.innerHTML = el.županija;
  jelo.innerHTML = el.jelo;
  recept.innerHTML = el.recept;
  sastojciText.innerHTML = el.sastojci.join(", "); //// This can be improved later on
  image.src = el.slikaJela;
}
