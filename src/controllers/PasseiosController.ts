import { Request, Response } from 'express'
import db from '../database/connection'
import Passeio from '../model/passeio.modelo';


export default class PasseiosController {

    passeios: Passeio[] = new Array<Passeio>()

    async create(request: Request, response: Response) {
        
        const {
            modelo,
            anoFabricacao,
            qtdPortas,
            marca,
            texto
        } = request.body

        const trx = await db.transaction();

        const insertMoto = await trx('passeio').insert({
            modelo,
            anoFabricacao,
            qtdPortas,
            marca,
            texto
        })

        await trx.commit()

        return response.status(201).send()
    }

}