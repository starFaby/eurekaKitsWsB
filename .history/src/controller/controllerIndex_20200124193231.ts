import { Request, Response } from 'express';
class controllerIndex {
    index(req: Request, res: Response) {
        res.send('hola faby')
    }
}