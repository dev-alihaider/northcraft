import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, phoneNumber, service, description } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL,
        subject: 'New Service Request',
        text: `
            You have a new service request:
            Name: ${name}
            Email: ${email}
            Phone: ${phoneNumber}
            Service: ${service}
            Description: ${description}
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return NextResponse.json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}
