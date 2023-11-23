export const masyvas = [4, 8, 12, 20, 60];

export function sudetis(sk) {
	return sk + sk;
}

const favFood = ["banana", "latte", "kebab", "pizza"];
export default favFood;

export const isStr = (value) => typeof value == "string";

const start = performance.now();
const end = performance.now();
const total = start - end;
export { start, end, total };

