export default class Veiculo {
    modelo: string
    anoFabricacao: number
    qtdPortas: number
    marca: string
    texto: Object

    constructor(modelo: string, anoFabricacao: number, qtdPortas: number, marca: string, texto: string) {
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao
        this.qtdPortas = qtdPortas
        this.marca = marca
        this.texto = texto
    }
}