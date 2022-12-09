/**
 * @param a {number[][]}
 */

export default function print(a){
    a.forEach(x => {
        console.log(x.map(v => v.toFixed(4)).join("\t"))
    })
}