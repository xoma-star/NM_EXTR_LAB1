/**
 *
 * @param m1 {number[][]} Первая матрица
 * @param m2 {number[][]} Вторая матрица
 * @returns {number[][]}
 */

export default function matMul(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
