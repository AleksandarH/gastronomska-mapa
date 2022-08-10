const counties = [
  { id: "HR-01", title: "Zagrebačka županija" },
  { id: "HR-02", title: "Krapinsko-zagorska županija" },
  { id: "HR-03", title: "Sisačko-moslavačka županija" },
  { id: "HR-04", title: "Karlovačka županija" },
  { id: "HR-05", title: "Varaždinska županija" },
  { id: "HR-06", title: "Koprivničko-križevačka županija" },
  { id: "HR-07", title: "Bjelovarsko-bilogorska županija" },
  { id: "HR-08", title: "Primorsko-goranska županija" },
  { id: "HR-09", title: "Ličko-senjska županija" },
  { id: "HR-10", title: "Virovitičko-podravska županija" },
  { id: "HR-11", title: "Požeško-slavonska županija" },
  { id: "HR-12", title: "Brodsko-posavska županija" },
  { id: "HR-13", title: "Zadarska županija" },
  { id: "HR-14", title: "Osječko-baranjska županija" },
  { id: "HR-15", title: "Šibensko-kninska županija" },
  { id: "HR-16", title: "Vukovarsko-srijemska županija" },
  { id: "HR-17", title: "Splitsko-dalmatinska županija" },
  { id: "HR-18", title: "Istarska županija" },
  { id: "HR-19", title: "Dubrovačko-neretvanska županija" },
  { id: "HR-20", title: "Međimurska županija" },
  { id: "HR-21", title: "Grad Zagreb" },
];

const zupanija = document.getElementById("zupanija");
const jelo = document.getElementById("jelo");
const recept = document.getElementById("recept");
const image = document.getElementById("image");
const information = document.getElementById("information");
const sastojci = document.getElementById("sastojci");
const displayImage = document.getElementById("displayImageAndVideo");
const arrow = document.getElementById("arrow");

//// Prikaz imena zupanije hoverom miša
for (const county of counties) {
  document
    .getElementById(county.id)
    .addEventListener("mouseenter", function () {
      document.getElementById("imeZupanije").innerHTML = county.title;
    });
}

//// Function for adding css classes (Adding elements to the page)

function addClasses() {
  //// turns on visibility
  information.classList.remove("invisible");
  sastojci.classList.remove("invisible");
  displayImage.classList.remove("invisible");
  arrow.classList.remove("invisible");
}
