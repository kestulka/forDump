//////////////////////////// 8 skaidres uzduotys

// 1.

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 2.

// for (let index = 10; index > 0; index--) {
//   console.log(index);
// }

// 3.

// for (let i = 1; i < 11; i += 2) {
//   console.log(i);
// }

// 4.

// for (let i = 1; i < 11; i++) {
//   let num = i * 2;
//   console.log(num);
// }

// 5.

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// 6.

// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     continue;
//   }
//   console.log(i);
// }

///////////////////////////////////////////////////////////////////

const leCartel = {
  me: 33,
  father: 55,
  mother: 53,
  sister: 32,
  brother1: 28,
  brother2: 25,
  aunt: 61,
  uncle: 60,
  cousin1: 37,
  cousin2: 37,
  grandfather1: 79,
  grandmother1: 77,
  grandfather2: 81,
  grandmother2: 80,
  cat: 3,
  dog: 7,
  parrot: 2,
};

// let person = {
//   name: "Kestutis",
//   age: 23,
//   job: "Bomzas",
// };
// for (let key in person) {
//   console.log(key);
// }

// let person = {
//   name: "Kestutis",
//   age: 23,
//   job: "Bomzas",
//   hobbies: {
//     1: "cook",
//     2: "game",
//     3: "lift",
//   },
// };

// for (let key in person.hobbies) {
//   let hobby = person.hobbies[key];
//   console.log(`My Hobby is: ${hobby}`);
// }

// for (let key in person) {
//   if (key === "hobbies") {
//     for (let hobby in person[key]) {
//       console.log(`My hobby is: ${person[key][hobby]}`);
//     }
//   }
// }

/////////////////// 10skaidre

// 1.

// let skaitliukas = 0;

// for (let key in leCartel) {
//   let value = leCartel[key];
//   if (typeof value === "number" && value > 65) {
//     skaitliukas++;
//   }
// }

// console.log(
//   `objekto savybiu su reiksmemis didesnemis nei 65 yra: ${skaitliukas}`,
// );

// 2.

// let skaitliukasLyginiu = 0;
// let skaitliukasNelyginiu = 0;

// for (let key in leCartel) {
//   let value = leCartel[key];
//   if (value % 2 == 0) {
//     skaitliukasLyginiu++;
//   } else {
//     skaitliukasNelyginiu++;
//   }
// }
// console.log(`lyginiu skaiciu yra: ${skaitliukasLyginiu}`);
// console.log(`nelyginiu skaiciu yra: ${skaitliukasNelyginiu}`);

////////////////////////////////////////////////////////////////////

// const students = ["Johhny", "Pappa", "Sugar"];

// for (let element of students) {
//   console.log(element);
// }

// const string = "miau";

// for (let character of string) {
//   console.log(character);
// }

///////////// 12 skaidre

// const numbers = [2, 34, 54, 67, 77, 1, 99];
// let suma = 0;

// for (let element of numbers) {
//   suma += element;
// }
// console.log("suma numbers masyvo yra: ", suma);

// const words = ["geros", "dienytes", "skanios", "kavytes"];
// for (let character of words) {
//   console.log(`zodis: ${character} | ilgis: ${character.length}`);
// }

///////////////////////////////////////////////////////////////////////

// let skaicius = 1;
// while (skaicius <= 5) {
//   console.log(skaicius);
//   skaicius++;
// }

// let i = 1,
//   n = 5;

// while (i <= n) {
//   console.log(i);
//   i += 1;
// }

//////////////////// 15 skaidre

// let skaicius = 1;
// while (skaicius <= 10) {
//   console.log(skaicius);
//   skaicius++;
// }

// let skaicius = 10;
// while (skaicius >= 1) {
//   console.log(skaicius);
//   skaicius--;
// }

// let skaicius = 1;
// while (skaicius <= 10) {
//   if (skaicius % 2 !== 0) {
//     console.log(skaicius);
//   }
//   skaicius++;
// }

////////////////////////////////////////////////////

// let age = 11;

// do {
//   console.log(age);
//   age += 1;
// } while (age < 20);

// let i = 13;
// const n = 23;

// do {
//   console.log(i);
//   i++;
// } while (i <= n);

/////////////// 17 skaidre

// let i = 0;
// let suma = 0;

// do {
//   const userInput = prompt(
//     "Enter a number: (iveskite neigiama skaiciu jei norite sustabdyti)",
//   );
//   const number = parseFloat(userInput);

//   if (number < 0) {
//     break;
//   }
//   i++;
//   suma += number;
// } while (true);
// console.log(`ivestu skaiciu suma: ${suma} `);

function getRandomToTen(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const randomNum = getRandomToTen(1, 10);
console.log(randomNum);

do {
  const userInput = prompt("enter a num: ");
  const num = parseFloat(userInput);

  if (num === randomNum) {
    alert("you guessed it right!");
    displayImage();
    break;
  } else if (num < randomNum) {
    alert("too low. try again");
  } else {
    alert("too high. try again");
  }
} while (true); // vartotojas turi testi spejimus toil, kol atspes teisinga skaiciu

// zulul

function displayImage() {
  // Žingsnis 1: Sukurti konteinerį, kuriame bus laikomas paveikslėlis
  const imageContainer = document.body;

  // Žingsnis 2: Sukurti img elementą
  const image = document.createElement("img");

  // Žingsnis 3: Nustatyti img elemento šaltinio (src) atributą į paveikslėlio URL
  image.src =
    "https://media.tenor.com/iLHbuAY_-EkAAAAC/howard-the-alien-dance.gif"; // Pakeiskite į tikrąją paveikslėlio nuorodą

  // Žingsnis 4: Nustatyti paveikslėlio alternatyvaus (alt) teksto atributą
  image.alt = "Sveikiname!";

  // Žingsnis 5: Nustatyti paveikslėlio stilių plotį (width)
  image.style.width = "100%"; // Prisitaikykite dydį pagal poreikį

  // Žingsnis 6: Nustatyti paveikslėlio stilių aukštį (height)
  image.style.height = "100%"; // Prisitaikykite dydį pagal poreikį

  // Žingsnis 7: Pridėti img elementą prie konteinerio
  imageContainer.appendChild(image);
}
