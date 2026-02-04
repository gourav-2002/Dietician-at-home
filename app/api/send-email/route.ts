import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SMTP Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'claret.herosite.pro',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // SSL/TLS
  auth: {
    user: process.env.SMTP_USER || 'care@dieticianathome.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

function getAdminEmailTemplate(name: string, email: string, phone: string, serviceType: string, preferredDateTime: string, message: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Query Received</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              
              <!-- Header -->
              <tr>
                <td style="background-color: #217328; padding: 30px 40px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                    🔔 New Query Received
                  </h1>
                  <p style="margin: 10px 0 0 0; color: #E8F5E9; font-size: 14px;">
                    A new inquiry has been submitted through the website
                  </p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <p style="margin: 0 0 25px 0; color: #2C3E50; font-size: 16px; line-height: 1.6;">
                    Hello Admin,
                  </p>
                  <p style="margin: 0 0 30px 0; color: #2C3E50; font-size: 16px; line-height: 1.6;">
                    You have received a new inquiry from a potential client. Below are the details:
                  </p>
                  
                  <!-- Details Table -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #E8F5E9; border-radius: 6px; overflow: hidden;">
                    <tr>
                      <td style="background-color: #217328; padding: 15px 20px; color: #ffffff; font-weight: bold; font-size: 14px; border-bottom: 1px solid #E8F5E9;">
                        Contact Information
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 0;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 15px 20px; border-bottom: 1px solid #F1F8F4; background-color: #FAFAFA; width: 35%; font-weight: 600; color: #2C3E50; font-size: 14px;">
                              Full Name
                            </td>
                            <td style="padding: 15px 20px; border-bottom: 1px solid #F1F8F4; color: #2C3E50; font-size: 14px;">
                              ${name}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 15px 20px; border-bottom: 1px solid #F1F8F4; background-color: #FAFAFA; width: 35%; font-weight: 600; color: #2C3E50; font-size: 14px;">
                              Email Address
                            </td>
                            <td style="padding: 15px 20px; border-bottom: 1px solid #F1F8F4; color: #2C3E50; font-size: 14px;">
                              <a href="mailto:${email}" style="color: #217328; text-decoration: none;">${email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 15px 20px; border-bottom: 1px solid #F1F8F4; background-color: #FAFAFA; width: 35%; font-weight: 600; color: #2C3E50; font-size: 14px;">
                              Phone Number
                            </td>
                            <td style="padding: 15px 20px; border-bottom: 1px solid #F1F8F4; color: #2C3E50; font-size: 14px;">
                              <a href="tel:${phone}" style="color: #217328; text-decoration: none;">${phone}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 15px 20px; border-bottom: 1px solid #F1F8F4; background-color: #FAFAFA; width: 35%; font-weight: 600; color: #2C3E50; font-size: 14px;">
                              Service Type
                            </td>
                            <td style="padding: 15px 20px; border-bottom: 1px solid #F1F8F4; color: #2C3E50; font-size: 14px;">
                              ${serviceType}
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 15px 20px; background-color: #FAFAFA; width: 35%; font-weight: 600; color: #2C3E50; font-size: 14px;">
                              Preferred Date & Time
                            </td>
                            <td style="padding: 15px 20px; color: #217328; font-weight: 600; font-size: 14px;">
                              📅 ${preferredDateTime}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Message Section -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 25px; border: 1px solid #E8F5E9; border-radius: 6px; overflow: hidden;">
                    <tr>
                      <td style="background-color: #217328; padding: 15px 20px; color: #ffffff; font-weight: bold; font-size: 14px;">
                        Message
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px; background-color: #FAFAFA; color: #2C3E50; font-size: 14px; line-height: 1.8;">
                        ${message || '<em style="color: #999;">No message provided</em>'}
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Action Required -->
                  <div style="margin-top: 30px; padding: 20px; background-color: #FFF8F0; border-left: 4px solid #E67E42; border-radius: 6px;">
                    <p style="margin: 0; color: #2C3E50; font-size: 14px; line-height: 1.6;">
                      <strong style="color: #E67E42;">⚡ Action Required:</strong><br>
                      Please follow up with this inquiry within 24 hours to maintain our service commitment.
                    </p>
                  </div>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #F1F8F4; padding: 25px 40px; text-align: center; border-top: 1px solid #E8F5E9;">
                  <p style="margin: 0 0 8px 0; color: #2C3E50; font-size: 13px; font-weight: 600;">
                    Dietician at Home
                  </p>
                  <p style="margin: 0; color: #7BA89C; font-size: 12px;">
                    India's First Premium At-Location Nutrition Care
                  </p>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

function getUserEmailTemplate(name: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Reaching Out</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              
              <!-- Header -->
              <tr>
                <td style="background-color: #217328; padding: 40px 40px 30px 40px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">
                    Dietician at Home
                  </h1>
                  <p style="margin: 10px 0 0 0; color: #E8F5E9; font-size: 15px; letter-spacing: 0.5px;">
                    India's First Premium At-Location Nutrition Care
                  </p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 50px 40px;">
                  <h2 style="margin: 0 0 20px 0; color: #217328; font-size: 26px; font-weight: bold; text-align: center;">
                    Thank You for Reaching Out!
                  </h2>
                  
                  <p style="margin: 0 0 20px 0; color: #2C3E50; font-size: 16px; line-height: 1.8;">
                    Dear <strong>${name}</strong>,
                  </p>
                  
                  <p style="margin: 0 0 20px 0; color: #2C3E50; font-size: 16px; line-height: 1.8;">
                    Thank you for your interest in <strong>Dietician at Home</strong>. We have successfully received your inquiry and truly appreciate you taking the time to connect with us.
                  </p>
                  
                  <p style="margin: 0 0 30px 0; color: #2C3E50; font-size: 16px; line-height: 1.8;">
                    Our dedicated care team has been notified about your request and will review your information carefully. You can expect to hear back from us <strong>within the next 24 hours</strong>.
                  </p>
                  
                  <!-- What Happens Next -->
                  <div style="background-color: #F1F8F4; border-left: 4px solid #217328; border-radius: 6px; padding: 25px; margin: 30px 0;">
                    <h3 style="margin: 0 0 15px 0; color: #217328; font-size: 18px; font-weight: bold;">
                      📋 What Happens Next?
                    </h3>
                    <ul style="margin: 0; padding: 0 0 0 20px; color: #2C3E50; font-size: 15px; line-height: 1.8;">
                      <li style="margin-bottom: 10px;">Our team will review your details and preferred session time</li>
                      <li style="margin-bottom: 10px;">We'll reach out via phone or email to discuss your health goals</li>
                      <li style="margin-bottom: 10px;">You'll receive information about our programs and pricing</li>
                      <li style="margin-bottom: 0;">We'll answer any questions you may have</li>
                    </ul>
                  </div>
                  
                  <!-- Why Choose Us -->
                  <div style="background-color: #FFF8F0; border-radius: 6px; padding: 25px; margin: 30px 0;">
                    <h3 style="margin: 0 0 15px 0; color: #E67E42; font-size: 18px; font-weight: bold;">
                      ✨ Why Choose Dietician at Home?
                    </h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #2C3E50; font-size: 15px;">
                          ✓ Monthly at-location visits by trained representatives
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #2C3E50; font-size: 15px;">
                          ✓ Weekly sessions with qualified Dieticians
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #2C3E50; font-size: 15px;">
                          ✓ Personalized meal plans delivered via mobile app
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #2C3E50; font-size: 15px;">
                          ✓ Professional tracking device included
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #2C3E50; font-size: 15px;">
                          ✓ Data-driven, results-focused approach
                        </td>
                      </tr>
                    </table>
                  </div>
                  
                  <p style="margin: 30px 0 0 0; color: #2C3E50; font-size: 16px; line-height: 1.8;">
                    If you have any urgent questions in the meantime, feel free to reach out to us at <a href="tel:+919899480775" style="color: #217328; text-decoration: none; font-weight: 600;">+91 98994 80775</a> or reply to this email.
                  </p>
                  
                  <p style="margin: 25px 0 0 0; color: #2C3E50; font-size: 16px; line-height: 1.8;">
                    We look forward to being a part of your health journey!
                  </p>
                  
                  <p style="margin: 30px 0 0 0; color: #2C3E50; font-size: 16px; line-height: 1.8;">
                    Warm regards,<br>
                    <strong style="color: #217328;">The Dietician at Home Team</strong>
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #2C3E50; padding: 30px 40px; text-align: center;">
                  <p style="margin: 0 0 15px 0; color: #ffffff; font-size: 15px; font-weight: 600;">
                    Contact Us
                  </p>
                  <p style="margin: 0 0 8px 0; color: #E8F5E9; font-size: 14px;">
                    📧 <a href="mailto:care@dieticianathome.com" style="color: #E8F5E9; text-decoration: none;">care@dieticianathome.com</a>
                  </p>
                  <p style="margin: 0 0 8px 0; color: #E8F5E9; font-size: 14px;">
                    📞 <a href="tel:+919899480775" style="color: #E8F5E9; text-decoration: none;">+91 98994 80775</a>
                  </p>
                  <p style="margin: 0 0 20px 0; color: #E8F5E9; font-size: 14px;">
                    🏢 Quest, Ocus Quantum, Sector-51, Gurugram
                  </p>
                  <p style="margin: 0; color: #7BA89C; font-size: 12px;">
                    © 2026 Dietician at Home. All rights reserved.
                  </p>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, serviceType, preferredDateTime, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !preferredDateTime) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // EMAIL 1: To Admin
    await transporter.sendMail({
      from: 'care@dieticianathome.com',
      to: 'care@dieticianathome.com',
      subject: 'New Query Received',
      html: getAdminEmailTemplate(name, email, phone, serviceType, preferredDateTime, message)
    });

    // EMAIL 2: To User
    await transporter.sendMail({
      from: 'care@dieticianathome.com',
      to: email,
      subject: 'Thank You for Reaching Out - We\'ll Be in Touch Soon',
      html: getUserEmailTemplate(name)
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
