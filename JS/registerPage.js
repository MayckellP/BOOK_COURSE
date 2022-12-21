const namee = document.getElementById("name");
const vorname = document.getElementById("vorname");
const mail = document.getElementById("mail");
const vldMail = document.getElementById("vld-email");
const age = document.getElementById("age");
const password = document.getElementById("password");
const number = document.getElementById("number");
const form = document.getElementById("form");
const btnSubmit = document.getElementById("btn-submit");

let Users = [];

//* -------------------------------------------------GENERATE ID
generateID = () => {
  const id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
  return id;
};

//* -------------------------------------------------CREATE / POST
newUser = () => {
  Users = JSON.parse(localStorage.getItem("DB_USERS")); //!-------------------------------------- ME MANDA LA INFORMACION A MI ARRAY (Users)
  let user = {
    id: generateID(),
    name: namee.value,
    lastname: vorname.value,
    age: age.value,
    mail: mail.value,
    password: password.value,
    number: number.value,
  };
  Users.push(user); //! --------------------------------------------------------------------------ALMACENA LA INFORMACION DEL INPUT HACIA MI ARRAY (Users)
  localStorage.setItem("DB_USERS", JSON.stringify(Users)) || []; //! ---------------------------------------- GUARDA INFORMACION DE MI ARRAY EN EL LOCALSTORAGE
  Users = JSON.parse(localStorage.getItem("DB_USERS")); //!-------------------------------------- ME MANDA LA INFORMACION A MI ARRAY (Users)
  form.reset();
};
//* -------------------------------------------------DELETE / DELETE
deleteUser = () => {};

//* -------------------------------------------------UPDATE / PUT
deleteUser = () => {};

//* -------------------------------------------------REGISTER
newRegister = () => {
  if (
    !namee.value ||
    !vorname ||
    !mail.value ||
    !vldMail.value ||
    !age.value ||
    !password.value ||
    !number.value
  ) {
    alert("Müssen Sie das Formular asufüllen!");
  } else {
    let mailTraido = JSON.parse(localStorage.DB_USERS);
    for (let i = 0; i < mailTraido.length; i++) {
      if (mail.value === mailTraido[i].mail) {
        alert("Ese correo ya se encuentra registrado!");
      } else {
        console.log("Usuario registrado");
        i = mailTraido.length;
        newUser();
      }
    }
  }
};

//* -------------------------------------------------READ / GET
showAllUsers = () => {
  console.log(Users);
};
