const next = document.querySelector("#next");
const calc = document.querySelector("#calc");
const electoralList = document.querySelector("#electoralList");
const results = document.querySelector("#results");

const electorals = [];

next.addEventListener("click", (evt) => {
  evt.preventDefault();
  const electoralName = document.querySelector("#electoralName").value;
  const isCoalition = document.querySelectorAll("#isCoalition");
  const numberOfVotes = document.querySelector("#numberOfVotes").value;

  if (electoralName == "" || numberOfVotes == "") {
    console.log("blad");
  } else {
    const partia = {
      name: electoralName,
      isCoalition: isCoalition.checked ? 8 : 5,
      numberOfVotes: numberOfVotes,
    };
    electorals.push(partia);
  }
  console.log(electorals);
});

calc.addEventListener("click", (evt) => {
  evt.preventDefault();
});
