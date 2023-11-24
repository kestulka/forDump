"use strict";

"use strict";

// import { masyvas } from "./script2.js";
// console.log(masyvas);

// import { sudetis } from "./script2.js";
// console.log(sudetis(10));

// import favFood from "./script2.js";
// console.log(favFood);

// import { isStr } from "./script2.js";
// console.log(isStr("miaumiau"));
// console.log(isStr(123));
// console.log(isStr(false));

// import { start, end, total } from "./script2.js";

// console.log("funkcija uztruko: " + total + "milisekundziu");

// labas();

// function labas() {
// 	console.log("pasisveikinimas");
// }
// console.log(typeof labas);

// function daugyba(num1, num2) {
// 	const daugyba = num1 * num2;
// 	return daugyba;
// }

// console.log(daugyba(2, 5));
// console.log(daugyba(2));

// function daugybaSecond(num1, num2 = 5) {
// 	const daugyba = num1 * num2;
// 	return daugyba;
// }

// console.log(daugybaSecond(2));

// function daugybaThird() {
// 	let sk1 = prompt("iveskite pirma skaiciu: ");
// 	let sk2 = prompt("iveskite antra skaiciu:");
// 	daugyba = sk1 * sk2;
// }

// console.log(daugybaThird);

// function pasisveikinimas() {
// 	let vardas = prompt("iveskite savo varda: ");
// 	if (vardas == "kestutis") {
// 		console.log(alert("welcome, admin"));
// 	} else {
// 		console.log(alert(`Sveiki, ${vardas}`));
// 	}
// }

//////////////////////////////
// 29 skaidre 1uzd

// function vidurkis(paz1, paz2, paz3) {
// 	paz1 = parseInt(paz1);
// 	paz2 = parseInt(paz2);
// 	paz3 = parseInt(paz3);

// 	const vidurkis = (paz1 + paz2 + paz3) / 3;

// 	console.log(vidurkis.toFixed(2));
// }

// vidurkis(5, 10, 8);

///////////////////////////////

// ARBA:

// function vidurkis() {
// 	let paz1 = parseInt(prompt("Iveskite pirma pazymi: "));
// 	let paz2 = parseInt(prompt("Iveskite antra pazymi: "));
// 	let paz3 = parseInt(prompt("Iveskite trecia pazymi: "));

// 	// validacija
// 	if (isNaN(paz1) || isNaN(paz2) || isNaN(paz3)) {
// 		console.log("neteisingas ivedimas. Iveskite skaiciu");
// 		return;
// 	}

// 	const vidurkis = (paz1 + paz2 + paz3) / 3;

//     const teigNeig = if(vidurkis >=4<11){
//         console.log("(teigiamas)")
//     }
//     else{
//         console.log("neigiamas")
//     }
// 	alert("tavo pazymiu vidurkis yra: " + vidurkis.toFixed(2));
// }

// vidurkis();

// 1.
// const vidurkis =  // Assuming you have a valid value for vidurkis here;

// let teigNeig;

// if (vidurkis >= 4 && vidurkis <= 10) {
//     teigNeig = "(teigiamas)";
//     console.log(teigNeig);
// } else {
//     teigNeig = "neigiamas";
//     console.log(teigNeig);
// }

// 1.

// for(let index = 0; index < 11; ++index){
//     console.log(index)
// }

// 2.

// for(let index = 10; index > 0; index--){
//     console.log(index)
// }

// 3.

// for (let index = 1; index < 11; index += 2) {
// 	console.log(index);
// }

// 4.

// for (let index = 1; index < 11; index++) {
// 	let num = index * 2;
// 	console.log(num);
// }

// 5.

// for (let index = 0; index < 6; index++) {
// 	if (index == 3) {
// 		break;
// 	} else {
// 		console.log(index);
// 	}
// }

// 6.

// for (let index = 0; index < 11; index++) {
// 	if (index === 7) {
// 		continue;
// 	}
// 	console.log(index);
// }

// let agurkas = {
// 	name: "klaudijus",
// 	age: 30,
// 	job: "mientas"
// };
// for (let key in agurkas) {
// 	console.log(key);
// 	console.log(agurkas);
// }

// let zmogus = {
// 	vardas: "algis",
// 	metai: 27,
// 	darbas: "barista",
// 	hobiai: {
// 		1: "alkoholizmas",
// 		2: "geiminimas",
// 		3: "valgymas"
// 	}
// };

// for (let key in zmogus.hobiai) {
// 	let hobis = zmogus.hobiai[key];
// 	console.log(`Mano hobis yra ${hobis}`);
// }

// for (let key in zmogus) {
// 	if (key === "hobiai") {
// 		for (let hobis in zmogus[key]) {
// 			console.log(`mano hobis yra: ${zmogus[key][hobis]}`);
// 		}
// 	}
// }

// 1.

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

// let skaitliukas = 0;
// for (let key in leCartel) {
// 	if (leCartel[key] > 65) {
// 		skaitliukas++;
// 		console.log(skaitliukas);
// 	}
// }
// console.log(`galutinis: ${skaitliukas}`);

// 2.

// let lyg = 0;
// let nelyg = 0;
// for (let varpa in leCartel) {
// 	if (leCartel[varpa] % 2 === 0) {
// 		lyg++;
// 	} else {
// 		nelyg++;
// 	}
// }
// console.log(`lyginiu skaitliukas primuse: ${lyg}`);
// console.log(`nelyginiu skaitliukas primuse: ${nelyg}`);

// 1.

for (value of iterableObject) {
}
