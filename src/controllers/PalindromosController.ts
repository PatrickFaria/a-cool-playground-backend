import {Request, Response} from 'express'

import db from '../database/connection';
import isPalindromo from '../utils/isPalindromo'

export default class PalindromosController{
    async index(request: Request, response: Response){
        const filters = request.query;

        const numeroInicial = filters.numeroInicial as string
        const numeroFinal = filters.numeroFinal as string

        const palindromos = isPalindromo(numeroInicial,numeroFinal)

        return response.json(palindromos);
        
    }
}