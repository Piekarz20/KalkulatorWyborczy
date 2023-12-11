const next = document.querySelector("#next");
const calc = document.querySelector("#calc");
const electoralList = document.querySelector("#electoralList");
const results = document.querySelector("#results");
const resultsList = document.querySelector("#resultsList");
const electorals = [];

next.addEventListener("click", (evt) => {
  evt.preventDefault();
  const electoralName = document.querySelector("#electoralName").value;
  const isCoalition = document.querySelector("#isCoalition");
  const numberOfVotes = document.querySelector("#numberOfVotes").value;

  if (
    electoralName == "" ||
    numberOfVotes == "" ||
    (numberOfVotes * 1) % 1 != 0
  ) {
    console.log("blad");
  } else {
    const partia = {
      electoralName: electoralName,
      isCoalition: isCoalition.checked ? 8 : 5,
      numberOfVotes: numberOfVotes,
    };
    electorals.push(partia);

    const li = document.createElement("li");
    li.innerHTML = `<b>${partia.electoralName}</b>, ${
      partia.isCoalition == 8 ? "jest koalicją" : "nie jest koalicją"
    }, ilość głosów: ${partia.numberOfVotes}`;
    electoralList.appendChild(li);
  }
});

let sum = 0;
calc.addEventListener("click", (evt) => {
  evt.preventDefault();
  sum = 0;
  electorals.forEach((partia) => {
    sum += partia.numberOfVotes * 1;
  });

  electorals.sort((a, b) => b.numberOfVotes - a.numberOfVotes);

  resultsList.innerHTML = `
  <tr>
    <th>Miejsce</th>
    <th>Nazwa ugrupowania</th>
    <th>Próg wyborczy</th>
    <th>Ilość głosów</th>
    <th>Wynik procentowy</th>
  </tr>
   `;

  electorals.forEach((partia, index) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.textContent = index + 1;
    td2.textContent = partia.electoralName;
    td3.textContent = partia.isCoalition + "%";
    td4.textContent = partia.numberOfVotes;

    const threshold = (partia.numberOfVotes / sum) * 100;
    td5.textContent = threshold.toFixed(2) + "%";

    if (threshold >= partia.isCoalition) {
      tr.style.backgroundColor = "rgb(87, 180, 87)";
    } else {
      tr.style.backgroundColor = "rgb(204, 62, 44)";
    }

    tr.append(td1, td2, td3, td4, td5);
    resultsList.appendChild(tr);
  });
});
