var countNummer = JSON.parse(
  localStorage.getItem("DB_ONLINE_ANMELDUNG")
).length;

notifyCourse = () => {
  if (countNummer > 1) {
    count.style.visibility = "visible";
    nummer.textContent = countNummer - 1;
    btnVerify.style.visibility = "visible";
  }
};

notifyCourse();
