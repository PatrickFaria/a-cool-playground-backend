export default function isPalindromo(numeroInicio: string, numeroFinal: string) {

    let array: Array<any> = []
    for (let index = +numeroInicio; index < +numeroFinal; index++) {
        const val = index.toString().split('').reverse().join('');
        if (val === index.toString()) {
            array.push(val)
        }
    }

    return array;
}