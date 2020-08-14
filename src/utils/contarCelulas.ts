export default function contarCelulas(valorPago: string, valorCompra: string) {

    let c100: number = 0
    let c10: number = 0
    let c1: number = 0

    let troco = +valorPago - +valorCompra

    while (troco > 0) {
        if (troco >= 100) {
            c100++
            troco = troco - 100
        } else if (troco >= 10) {
            c10++
            troco = troco - 10
            console.log("entrei 10");
        } else if (troco >= 1) {
            c1++
            troco = troco - 1
            console.log("entrei 1");
        }
    }

    const notas = [{
        "notas100": c100,
        "notas10": c10,
        "notas1": c1
    }]

    return notas

}