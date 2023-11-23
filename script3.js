"use strict";
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
	parrot: 2
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
