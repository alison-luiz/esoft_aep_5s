document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstname = document.getElementById("signup-firstname").value;
  const lastname = document.getElementById("signup-lastname").value;
  const email = document.getElementById("signup-email").value;
  const cpf = document.getElementById("signup-cpf").value;
  const dob = document.getElementById("signup-dob").value;
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (localStorage.getItem(`@user_${username}`)) {
    alert("Usuário já cadastrado!");
  } else {
    const userData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      cpf: cpf,
      dob: dob,
      password: password,
    };

    localStorage.setItem(`@user_${username}`, JSON.stringify(userData));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "../../pages/user/login.html";
  }
});
