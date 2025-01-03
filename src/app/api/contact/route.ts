import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { config } from "../../../../config";

export async function POST(req: Request) {
  const { name, email, phoneNumber, service, description } = await req.json();

  const transporter = nodemailer.createTransport({
    service: config.emailService,
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  const mailOptions = {
    from: email,
    to: config.receiverEmail,
    subject: "New Service Request",
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
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 },
    );
  }
}
