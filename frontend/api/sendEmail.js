import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
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
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const info = await transport.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL,
            subject: subject, 
            text: `${text}\n\n-${email}`
        });
        //console.log(req.body);
        res.status(200).send({success: true,id: info.messageId});
    }catch(err){
        console.error(err);
        res.status(500).send({success: false,error: err.message});
    }
}
