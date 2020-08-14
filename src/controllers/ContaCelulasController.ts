import {Request, Response} from 'express'

import db from '../database/connection';
import contarCelulas from '../utils/contarCelulas';

export default class ContaCelulasController{
    async index(request: Request, response: Response){
        const filters = request.query;

        const valorPago = filters.valorPago as string
        const valorCompra = filters.valorCompra as string

        const notas = contarCelulas(valorPago, valorCompra)

        return response.json(notas);
        
    }
}