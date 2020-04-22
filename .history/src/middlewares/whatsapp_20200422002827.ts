import twilio from 'twilio';
class Whatsapp {
    client = twilio('AC508d4956105a932dc27fa10147ad3068','02decd8f90290bcd29a882e78e0a453c');
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