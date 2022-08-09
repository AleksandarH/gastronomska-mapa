async function fetchData() {
  const url = "https://croatian-food-api.herokuapp.com/jela";
  let response = await fetch(url);
  let data = await response.json();

  ///// DISPLAY INFORMATION
  for (const county of counties) {
    document.getElementById(county.id).addEventListener("click", function (e) {
      for (const el of data) {
        if (e.target.id == el.id) {
          //// turn on visibility
          information.classList.remove("invisible");
          sastojci.classList.remove("invisible");
          displayImage.classList.remove("invisible");

          ////
          zupanija.innerHTML = el.županija;
          jelo.innerHTML = el.jelo;
          recept.innerHTML = el.recept;
          sastojciText.innerHTML = el.sastojci.join(", "); //// This can be improved later on
          image.style.backgroundImage = `url(${el.slikaJela})`;
        }
      }
    });
  }
}

fetchData();
