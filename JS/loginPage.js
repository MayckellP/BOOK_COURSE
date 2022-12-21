const mail = document.getElementById("mail");
const password = document.getElementById("password");
const form = document.getElementById("form");
const btnLog = document.getElementById("btn-log");
const btnVld = document.getElementById("btn-val");
var mailSaved;
var nameSaved;

//* -------------------------------------------------REDIRECTION SIGN UP
signUp = () => {
  window.location.href = "RegisterPage.html";
};

logedPage = () => {
  window.location.href = "LogedPage.html";
};

//* -------------------------------------------------VALIDATE ACCOUNT
validateAccount = () => {
  //debugger;
  let passwordSaved;
  if (!mail.value || !password.value) {
    alert("Müssen Sie das Formular asufüllen!");
  } else {
    let bdUsers = JSON.parse(localStorage.DB_USERS);
    for (let i = 0; i <= bdUsers.length; i++) {
      if (mail.value === bdUsers[i].mail) {
        mailSaved = bdUsers[i].mail;
        nameSaved = `${bdUsers[i].name} ${bdUsers[i].lastname}`;
        passwordSaved = bdUsers[i].password;
        if (mail.value === mailSaved && password.value === passwordSaved) {
          //btnLog.style.visibility = "visible";
          btnVld.style.background = "green";
          btnVld.style.borderColor = "black";
          btnVld.value = "Login";
          btnVld.onclick = " ";
          btnVld.addEventListener("click", logedPage);
          localStorage.setItem("KEY_MAIL", mailSaved);
          localStorage.setItem("KEY_NAME", nameSaved);
        } else {
          alert("Credenciales Incorrectas");
          i = bdUsers.length;
          form.reset();
        }
      } else {
        if (i === bdUsers.length) {
          btnVld.style.background = "red";
          btnVld.style.borderColor = "black";
          btnVld.value = "Sign up";
          alert("Brauchen Sie anmelden");
          btnVld.onclick = " ";
          btnVld.addEventListener("click", signUp);
        }
      }
    }
  }
};
