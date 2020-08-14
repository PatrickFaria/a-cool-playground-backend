import { Request, Response } from 'express'
import Moto from '../model/moto.modelo'
import db from '../database/connection'


export default class MotoController {

    async create(request: Request, response: Response) {
        const {
            qtdRodas,
            passageiros
        } = request.body

        const trx = await db.transaction();

        const insertMoto = await trx('moto').insert({
            qtdRodas,
            passageiros
        })

        await trx.commit()

        return response.status(201).send()
    }

}