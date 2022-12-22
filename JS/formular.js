let naame = document.getElementById("name");
let lastName = document.getElementById("lastName");
let genMan = document.getElementById("man");
let genWoman = document.getElementById("woman");
let mail = document.getElementById("mail");
let birthday = document.getElementById("date");
let telefon = document.getElementById("telefon");
let addresse = document.getElementById("addresse");
let plz = document.getElementById("plz");
let city = document.getElementById("city");
let language = document.getElementById("idiom");
let level = document.getElementById("level");
let starDate = document.getElementById("start-date");
let modality = document.getElementById("modality");
let comment = document.getElementById("comment");
let verJa = document.getElementById("verJa");
let verNein = document.getElementById("verNein");
let formular = document.getElementById("form");
let btnVerify = document.getElementById("btn-verify");
let count = document.getElementById("count");
let nummer = document.getElementById("nummer");
var countNummer = JSON.parse(
  localStorage.getItem("DB_ONLINE_ANMELDUNG")
).length;

let modalForm = document.getElementById("modal-form");

let Online_Anmeldungen = [];
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

saveAnmeldung = () => {
  if (
    !naame.value ||
    !lastName.value ||
    !mail.value ||
    !birthday.value ||
    !telefon.value ||
    !addresse.value ||
    !plz.value ||
    !city.value ||
    !language.value ||
    !level.value ||
    !starDate.value ||
    !modality.value
  ) {
    alert("Müssen Sie das Formular asufüllen!");
  } else {
    let userAnmeldung = {
      name: `${naame.value} ${lastName.value}`,
      mail: mail.value,
      birthday: birthday.value,
      telefon: telefon.value,
      addresse: `${addresse.value}, ${plz.value} ${city.value}`,
      language: idiom.value,
      level: level.value,
      start: starDate.value,
      modality: modality.value,
      comment: comment.value,
      reservation: [generateID()],
    };
    Online_Anmeldungen.push(userAnmeldung);
    localStorage.setItem(
      "DB_ONLINE_ANMELDUNG",
      JSON.stringify(Online_Anmeldungen)
    );
    Online_Anmeldungen = JSON.parse(
      localStorage.getItem("DB_ONLINE_ANMELDUNG")
    );
    console.log(Online_Anmeldungen);
    console.log(JSON.parse(localStorage.getItem("DB_ONLINE_ANMELDUNG")));
    countNummer = JSON.parse(
      localStorage.getItem("DB_ONLINE_ANMELDUNG")
    ).length;
    formular.reset();
    notifyCourse();
  }

  showConfirm = () => {
    let kurs = `${Online_Anmeldungen[0].language} ${Online_Anmeldungen[0].level} ${Online_Anmeldungen[0].modality}`;

    document.getElementById("nameVerify").value = Online_Anmeldungen[0].name;
    document.getElementById("mailVerify").value =
      Online_Anmeldungen[0].addresse;
    document.getElementById("kursVerify").value = kurs;
    document.getElementById("startVerify").value = Online_Anmeldungen[0].start;
    document.getElementById("commentVerify").value =
      Online_Anmeldungen[0].comment;
  };

  clearVerifyForm = () => {
    modalForm.reset();
  };
};

notifyCourse = () => {
  if (countNummer > 1) {
    count.style.visibility = "visible";
    nummer.textContent = countNummer - 1;
    btnVerify.style.visibility = "visible";
  }
};

localStorage.setItem("DB_ONLINE_ANMELDUNG", JSON.stringify(Online_Anmeldungen));
Online_Anmeldungen = JSON.parse(localStorage.getItem("DB_ONLINE_ANMELDUNG"));
notifyCourse();
