document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = localStorage.getItem("@loggedInUser");
  const userData = JSON.parse(localStorage.getItem(`@user_${loggedInUser}`));

  const firstnameField = document.getElementById("profile-firstname");
  const lastnameField = document.getElementById("profile-lastname");
  const emailField = document.getElementById("profile-email");
  const cpfField = document.getElementById("profile-cpf");
  const dobField = document.getElementById("profile-dob");
  const usernameField = document.getElementById("profile-username");
  const passwordField = document.getElementById("profile-password");

  firstnameField.value = userData.firstname || "";
  lastnameField.value = userData.lastname || "";
  emailField.value = userData.email || "";
  cpfField.value = userData.cpf || "";
  dobField.value = userData.dob || "";
  usernameField.value = loggedInUser;

  document
    .getElementById("profile-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const newFirstname = firstnameField.value;
      const newLastname = lastnameField.value;
      const newEmail = emailField.value;
      const newCPF = cpfField.value;
      const newDOB = dobField.value;
      const newUsername = usernameField.value;
      const newPassword = passwordField.value;

      const updatedUserData = {
        ...userData,
        firstname: newFirstname,
        lastname: newLastname,
        email: newEmail,
        cpf: newCPF,
        dob: newDOB,
      };

      localStorage.setItem(
        `@user_${newUsername}`,
        JSON.stringify(updatedUserData)
      );
      if (loggedInUser !== newUsername) {
        localStorage.removeItem(`@user_${loggedInUser}`);
        localStorage.setItem("@loggedInUser", newUsername);
      }

      alert("Perfil atualizado com sucesso!");
      window.location.href = "../../pages/home/index.html";
    });
});
