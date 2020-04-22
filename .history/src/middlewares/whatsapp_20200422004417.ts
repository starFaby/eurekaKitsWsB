import twilio from 'twilio';
const ACOOUNT_SID = process.env.ACOOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const MY_NUMBER_PHONE = process.env.MY_NUMBER_PHONE;
class Whatsapp {
    client = twilio(ACOOUNT_SID,AUTH_TOKEN);
    public whassap(dates: any){
        this.client.messages.create({
            to: 'whatsapp:+593995078151',
            from: 'whatsapp:+14155238886',
            body: dates
        }).then(res => {
            console.log(res.sid);
        },
        err => {
            console.log(err);
        })
    }
}
const whatsapp = new Whatsapp();
export default whatsapp;