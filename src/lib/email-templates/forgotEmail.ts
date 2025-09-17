function forgotEmailTemplate(userId: string, resetEmailLink: string) {
    return `


<div style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 20px;">
                <table role="presentation"
                    style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-collapse: collapse; overflow: hidden;">

                    <!-- Header -->
                    <tr>
                        <td
                            style="background: linear-gradient(135deg, #0c634c 0%, #088b25 50%, #be1414 100%); padding: 15px 10px; text-align: center; position: relative;">

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
                            <!-- Alert Message -->
                            <div
                                style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                                <div style="display: flex; align-items: flex-start; gap: 12px;">
                                    <span style="color: #dc2626; font-size: 20px; margin-top: 2px;">⚠️</span>
                                    <div>
                                        <h3
                                            style="margin: 0 0 8px 0; color: #991b1b; font-size: 16px; font-weight: 600;">
                                            Security Notice</h3>
                                        <p style="margin: 0; color: #7f1d1d; font-size: 14px; line-height: 1.5;">
                                            A email reset request has been made for your government services account.
                                            If this was not you, please contact support immediately.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Account Information -->
                            <div style="text-align: center; margin-bottom: 30px;">
                                <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 24px; font-weight: 600;">Reset
                                    Your Email</h2>
                                <p style="margin: 0; color: #6b7280; font-size: 16px; line-height: 1.6;">
                                    We received a request to reset the email for your account
                                </p>
                            </div>

                            <!-- Account Details Box -->
                            <div
                                style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin: 25px 0;">
                                <div style="text-align: center; margin-bottom: 20px;">
                                    <span
                                        style="display: inline-block; background-color: #fef3c7; color: #92400e; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600;">Account
                                        Information</span>
                                </div>

                                <div
                                    style="display: flex; justify-content: space-around; align-items: center; gap: 15px; font-size: 14px;">
                                    
                                    <div>
                                        <strong style="color: #374151;">Account ID:</strong>
                                        <span style="color: #6b7280;">${userId}</span>
                                    </div>

                                </div>
                            </div>

                            <!-- Reset Instructions -->
                            <div style="text-align: center; margin: 30px 0;">
                                <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.7;">
                                    Click the button below to securely reset your email. This link will redirect you
                                    to a secure government portal where you can create a new email.
                                </p>

                                <!-- Countdown Timer Visual -->
                                <div
                                    style="display: inline-block; background-color: #fee2e2; border: 1px solid #fecaca; padding: 12px 20px; border-radius: 6px; margin: 15px 0; font-size: 14px; color: #7f1d1d;">
                                    <span style="font-weight: 600;">Link expires in: </span>
                                    <strong style="color: #dc2626;">30 minutes</strong>
                                </div>
                            </div>

                            <!-- Email Reset Button -->
                            <div style="text-align: center; margin: 35px 0;">
                                <a href="${resetEmailLink}" target="_blank"
                                    style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 14px rgba(220, 38, 38, 0.4); transition: all 0.3s ease; border: 2px solid transparent;">
                                    Reset Email Now
                                </a>
                            </div>



                            <!-- Support Information -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 30px 40px; border-top: 1px solid #e5e7eb;">
                            <div style="text-align: center; margin-bottom: 25px;">
                                <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; font-weight: 600;">Need
                                    Immediate Help?</h3>
                                <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 14px; line-height: 1.6;">
                                    Our security team is available 24/7 to assist with account issues
                                </p>
                            </div>

                            <div
                                style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 15px; margin-bottom: 25px;">
                                <div
                                    style="text-align: center; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">

                                    <strong
                                        style="color: #1e40af; font-size: 14px; display: block; margin-bottom: 5px;">Security
                                        Hotline</strong>
                                    <span style="color: #4b5563; font-size: 13px;">[1-800-GOV-SEC]</span>
                                </div>



                                <div
                                    style="text-align: center; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">

                                    <strong
                                        style="color: #92400e; font-size: 14px; display: block; margin-bottom: 5px;">Email
                                        Support</strong>
                                    <span style="color: #4b5563; font-size: 13px;">security@[gov.gov]</span>
                                </div>
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
};