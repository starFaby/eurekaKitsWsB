import express, { Application, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/routerIndex';
import clienteRoutes from './routes/routerCliente';

class Server {
    private app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(urlencoded({extended: false}));
    }
    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/cliente',clienteRoutes);
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
