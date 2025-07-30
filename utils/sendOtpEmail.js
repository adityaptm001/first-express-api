const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jhanna12222@gmail.com',
        pass: 'alto qkoq ftmp ordf'
    }
});

const sendOtpEmail = async (to, otp) => {
    await transporter.sendMail({
        from: 'jhanna12222@gmail.com',
        to: to,
        subject: 'Welcome to Candle Burn Test',
        text: `Your Login OTP is: ${otp}`
    });
};

module.exports = sendOtpEmail;