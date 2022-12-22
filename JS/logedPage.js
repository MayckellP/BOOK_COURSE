var newLanguage = document.getElementById("newLanguage");
var newMail = document.getElementById("newMail");
var newModality = document.getElementById("newModality");
var newLevel = document.getElementById("newLevel");
var newStart = document.getElementById("newStart");
var form = document.getElementById("modal-form");

var newID;
var Online_Anmeldungen = JSON.parse(
  localStorage.getItem("DB_ONLINE_ANMELDUNG")
);
var DB_Users = JSON.parse(localStorage.getItem("DB_USERS"));
var mailSaved = localStorage.getItem("KEY_MAIL");
var nameSaved = localStorage.getItem("KEY_NAME");
var User_Anmeldungen = [];
var newDB_Anmeldungen;
var reservOld;
var reservNew;

deleteReservation = (index) => {
  User_Anmeldungen.splice(index, 1);
  showReport();
  sendtoLocalStorage();
};

showReport = () => {
  document.getElementById("info-global2").innerHTML = " ";
  for (let i = 0; i < User_Anmeldungen.length; i++) {
    var image;
    if (User_Anmeldungen[i].language === "deutsch") {
      image = "../Media/Images/DE-loged.jpg";
    } else if (User_Anmeldungen[i].language === "englisch") {
      image = "../Media/Images/EN-loged.webp";
    } else if (User_Anmeldungen[i].language === "italianisch") {
      image = "../Media/Images/IT-loged.jpg";
    } else if (User_Anmeldungen[i].language === "französich") {
      image = "../Media/Images/FR-loged.jpg";
    } else if (User_Anmeldungen[i].language === "spanisch") {
      image = "../Media/Images/ES-loged.jpg";
    }
    if (User_Anmeldungen[i].reservation === undefined) {
      User_Anmeldungen[i].reservation = " ";
    }
    let newInfo = `
          <div id="info-kurs">
            <div class="cont-img">
                          <img src=${image} alt="" />
                        </div>
                        <div class="cont-info">
                          <p id="info-tl">${User_Anmeldungen[
                            i
                          ].language.toUpperCase()}</p>
                          <p id="info-modality">${
                            User_Anmeldungen[i].modality
                          }</p>
                          <p id="info-level">${User_Anmeldungen[i].level}</p>
                          <div class="cont-btn">
                            <button type="button" 
                            class="btn btn-info me-3 w-50"
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal"
                            onclick="showToEdit(${i})";
                            >
                              Ändern
                            </button>
                            <button type="button" 
                            class="btn btn-danger w-50" 
                            onclick="deleteReservation(${i})">
                              Löschen
                            </button>
                          </div>
                        </div>
                </div>
          </div>
          `;
    document.getElementById("info-global2").innerHTML += newInfo;

    if (document.getElementById("info-global2").innerHTML === " ") {
      document.getElementById(
        "info-global2"
      ).innerHTML = `<p class="fs-2 fw-bold">Keine Reservationen</p>`;
    }
  }
};

showToEdit = (index) => {
  //debugger;
  newLanguage.value = User_Anmeldungen[index].language;
  newMail.value = User_Anmeldungen[index].mail;
  newModality.value = User_Anmeldungen[index].modality;
  newLevel.value = User_Anmeldungen[index].level;
  newStart.value = User_Anmeldungen[index].start;
  newID = User_Anmeldungen[index].reservation;
  reservOld = User_Anmeldungen[index];
};

addEdit = () => {
  //debugger;
  for (let i = 0; i < User_Anmeldungen.length; i++) {
    if (newID === User_Anmeldungen[i].reservation) {
      User_Anmeldungen[i].language = newLanguage.value;
      User_Anmeldungen[i].mail = newMail.value;
      User_Anmeldungen[i].modality = newModality.value;
      User_Anmeldungen[i].level = newLevel.value;
      User_Anmeldungen[i].start = newStart.value;
      const newArray = User_Anmeldungen[i];
      reservOld = newArray;
    }
  }
  showReport();
  sendtoLocalStorage();
  alert("Cambios guardados");
  window.location.href = "LogedPage.html";
  form.reset();
};

validateLogin = () => {
  //debugger;
  document.getElementById("tl-side").textContent = nameSaved;
  for (let i = 0; i < Online_Anmeldungen.length; i++) {
    if (mailSaved === Online_Anmeldungen[i].mail) {
      User_Anmeldungen.push(Online_Anmeldungen[i]);
    }
  }
  showReport();
};
validateLogin();

sendtoLocalStorage = () => {
  newDB_Anmeldungen = User_Anmeldungen;
  for (let i = 0; i < Online_Anmeldungen.length; i++) {
    if (mailSaved !== Online_Anmeldungen[i].mail) {
      newDB_Anmeldungen.push(Online_Anmeldungen[i]);
    }
  }
  localStorage.setItem(
    "DB_ONLINE_ANMELDUNG",
    JSON.stringify(newDB_Anmeldungen)
  );
};

reservationPage = () => {
  window.location.href = "formularLoged.html";
};
