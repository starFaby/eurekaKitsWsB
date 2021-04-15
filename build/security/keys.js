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
        mode: 'sandbox',
        client_id: 'AfKhYi8CAT-OLMfIupiMNaNiivbWiTwjffsVOUHHf7OrnqfFqjNHYkTHTwZUz7TZx1otoY2SCCuPVl7z',
        client_secret: 'EAb9N17sfalglKAbHDGctHG8OPu9vUaEs0sOtfWbyNxcRxqt3T8LUuiQqGqo0JAH0klt3RH4kZVPy9Lr',
    },
    apirest: {
        environment: process.env.ENVIROMENT_DEV
    }
};
