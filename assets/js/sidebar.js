document.addEventListener("DOMContentLoaded", function () {
  fetch("../../assets/html/sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;
    });

  fetch("../../pages/lighthouse/desktop.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("teste").innerHTML = data;
    });
});
