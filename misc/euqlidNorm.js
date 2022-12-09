/**
 *
 * @param {number[][] | number[]} a
 * @returns {number}
 */
export default function euqlidNorm(a){
    if(Array.isArray(a[0])) return Math.hypot(...[].concat.apply([], a))
    return Math.hypot(...a)
}