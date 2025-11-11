import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: { json: () => any; }) {
  console.log("Received request:", req);
  try {
    const body = await req.json();

    const { name, email, comment,pageName } = body;

    console.log("Received body:", body);

    if (!name || !email || !comment || !pageName) {
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const username = process.env.NEXT_PUBLIC_EMAIL;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    //const prodUsername = process.env.NEXT_PUBLIC_PROD_EMAIL || 'production@spellboundvfx.com';
    const prodPassword = process.env.NEXT_PUBLIC_PROD_EMAIL_PASSWORD;


    console.log("🚀 ~ POST ~ username:", username)

    console.log('Email credentials:', { username, password });

    if (!username || !password) {
      throw new Error("Email credentials are not defined");
    }

console.log("Creating comment...");
  const newComment = await prisma.pendingComment.create({
    data: {
      name,
      email,
      comment,
      pageName: "projects",
    
    },
  });
   const baseurl = process.env.BASE_URL || "http://localhost:3000/projects/";
  const approveUrl = `${baseurl}commentApprove?id=${newComment.id}`;
  const rejectUrl = `${baseurl}commentReject?id=${newComment.id}`;

  //  const approveUrl = `https://https://spellboundvfx.com/projects/commentApprove?id=${newComment.id}`;
  // const rejectUrl = `https://digiaura.co.in/commentReject?id=${newComment.id}`;
//   const approveUrl = `https://spellboundvfx.com/projects/commentApprove?id=${newComment.id}`;
// const rejectUrl = `https://spellboundvfx.com/projects/commentReject?id=${newComment.id}`;


  console.log("Sending email...");

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

      const htmlContent = `
      <h2>New Comment Submitted</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Comment:</strong> ${comment}</p>
      <br/>
      <table cellspacing="0" cellpadding="0"> 
        <tr>
          <td align="center" bgcolor="#28a745" style="border-radius:5px;">
            <a href="${approveUrl}" target="_blank" style="display:inline-block;padding:10px 20px;color:#ffffff;text-decoration:none;font-weight:bold;">Approve</a>
          </td>
          <td style="width:20px;"></td>
          <td align="center" bgcolor="#dc3545" style="border-radius:5px;">
            <a href="${rejectUrl}" target="_blank" style="display:inline-block;padding:10px 20px;color:#ffffff;text-decoration:none;font-weight:bold;">Reject</a>
          </td>
        </tr>
      </table>
    `;


  await transporter.sendMail({
    from: username,
     to:"ramasrij18@gmail.com",
    // to: username,
    subject: "New comment for approval",
    replyTo: email,
    html: htmlContent,
  });
  console.log("Responding success...");
  return new Response(JSON.stringify({ message: "Comment received!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
} catch (error) {
  console.error("API error:", error);
  return new Response(JSON.stringify({ message: "Internal Server Error" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
}


