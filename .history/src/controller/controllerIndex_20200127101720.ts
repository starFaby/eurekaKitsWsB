import { Request, Response } from 'express';
class ControllerIndex {
    public index(req: Request, res: Response) {
        res.json({faby:'eres un descgraciado'})
    }
}
const controllerIndex = new ControllerIndex();
export default controllerIndex;