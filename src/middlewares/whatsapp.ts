import '../libs/dotenv';
import keys from '../security/keys'
import twilio from 'twilio';
class Whatsapp {
    client = twilio(keys.whatsapp.acoount_sid, keys.whatsapp.auth_token);
    public whassap(dates: any) {
        this.client.messages.create({
            to: 'whatsapp:+593987900503',
            from: 'whatsapp:+14155238886',
            body: dates
        }).then(res => {
            console.log(res.sid);
        },
            err => {
                console.log(err);
            });
    }
}
const whatsapp = new Whatsapp();
export default whatsapp;