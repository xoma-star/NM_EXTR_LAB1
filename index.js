import config from './config.js'
import genMatrix from "./misc/genMatrix.js";
import falseRandom from "./misc/falseRandom.js";
import matMul from "./misc/matMul.js";
import addNoise from "./misc/addNoise.js";
import print from "./misc/print.js";
import norm from "./misc/euqlidNorm.js";
import matSubstr from "./misc/matSubstr.js";
const {n, a, b, m, seed1, seed2, noise_eps, seed3, seed4} = config

const A = genMatrix(n, n).map((x, i) => x.map((_, j) => a + (b - a) * falseRandom(seed1 + (j + i * (j + 1)).toString())))
const u = genMatrix(n, 1).map((x, i) => x.map((_, j) => a + (b - a) * falseRandom(seed2 + (j + i * (j + 1)).toString())))
const f = matMul(A, u)

const A_ext = [...A, A[0].map((x, i) => x + A[n - 1][i]), A[1].map((x, i) => x + A[n - 2][i])]
const f_ext = [...f, f[0].map((x, i) => x + f[n - 1][i]), f[1].map((x, i) => x + f[n - 2][i])]

const A_ext_noised = addNoise(A_ext, seed3, a, b, noise_eps)
const f_ext_noised = addNoise(f_ext, seed4, a, b, noise_eps)

const h = norm(matSubstr(A_ext, A_ext_noised))
const sigma = norm(f_ext.map((x, i) => x - f_ext_noised[i]))
const psi = h * norm(u) + sigma

console.log())