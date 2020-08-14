import express from 'express'
// import ClassesController from './controllers/ClassesController';
// import ConnectionsController from './controllers/ConnectionsController';
import PalindromosController from './controllers/PalindromosController'
import ContaCelulasController from './controllers/ContaCelulasController'
import MotoController from './controllers/MotoController'
import PasseiosController from './controllers/PasseiosController'

const routes = express.Router()

const palindroController = new PalindromosController()
const contaCelularController = new ContaCelulasController()
const motoController = new MotoController();
const passeioController = new PasseiosController();

routes.get('/palindromos', palindroController.index)
routes.get('/celulas', contaCelularController.index)

routes.post('/moto', motoController.create)
routes.post('/passeio', passeioController.create)


export default routes;