import diff1 from "./diff1.js";

/**
 *
 * @param x {number[]}
 * @param n {number}
 * @param m {number}
 * @param A {number[][]}
 * @param f {number[]}
 * @param h {number}
 * @returns {number[][]}
 * @constructor
 */

export default function F(x, n, m, A, f, h){
    const a = []

    for(let i = 0; i < n; i++) a.push([diff1(i, n, m, x, A, f, h)])

    return a
}