import { sendMail } from "../mailer/mailer";

export async function verifyEmailTemplate(
  email: string,
  userId: string,
  verificationUrl: string
) {
  try {
    const subject = "Email Verification Code";

    const body = `
     <div style="margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;background-color:#f3f4f6;">
       <table role="presentation" style="width:100%;border-collapse:collapse;">
         <tr>
           <td style="padding:20px;">
             <table role="presentation"
               style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.08);overflow:hidden;">
               
               <!-- Header -->
               <tr>
                 <td style="background:linear-gradient(135deg,#0c634c 0%,#088b25 50%,#be1414 100%);padding:15px 10px;text-align:center;">
                   <p style="margin:0;color:#fff;font-size:22px;font-weight:600;">E-Bangladesh</p>
                   <p style="margin:0;color:#fff;font-size:12px;">Government Digital Services Portal</p>
                 </td>
               </tr>
               
               <!-- Body -->
               <tr>
                 <td style="padding:40px;">
                   <h1 style="margin:0 0 10px 0;font-size:28px;font-weight:700;">Email Verification Required</h1>
                   <p style="margin:0 0 20px 0;color:#374151;font-size:16px;">
                     Dear <strong>${email}</strong>, please verify your email address to complete your account setup.
                   </p>
                   
                   <div style="margin:25px 0;padding:20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
                     <p style="margin:0;color:#374151;font-size:14px;">
                       <strong>Account ID:</strong> ${userId}
                     </p>
                   </div>
                   
                   <p style="color:#374151;font-size:16px;line-height:1.7;">
                     To complete your registration, click the button below. This link will expire in <strong style="color:#dc2626;">24 hours</strong>.
                   </p>
                   
                   <div style="margin:35px 0;text-align:center;">
                     <a href="${verificationUrl}" 
                       style="display:inline-block;background:linear-gradient(135deg,#1e40af 0%,#3b82f6 100%);color:#fff;padding:14px 28px;border-radius:8px;font-weight:600;text-decoration:none;">
                       ✓ Verify Email Address
                     </a>
                   </div>
                 </td>
               </tr>
               
               <!-- Footer -->
               <tr>
                 <td style="background:linear-gradient(135deg,#0c634c 0%,#088b25 50%,#be1414 100%);padding:20px;text-align:center;color:#fff;">
                   <p style="margin:0 0 5px 0;font-size:14px;">
                     Website: <a href="https://e-bangladesh.com" style="color:#fff;text-decoration:none;">E-Bangladesh.com</a>
                   </p>
                   <p style="margin:0;font-size:11px;">© 2025 Government Digital Services. All rights reserved.</p>
                 </td>
               </tr>
               
             </table>
           </td>
         </tr>
       </table>
     </div>
   `;

    //sendMail
    const result = await sendMail({
      to: email,
      subject,
      body, 
    });

    return { success: true, info: result };
  } catch (error: any) {
    console.error("Error sending verification email:", error);
    return { success: false, error: error.message };
  }
}
