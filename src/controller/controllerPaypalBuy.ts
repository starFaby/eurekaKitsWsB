import { Request, Response } from 'express';
import pool from '../database';
import paypal from 'paypal-rest-sdk';
import key from '../keys/key'
paypal.configure(key.paypal);
class ControllerPaypalBuy {
    public async create(req: Request, res: Response): Promise<any> {
        const { idformapago, numfactura, preciofactura, estado } = req.body;
        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": 'http://localhost:3000/api/paypalbuy/success',
                "cancel_url": 'http://localhost:3000/api/paypalbuy/cancel'
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "Factura " + numfactura,
                        "sku": "item",
                        "price": preciofactura,
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": preciofactura
                },
                "description": "This is the payment description."
            }]
        };

        paypal.payment.create(create_payment_json, (error, payment) => {
            if (error) {
                throw error;
            } else {
                const newPayment = payment.links;
                newPayment?.map((t) => {
                    if (t.rel === 'approval_url') {
                        const newLInk = t.href
                        return res.status(200).send({ newLInk })
                    }
                });
            }
        });
    }

    public success(req: Request, res: Response) {
        res.send('Exito al comprar')
    }
    public cancel(req: Request, res: Response) {
        res.send('Error al comprar')
    }
}
const controllerPaypalBuy = new ControllerPaypalBuy();
export default controllerPaypalBuy;