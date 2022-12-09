import falseRandom from "./falseRandom.js";

/**
 *
 * @param A {number[][]} Изменяемая матрица
 * @param seed {string} сид
 * @param a {number} Левая граница
 * @param b {number} Правая граница
 * @param eps {number} Величина шума
 */
export default function addNoise(A, seed, a, b, eps){
    return A.map((x, i) => x.map((v, j) => v + (a + (b - a) * falseRandom(seed + i.toString() + j.toString())) * eps))
}