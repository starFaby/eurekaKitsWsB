import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import clienteRoutes from './routes/clientesRouter';

class Server {
    private app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
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
