const next = document.querySelector("#next");
const calc = document.querySelector("#calc");
const electoralList = document.querySelector("#electoralList");
const results = document.querySelector("#results");

const electorals = [];

next.addEventListener("click", (evt) => {
  evt.preventDefault();
  const electoralName = document.querySelector("#electoralName").value;
  const isCoalition = document.querySelector("#isCoalition");
  const numberOfVotes = document.querySelector("#numberOfVotes").value;

  if (electoralName == "" || numberOfVotes == "") {
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

  electorals.sort((a, b) => {
    b - a;
  });

  electorals.forEach((partia) => {
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td5 = document.createElement("td");
    // td1 = tu cos bedzie
    td2 = partia.electoralName;
    td3 = partia.isCoalition + "%";
    td4 = partia.numberOfVotes;
    td5 = ((partia.numberOfVotes / sum) * 100).toFixed(2) + "%";
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    results.append(tr);
  });
});
