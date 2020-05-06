"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routerIndex_1 = __importDefault(require("./routes/routerIndex"));
const routerAuth_1 = __importDefault(require("./routes/routerAuth"));
const routerCategoria_1 = __importDefault(require("./routes/routerCategoria"));
const routerProducto_1 = __importDefault(require("./routes/routerProducto"));
const routerPersona_1 = __importDefault(require("./routes/routerPersona"));
const routerTelefono_1 = __importDefault(require("./routes/routerTelefono"));
const routerDireccion_1 = __importDefault(require("./routes/routerDireccion"));
const routerCateProdu_1 = __importDefault(require("./routes/routerCateProdu"));
const routerDetalleVenta_1 = __importDefault(require("./routes/routerDetalleVenta"));
const routerConsultas_1 = __importDefault(require("./routes/routerConsultas"));
const routerPromocion_1 = __importDefault(require("./routes/routerPromocion"));
const routerFactura_1 = __importDefault(require("./routes/routerFactura"));
const routerFormaPago_1 = __importDefault(require("./routes/routerFormaPago"));
const routerPaypal_1 = __importDefault(require("./routes/routerPaypal"));
const routerTransferenciaBancaria_1 = __importDefault(require("./routes/routerTransferenciaBancaria"));
const routerEfectivo_1 = __importDefault(require("./routes/routerEfectivo"));
const routerPaypalBuy_1 = __importDefault(require("./routes/routerPaypalBuy"));
const multer_1 = __importDefault(require("./libs/multer"));
const path_1 = __importDefault(require("path"));
require("./middlewares/token");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.urlencoded({ extended: false }));
        this.app.use(multer_1.default.single('image'));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    routes() {
        this.app.use('/', routerIndex_1.default);
        this.app.use('/api/login', routerAuth_1.default);
        this.app.use('/api/categoria', routerCategoria_1.default);
        this.app.use('/api/producto', routerProducto_1.default);
        this.app.use('/api/cateProdu', routerCateProdu_1.default);
        this.app.use('/api/detaVenta', routerDetalleVenta_1.default);
        this.app.use('/api/persona', routerPersona_1.default);
        this.app.use('/api/telefono', routerTelefono_1.default);
        this.app.use('/api/direccion', routerDireccion_1.default);
        this.app.use('/api/consultas', routerConsultas_1.default);
        this.app.use('/api/promocion', routerPromocion_1.default);
        this.app.use('/api/factura', routerFactura_1.default);
        this.app.use('/api/formapago', routerFormaPago_1.default);
        this.app.use('/api/paypal', routerPaypal_1.default);
        this.app.use('/api/transbanc', routerTransferenciaBancaria_1.default);
        this.app.use('/api/efect', routerEfectivo_1.default);
        this.app.use('/api/paypalbuy', routerPaypalBuy_1.default);
    }
    aMiddleware(req, res, next) {
        next();
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server online in the port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
//45:18
