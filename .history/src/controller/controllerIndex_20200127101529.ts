import { Request, Response } from 'express';
class ControllerIndex {
    public index(req: Request, res: Response) {
        res.send('hola faby jejeje')
    }
}
const controllerIndex = new ControllerIndex();
export default controllerIndex;