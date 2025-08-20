import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, services, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `Contact Form: ${services}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      
      <!-- Header -->
      <div style="background-color: #224334; color: white; text-align: center; padding: 20px;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      
      <!-- Body -->
      <div style="padding: 20px;">
        <p style="font-size: 16px;"><strong>Full Name:</strong> ${fullName}</p>
        <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 16px;"><strong>Phone:</strong> ${
          phone || "N/A"
        }</p>
        <p style="font-size: 16px;"><strong>Service Selected:</strong> ${services}</p>
        
        <p style="font-size: 16px; margin-top: 15px;"><strong>Message:</strong></p>
        <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #224334; border-radius: 6px; margin-top: 5px;">
          ${message || "No message provided"}
        </div>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #f4f4f4; text-align: center; padding: 15px; font-size: 12px; color: #666;">
        &copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.<br/>
        This email was sent from your website contact form.
      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
