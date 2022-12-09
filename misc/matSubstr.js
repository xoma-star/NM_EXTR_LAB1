export default function matSubstr(a, b){
    return a.map((x, i) => x.map((v, j) => v - b[i][j]))
}