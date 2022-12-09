import F from "./F.js";
import norm from "../misc/euqlidNorm.js";

export default function GradientMethod(x0, n, m, A, f, h, fun, eps, M){
    let k = 0
    let x_prev = x0
    let x = x_prev
    let t_k = 3

    while (true){
        k++
        let tmp = F(x_prev, n, m, A, f, h).map(v => v[0])
        x = x_prev.map((z, i) => z - t_k * tmp[i])

        if(fun(x) - fun(x_prev) < 0){
            if(norm(x.map((z, i) => z - x_prev[i])) <= eps || k + 1 > M) return x
        }
        else t_k /= 2

        x_prev = x
    }
}