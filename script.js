 
 let nombreSecret = Math.floor(Math.random() * 10) + 1;

let essais = 0;

function deviner() {

  let proposition = Number(
    document.getElementById("proposition").value
  );

  essais++;

  if (proposition > nombreSecret) {
    document.getElementById("message").textContent =
      "Le nombre entré est plus grand que le nombre secret 😒";
  }

  else if (proposition < nombreSecret) {
    document.getElementById("message").textContent =
      "Le nombre entré est plus petit que le nombre secret 😒";
  }

  else {
    document.getElementById("message").textContent =
      "Bravo ❤️😝🎉 !! Tu as trouvé le nombre secret 🏆 !";
  }

  document.getElementById("compte").textContent =
    "Tu as essayé : " + essais;
}

document
  .getElementById("deviner")
  .addEventListener("click", deviner);

 