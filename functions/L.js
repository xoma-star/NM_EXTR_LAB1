/**
 *
 * @param v {number[]}
 * @param A {number[][]}
 * @param f {number[]}
 * @param h {number}
 * @param sigma {number}
 * @constructor
 */
export default function L(A, f, v, h, sigma){
    const first = Math.sqrt(A
        .map((x, i) => x
            .map((v, j) => A[i][j] * v[j])
            .reduce((a, b) => a + b))
        .map((x, i) => (x - f[i]) ** 2)
        .reduce((a, b) => a + b)
    )

    const second = Math.sqrt(v.map(x => x ** 2).reduce((a, b) => a + b))

    return first + h * second + sigma
}