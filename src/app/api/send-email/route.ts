import { NextResponse } from "next/server";
//@ts-ignore
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName")?.toString();
    const email = formData.get("email")?.toString();

    const file = formData.get("projectFiles") as File | null;

    if (!firstName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "mail.asia-translations.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const attachments = file
      ? [
          {
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
            contentType: file.type,
          },
        ]
      : [];

    await transporter.sendMail({
      from: `"Asia Translations" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: "New Quote Request",
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Quote Request Received</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0"
                  style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      
                  <!-- Logo -->
                  <tr>
                    <td align="center" style="padding:30px;background:#1F3A4A;">
                      <img
                        src="/public/logo-icon.PNG"
                        alt="Asia Translations"
                        width="180"
                        style="display:block;"
                      />
                    </td>
                  </tr>
      
                  <!-- Message -->
                  <tr>
                    <td style="padding:30px;color:#333333;text-align:center;">
                      <h2 style="color:#1F3A4A;margin-top:0;">
                        Thank You for Your Request
                      </h2>
      
                      <p>
                        We have successfully received your request for a quote.
                      </p>
      
                      <p>
                        Our team is currently reviewing the details and will get back to you shortly.
                      </p>
      
                      <p>
                        If you have any additional information to share, feel free to reply to this email.
                      </p>
      
                      <p style="margin-top:30px;">
                        Best regards,<br />
                        <strong>Asia Translations Team</strong>
                      </p>
                    </td>
                  </tr>
      
                  <!-- Footer -->
                  <tr>
                    <td align="center"
                      style="padding:20px;background:#f0f2f4;font-size:12px;color:#777;">
                      © ${new Date().getFullYear()} Asia Translations. All rights reserved.
                    </td>
                  </tr>
      
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
      `,
      attachments,
    });

    return NextResponse.json({ message: "Email Sent Successfully!" }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
