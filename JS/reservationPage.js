var tbody = document.getElementById("tbody");
let registerTable = JSON.parse(localStorage.DB_ONLINE_ANMELDUNG);
let countID = 1;
let kurs = ` `;

loginPage = () => {
  const url = "https://mayckellp.github.io/BOOK_COURSE/Pages/LoginPage.html";
  location.assign(url);
};

for (let i = 1; i < registerTable.length; i++) {
  var infoTable = `
      <tr>
              <th class="tl-id" scope="row">${countID}</th>
              <td>${registerTable[i].name}</td>
              <td>${registerTable[i].language}</td>
              <td>${registerTable[i].level} - ${registerTable[i].modality}</td>
              <td>${registerTable[i].start}</td>
            </tr>
      `;
  tbody.innerHTML += infoTable;
}
