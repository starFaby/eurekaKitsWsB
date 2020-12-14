import { Request, Response } from 'express';
class ControllerIndex {
    public index(req: Request, res: Response) {
        res.json({Manager:'Roberto Brito'})
    }

}
const controllerIndex = new ControllerIndex();
export default controllerIndex;