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
