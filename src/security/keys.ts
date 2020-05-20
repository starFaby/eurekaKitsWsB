import '../'
export default {
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  },
  whatsapp: {
    acoount_sid: process.env.ACOOUNT_SID,
    auth_token: process.env.AUTH_TOKEN,
    my_number_phone: process.env.MY_NUMBER_PHONE
  },
  paypal: {
    mode: 'sandbox', //sandbox or live
    client_id: 'Ab_-PsmU8Vh47XoyaAsgezkWiOZbj-2GksXP1KaHH6XFzwHNyml2cvZtbU77rkzUNWX5i6ONdKOG7fpi',
    client_secret: 'EIOYegiuWqv1WAiiyhAgNWRHhVBKO0FllXXaRCEpTsGFnK_58ZJyqejPULKpdJ_bV3kQVSQhSVUiEEq-'
  },
  apirest: {
    environment: process.env.ENVIROMENT_DEV
  }
}