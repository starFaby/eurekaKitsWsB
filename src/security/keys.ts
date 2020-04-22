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
  }
}