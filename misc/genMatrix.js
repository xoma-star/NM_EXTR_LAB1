/**
 * Генерирует матрицу m*n, заполненную нулями
 *
 * @param {number} n Количество строк
 * @param {number} m Количество столбцов
 * @returns {number[][]}
 */

export default function genMatrix(n, m){
    return Array(n).fill(0).map(()=>Array(m).fill(0))
}