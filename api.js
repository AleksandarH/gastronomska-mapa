function fetchData() {
  fetch("./croatian_foods/api/recipe-api/db.json")
    .then((response) => response.json())
    .then((data) => {
      ///// DISPLAY INFORMATION
      for (let i = 0; i < data.jela.length; i++) {
        //// Displays coutny name on mouse hover
        showCountyName(data.jela[i]);
        //// Calls functions if the ID of the clicked county matches with the ID of the county in the API data
        document
          .getElementById(data.jela[i].id)
          .addEventListener("click", function (e) {
            if (e.target.id === data.jela[i].id) {
              //// turns on visibility
              addClasses();
              //// Adds text and image
              addText(data.jela[i]);
            }
          });
      }
    })
    .catch((error) => console.log(error.toString()));
}

fetchData();
