"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../libs/dotenv");
exports.default = {
    database: {
        host: process.env.DB_HOST_D,
        user: process.env.DB_USER_D,
        password: process.env.DB_PASS_D,
        database: process.env.DB_NAME_D
    },
    databasep: {
        host: process.env.DB_HOST_P,
        user: process.env.DB_USER_P,
        password: process.env.DB_PASS_P,
        database: process.env.DB_NAME_P
    },
    whatsapp: {
        acoount_sid: process.env.ACOOUNT_SID,
        auth_token: process.env.AUTH_TOKEN,
        my_number_phone: process.env.MY_NUMBER_PHONE
    },
    paypal: {
        mode: 'live',
        client_id: 'AfQ6pWCmGar2KVA5Fx9Xh0p3WPy5K1_PzOT6-ZH9tukwnlCeIQYHqIdn32gRLNG0rcis_mOi-lKElYdp',
        client_secret: 'EGXz6E5IgZB2B6YKyIHrLQUCiq8EOT46WLFdzCK2SmrGFBDCcj3ODjtjDiCjgNKznQbMxbxgiPLQIBMO',
    },
    apirest: {
        environment: process.env.ENVIROMENT_DEV
    }
};
