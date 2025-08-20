import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, taxYear, isAmend, service } =
      await req.json();

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.ADMIN_EMAIL
    ) {
      throw new Error("SMTP environment variables missing");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465 ? true : false, // false for TLS (587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Tax Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Tax Form Submission - ${service}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color: #333; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:8px; overflow:hidden;">
      <div style="background-color:#4CAF50; color:white; padding:20px; text-align:center;">
        <h1 style="margin:0; font-size:24px;">Tax Form Submission</h1>
      </div>
      <div style="padding:20px;">
        <p style="font-size:16px;"><strong>Service Selected:</strong> ${service}</p>
        <p style="font-size:16px;"><strong>Amendment:</strong> ${
          isAmend ? "Yes" : "No"
        }</p>
        <p style="font-size:16px;"><strong>First Name:</strong> ${firstName}</p>
        <p style="font-size:16px;"><strong>Last Name:</strong> ${lastName}</p>
        <p style="font-size:16px;"><strong>Email:</strong> ${email}</p>
        <p style="font-size:16px;"><strong>Phone:</strong> ${phone}</p>
        <p style="font-size:16px;"><strong>Tax Year:</strong> ${taxYear}</p>
      </div>
      <div style="background-color:#f4f4f4; text-align:center; padding:10px; font-size:12px; color:#666;">
        &copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
