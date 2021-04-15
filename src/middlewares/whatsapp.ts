import '../libs/dotenv';
import keys from '../security/keys'
import twilio from 'twilio';
class Whatsapp {
    client = twilio(keys.whatsapp.acoount_sid, keys.whatsapp.auth_token);
    public whassap(dates: any) {
        console.log(keys.whatsapp.acoount_sid)
        console.log(keys.whatsapp.auth_token)
        this.client.messages.create({
            to: 'whatsapp:+593983856136', // +593987900503
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