document.getElementById("login-form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedUserData = localStorage.getItem(`@user_${username}`);

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    const storedPasswordHash = userData.password;

    if (verifyPassword(password, storedPasswordHash)) {
      localStorage.setItem("@loggedInUser", username);
      window.location.href = "../../pages/home/index.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  } else {
    alert("Usuário ou senha incorretos!");
  }
});

function verifyPassword(password, storedPasswordHash) {
  return password === storedPasswordHash;
}
