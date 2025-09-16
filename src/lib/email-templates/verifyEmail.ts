function verifyEmailTemplate(userName: string, userId: string, verificationUrl: string) {
    return `
   

<div style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f3f4f6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 20px;">
                <table role="presentation"
                    style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-collapse: collapse; overflow: hidden;">


                    <tr>
                        <td
                            style="background: linear-gradient(135deg, #0c634c 0%, #088b25 50%, #be1414 100%); padding: 15px 10px; text-align: center; position: relative;">
                            <!-- Security Badge -->
                            <div style="display: flex; justify-content: center; align-items: center; gap: 12px;">
                                <div
                                    style="background-color: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3); border-radius: 50%;  display: flex; align-items: center; justify-content: center;">
                                    <img src="logo" alt="">

                                </div>
                                <div>
                                    <p
                                        style="margin: 0; text-align: left; color: rgba(255,255,255,0.95); font-size: 22px; font-weight: 500;">
                                        E-Bangladesh</p>
                                    <p style="margin: 0; color: rgba(255,255,255,0.95); font-size: 12px; ">
                                        Government Digital Services Portal</p>
                                </div>

                            </div>



                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px 40px 20px 40px;">
                            <!-- Greeting -->
                            <div style="text-align: center; margin-bottom: 30px;">

                                <h1
                                    style="margin: 0 0 10px 0;  font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                                    Email Verification Required</h1>
                                <p style="margin: 0; color: #6b7280; font-size: 16px; line-height: 1.6;">
                                  Dear <strong>${userName}</strong>, please verify your email address to complete your account setup.
                              </p>
                            </div>

                            <!-- Account Details Box -->
                            <div
                                style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin: 25px 0; text-align: center;">
                                <div style="margin-bottom: 15px;">
                                    <span
                                        style="display: inline-block; background-color: #dbeafe; color: #1e40af; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600;">Account
                                        Registration</span>
                                </div>

                                
                                <p style="margin: 0 0 10px 0; color: #374151; font-size: 14px;"><strong>Account
                                        ID:</strong>  ${userId}</p>

                            </div>

                            <!-- Verification Message -->
                            <div style="text-align: center; margin: 30px 0;">
                                <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.7;">
                                    To ensure the security of your government services account and complete your
                                    registration, please click the button below to verify your email address.
                                </p>
                                <p style="margin: 0 0 25px 0; color: #6b7280; font-size: 14px;">
                                    This verification link will expire in <strong style="color: #dc2626;">24
                                        hours</strong> for your security.
                                </p>
                            </div>

                            <!-- Verification Button -->
                            <div style="text-align: center; margin: 35px 0;">
                                <a href="${verificationUrl}"
                                    style="display: inline-block; background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4); transition: all 0.3s ease; border: 2px solid transparent;">
                                    ✓ Verify Email Address
                                </a>
                            </div>


                        </td>
                    </tr>




                    <!-- Footer -->
                    <tr>
                        <td
                            style="background: linear-gradient(135deg, #0c634c 0%, #088b25 50%, #be1414 100%); padding: 25px 40px; text-align: center;">

                            <p style="margin: 0 0 8px 0; color: #ffffff;  font-size: 18px; line-height: 1.5;">
                                Website: <a href="https://e-bangladesh.com" target="_blank"
                                    style="color: #ffffff; text-decoration: none;">E-Bangladesh.com</a>
                            </p>
                            <p style="margin: 0; color: #ffffff; font-weight: 500; font-size: 11px;">
                                © 2025 Government Digital Services. All rights reserved. | Privacy Policy | Terms of
                                Service
                            </p>
                        </td>
                    </tr>

                </table>



            </td>
        </tr>
    </table>
</div>


    `;
}