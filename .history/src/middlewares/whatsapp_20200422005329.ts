import './libs/dotenv'
import twilio from 'twilio';
const ACOOUNT_SID = process.env.ACOOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const MY_NUMBER_PHONE = process.env.MY_NUMBER_PHONE;
console.log('ACOOUNT_SID ==> ', ACOOUNT_SID);
console.log('AUTH_TOKEN ==> ', AUTH_TOKEN);
console.log('MY_NUMBER_PHONE ==> ', MY_NUMBER_PHONE);
class Whatsapp {
    client = twilio(ACOOUNT_SID,AUTH_TOKEN);
    public whassap(dates: any){
        console.log(dates);
      /*  this.client.messages.create({
            to: 'whatsapp:+593995078151',
            from: 'whatsapp:+14155238886',
            body: dates
        }).then(res => {
            console.log(res.sid);
        },
        err => {
            console.log(err);
        });*/
    }
}
const whatsapp = new Whatsapp();
export default whatsapp;