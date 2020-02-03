import { Request, Response } from 'express';
class ControllerIndex {
    public index(req: Request, res: Response) {
        res.send('hola faby')
    }
}
const controllerIndex = new ControllerIndex();
export default controllerIndex;