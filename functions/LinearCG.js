import matMul from "../misc/matMul.js";
import norm from "../misc/euqlidNorm.js";

export default function LinearCG() {
    let xk = x0
    let rk = matMul(A, xk.map(x => [x])).map((x, i) => x[0] - b[i])  // A * xk - b
    let pk = rk.map(x => -x)
    let rk_norm = norm(rk)

    let k = 0
    let curve_x = [xk]

    while (rk_norm > precision){
        let apk = matMul(A, pk.map(x => [x])).map(x => x[0])  // A * pk
        let rkrk = matMul(rk.map(x => [x]), rk.map(x => [x])).map(x => x[0]) // rk * rk

        let alpha = rkrk / matMul(pk.map(x => [x]), apk.map(x => [x]))
        xk = xk.map((x, i) => x + alpha * pk[i])
        rk = rk.map((x, i) => x + alpha * apk)
        let beta = matMul(rk.map(x => [x]), rk.map(x => [x])).map(x => x[0]) // rk * rk
    }

}