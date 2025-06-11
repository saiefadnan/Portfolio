import nodemailer from 'nodemailer';
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;


export default async function sendEmail(req, res) {
    console.log(EMAIL);
    if (req.method !== 'POST') {
        return res.status(405).send({ error: 'Only POST method is allowed' });
    }
    try{
        const {
            name,
            email,
            subject,
            text
        } = req.body;
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });

        const info = await transport.sendMail({
            from: `"${name}" <${email}>`,
            to: EMAIL,
            subject: subject, 
            text: `${text}\n\n-${email}`
        });
        //console.log(req.body);
        res.status(200).json({success: true,id: info.messageId});
    }catch(err){
        console.error(err);
        res.status(500).json({success: false,error: err.message});
    }
}
