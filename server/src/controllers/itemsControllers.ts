import { Request, Response } from 'express';
import Knex from '../database/connection';

class ItemsController {
    async index(request: Request,response: Response) {
        const items = await Knex('items').select('*');
     
        const serializadItems = items.map(item => {
            return {
                 id: item.id,
                 title: item.title,
                 image_url: `http://192.168.100.8:3333/uploads/${item.image}`
             }
        });
     
        return response.json(serializadItems);
     }
}

export default ItemsController;