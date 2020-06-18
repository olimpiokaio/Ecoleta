import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer'; 

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsControllers';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);

export default routes;

/*

{
	"name":"Mercado Carrasco",
	"email":"contato@carrasco.com.br",
	"whatsapp":"556178452356",
	"latitude": -48.1501976,
	"longitude": -15.8146994,
	"city": "Brasília",
	"uf": "DF",
	"items": [
		1,
		2
	]
}

*/