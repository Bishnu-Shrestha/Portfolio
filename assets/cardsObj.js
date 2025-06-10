//object for all onepiece characters..........
const characters = [
  {
    name: "Monkey D. Luffy",
    alias: "Strawhat Luffy",
    role: "Captain",
    bounty: "1,500,000,000",
    image: "../images/luffy.webp",
    alt: "Captain Luffy ",
  },
  {
    name: "Roronoa Zoro",
    alias: "Piarat Hunter",
    role: "Swordsman",
    bounty: "320,000,000",
    image: "../images/zoro.webp",
    alt: "Zoro",
  },
  {
    name: "Vinsmoke Sanji",
    alias: "Black Legs",
    role: "Chef",
    bounty: "330,000,000",
    image: "../images/sanji.webp",
    alt: "Sanji",
  },
  {
    name: "Nami",
    alias: "Cat Burgler",
    role: "Navigator",
    bounty: "66,000,000",
    image: "../images/nami.webp",
    alt: "Nami",
  },
  {
    name: "Nico Robin",
    alias: "Ms All-Sunday",
    role: "Arceologist",
    bounty: "130,000,000",
    image: "../images/robin.webp",
    alt: "Robin",
  },
  {
    name: "Tony Tony Chompper",
    alias: "Cotton candy lover",
    role: "Doctor",
    bounty: "100",
    image: "../images/chomper.webp",
    alt: "Chomper",
  },
  {
    name: "Cutty Flam",
    alias: "Ciborg franky",
    role: "Ship wright",
    bounty: "94,000,000",
    image: "../images/frankey.webp",
    alt: "Franky",
  },
  {
    name: "Brook",
    alias: "The Humming Swordsman",
    role: "Mugician",
    bounty: "83,000,000",
    image: "../images/brook.webp",
    alt: "Brook",
  },
  {
    name: "Jimbeu",
    alias: "First Sun of the Sea ",
    role: "Helmsman",
    bounty: "430,000,000",
    image: "../images/jimbei.webp",
    alt: "Jimbey",
  },
  {
    name: "Usoop",
    alias: "God Usop",
    role: "Snipper",
    bounty: "200,000,000",
    image: "../images/usop.webp",
    alt: "Usopp",
  },
];

//for the preloder
const currentYear = new Date().getFullYear();
document.getElementById("date").textContent = currentYear;
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards");

  characters.forEach((character) => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("info");

    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = character.image;
    img.alt = character.alt;

    const p = document.createElement("p");
    p.innerHTML = `
        Name: ${character.name} <br />
        Alias: ${character.alias} <br />
        Role: ${character.role} <br />
        Bounty: ${character.bounty} <br />
      `;

    characterDiv.appendChild(img);
    characterDiv.appendChild(p);
    container.appendChild(characterDiv);
  });
});
