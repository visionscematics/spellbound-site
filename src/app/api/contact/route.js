import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// export const runtime = 'edge';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, course, email, mobile, company } = body;

    const username = process.env.NEXT_PUBLIC_EMAIL;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const prodUsername = process.env.NEXT_PUBLIC_PROD_EMAIL || 'production@spellboundvfx.com';
    const prodPassword = process.env.NEXT_PUBLIC_PROD_EMAIL_PASSWORD;


    console.log("🚀 ~ POST ~ username:", username)

    console.log('Email credentials:', { username, password });

    if (!username || !password) {
      throw new Error("Email credentials are not defined");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: username,
        pass: password,
      },
    });

    await Promise.all([
      transporter.sendMail({
        from: username,
        to: username,
        // to: "ramasrij18@gmail.com",
        subject: `VFX Contact Submission for ${course} - VFX`,
        replyTo: email,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: linear-gradient(to right, #f4a31f, #d62d7c, #1e40af);">
              <h2 style="background-color: rgba(0, 0, 0, 0.5); color: white; text-align: center; padding: 10px; border-radius: 10px;">VFX Contact Submission</h2>
              
              <table style="width: 100%; border-collapse: collapse; background-color: white; border-radius: 10px;">
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Course:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${course}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Mobile:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${mobile}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Company:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${company}</td>
                </tr>
              </table>
        
              <p style="text-align: center; margin-top: 20px; color: white;">
                <strong>Digiaura</strong> <br />
                <a href="mailto:${username}" style="color: #ffffff;">Contact Us</a>
              </p>
            </div>
          `,
      }),

      transporter.sendMail({
        from: username,
        to: prodUsername,
        subject: `VFX Contact Submission for ${course} - VFX`,
        replyTo: email,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: linear-gradient(to right, #f4a31f, #d62d7c, #1e40af);">
              <h2 style="background-color: rgba(0, 0, 0, 0.5); color: white; text-align: center; padding: 10px; border-radius: 10px;">VFX Contact Submission</h2>
              
              <table style="width: 100%; border-collapse: collapse; background-color: white; border-radius: 10px;">
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Course:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${course}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Mobile:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${mobile}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Company:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${company}</td>
                </tr>
              </table>
        
              <p style="text-align: center; margin-top: 20px; color: white;">
                <strong>Digiaura</strong> <br />
                <a href="mailto:${username}" style="color: #ffffff;">Contact Us</a>
              </p>
            </div>
          `,
      }),

      transporter.sendMail({
        from: username,
        to: email,
        subject: `Thank You for Contacting VFX Academy`,
        replyTo: username,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background: linear-gradient(to right, #f4a31f, #d62d7c, #1e40af);">
              <h2 style="background-color: rgba(0, 0, 0, 0.5); color: white; text-align: center; padding: 10px; border-radius: 10px;">Thank You for Contacting Us</h2>
              <p style="font-size: 16px; color: white; text-align: justify;">
                Dear ${name},<br/><br/>
                Thank you for reaching out to <strong>Spellbound VFX </strong>. We appreciate your interest in our <strong>${course}</strong> course. 
                Our team will review your inquiry and get back to you shortly. 
              </p>
        
              <p style="font-size: 16px; color: white; text-align: justify;">
                If you have any immediate questions, feel free to reply to this email, or contact us at <a href="mailto:${username}" style="color: #ffffff;">${username}</a>.
              </p>
              
              <p style="text-align: center; margin-top: 20px; color: white;">
                <strong>Spellbound VFX </strong> <br/>
                <a href="mailto:${username}" style="color: #ffffff;">Contact Us</a>
              </p>
            </div>
          `,
      })

    ])


    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
