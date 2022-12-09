export default function rho(n, m, A, v, f, lambda_delta, sigma, h){
    let temp = [0, 0, 0]

    for(let i = 0; i < m; i++){
        temp[0] = 0
        for(let j = 0; j < n; j++) temp[0] += A[i][j] * v[j]
        temp[1] += (temp[0] - f[i]) ** 2
    }

    for(let j = 0; j < n; j++) temp[2] += v[j] ** 2
    temp[2] = Math.sqrt(temp[2])

    return temp[1] - (lambda_delta + sigma + h * temp[2]) ** 2
}