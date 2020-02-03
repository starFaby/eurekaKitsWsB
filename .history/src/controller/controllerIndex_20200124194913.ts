import { Request, Response } from 'express';
class ControllerIndex {
    index(req: Request, res: Response) {
        res.send('hola faby')
    }
}
export const controllerIndex = new ControllerIndex();