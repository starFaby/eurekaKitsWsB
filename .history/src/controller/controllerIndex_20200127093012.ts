import { Request, Response } from 'express';
class ControllerIndex {
    public index(req: Request, res: Response) {
        res.send('hola faby')
    }
}
export const controllerIndex = new ControllerIndex();