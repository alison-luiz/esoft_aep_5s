document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout");

  console.log(logoutButton);

  if (logoutButton) {
    logoutButton.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("@loggedInUser");
      window.location.href = "../../index.html";
    });
  }
});
