"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paypal_rest_sdk_1 = __importDefault(require("paypal-rest-sdk"));
const keys_1 = __importDefault(require("../security/keys"));
paypal_rest_sdk_1.default.configure(keys_1.default.paypal);
class ControllerPaypalBuy {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const buy = 'buy';
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
            paypal_rest_sdk_1.default.payment.create(create_payment_json, (error, payment) => {
                if (error) {
                    throw error;
                }
                else {
                    const newPayment = payment.links;
                    newPayment === null || newPayment === void 0 ? void 0 : newPayment.map((t) => {
                        if (t.rel === 'approval_url') {
                            const newLInk = t.href;
                            console.log(newLInk);
                            return res.status(200).send({ newLInk });
                        }
                    });
                }
            });
        });
    }
    success(req, res) {
        const result = 'buy';
        return res.status(200).send({ result });
    }
    cancel(req, res) {
        const result = 'cancel';
        return res.status(200).send({ result });
    }
}
const controllerPaypalBuy = new ControllerPaypalBuy();
exports.default = controllerPaypalBuy;
