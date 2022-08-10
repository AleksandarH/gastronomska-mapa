let data;

async function fetchData() {
  const url = "https://croatian-food-api.herokuapp.com/jela";
  let response = await fetch(url);
  data = await response.json();

  ///// DISPLAY INFORMATION
  for (const county of data) {
    //// Displays coutny name on mouse hover
    showCountyName(county);
    //// Calls functions if the ID of the clicked county matches with the ID of the county in the API data
    document.getElementById(county.id).addEventListener("click", function (e) {
      if (e.target.id === county.id) {
        //// turns on visibility
        addClasses();
        //// Adds text and image
        addText(county);
        //// Shows county name over hover
        showCountyName(county);

        //// Makes green stuff!
        green(county);
      }
    });
  }
  return data;
}

fetchData();
