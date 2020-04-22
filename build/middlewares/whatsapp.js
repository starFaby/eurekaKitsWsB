"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../libs/dotenv");
const keys_1 = __importDefault(require("../security/keys"));
const twilio_1 = __importDefault(require("twilio"));
console.log('ACOOUNT_SID ==> ', keys_1.default.whatsapp.acoount_sid);
console.log('AUTH_TOKEN ==> ', keys_1.default.whatsapp.auth_token);
console.log('MY_NUMBER_PHONE ==> ', keys_1.default.whatsapp.my_number_phone);
class Whatsapp {
    constructor() {
        this.client = twilio_1.default(keys_1.default.whatsapp.acoount_sid, keys_1.default.whatsapp.auth_token);
    }
    whassap(dates) {
        console.log(dates);
        this.client.messages.create({
            to: 'whatsapp:+593995078151',
            from: 'whatsapp:+14155238886',
            body: dates
        }).then(res => {
            console.log(res.sid);
        }, err => {
            console.log(err);
        });
    }
}
const whatsapp = new Whatsapp();
exports.default = whatsapp;
