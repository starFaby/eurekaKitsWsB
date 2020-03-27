import express, { Application, urlencoded, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/routerIndex';
import clienteRoutes from './routes/routerCliente';
import routeCategoria from './routes/routerCategoria';
import routeProducto from './routes/routerProducto';
import routerCateProdu from './routes/routerCateProdu';
import multer from './libs/multer';
import path from 'path';


class Server {
    private app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        // this.app.use(morgan('combined'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(urlencoded({extended: false}));
        this.app.use(multer.single('image'));
        this.app.use(express.static(path.join(__dirname,'public')))
    }
    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/cliente',clienteRoutes);
        this.app.use('/api/categoria',routeCategoria);
        this.app.use('/api/producto',routeProducto);
        this.app.use('/api/cateProdu',routerCateProdu);
    }
    aMiddleware(req: Request, res: Response, next: NextFunction) {
        next();
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server online in the port', this.app.get('port'));

        })
    }
}
const server = new Server();
server.start();

//45:18
