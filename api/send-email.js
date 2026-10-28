import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, projectType, message } = req.body || {};

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, email, and message are required fields.' 
    });
  }

  const userEmail = process.env.SMTP_USER || 'anehittech@gmail.com';
  const userPass = process.env.SMTP_PASS; // Gmail App Password
  const notificationRecipient = process.env.NOTIFICATION_EMAIL || 'anehittech@gmail.com';

  // If no SMTP_PASS configured, fail gracefully so frontend fallback can take over
  if (!userPass) {
    console.warn('SMTP_PASS environment variable is missing.');
    return res.status(500).json({ 
      success: false, 
      message: 'SMTP credentials not configured on server.' 
    });
  }

  // Configure transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: userEmail,
      pass: userPass
    }
  });

  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim();
  const cleanProjectType = String(projectType || 'Custom Project').trim();
  const cleanMessage = String(message).trim().replace(/\n/g, '<br/>');
  const submissionDate = new Date().toLocaleString('en-US', { 
    timeZone: 'Asia/Kolkata', 
    dateStyle: 'medium', 
    timeStyle: 'short' 
  });

  // 1. HTML Template for Team Notification Email
  const teamNotificationHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
          .header { background: #090d16; padding: 28px 32px; border-bottom: 2px solid #0284c7; }
          .brand-title { color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; letter-spacing: -0.5px; }
          .badge { display: inline-block; background: #0284c7; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px; text-transform: uppercase; margin-left: 6px; }
          .header-sub { color: #94a3b8; font-size: 13px; margin-top: 4px; font-family: monospace; }
          .content { padding: 32px; }
          .alert-pill { display: inline-block; background: #f0fdf4; border: 1px solid #bbf7d0; color: #15803d; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; }
          .field-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; font-family: monospace; }
          .field-value { font-size: 15px; color: #0f172a; font-weight: 600; margin-bottom: 18px; }
          .message-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-top: 8px; font-size: 14px; line-height: 1.6; color: #334155; }
          .reply-btn { display: inline-block; background: #0284c7; color: #ffffff !important; font-weight: 700; font-size: 14px; text-decoration: none; padding: 12px 24px; border-radius: 10px; margin-top: 24px; }
          .footer { background: #f8fafc; padding: 20px 32px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="brand-title">AneHit<span class="badge">TECH</span></h1>
            <div class="header-sub">IDEAS TO IMPACT · INCOMING PROJECT BRIEF</div>
          </div>
          <div class="content">
            <span class="alert-pill">● New Website Lead Captured</span>
            
            <div class="field-label">Sender Name</div>
            <div class="field-value">${cleanName}</div>

            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${cleanEmail}" style="color: #0284c7; text-decoration: none;">${cleanEmail}</a></div>

            <div class="field-label">Requested Project Type</div>
            <div class="field-value" style="color: #0369a1;">${cleanProjectType}</div>

            <div class="field-label">Received At</div>
            <div class="field-value" style="font-size: 13px; color: #64748b;">${submissionDate} (IST)</div>

            <div class="field-label">Project Details & Requirements</div>
            <div class="message-card">
              ${cleanMessage}
            </div>

            <a href="mailto:${cleanEmail}?subject=Re:%20${encodeURIComponent(cleanProjectType)}%20Inquiry%20-%20AneHit%20Tech" class="reply-btn">Reply to ${cleanName} →</a>
          </div>
          <div class="footer">
            AneHit Tech Studio Dispatch · Automated Notification
          </div>
        </div>
      </body>
    </html>
  `;

  // 2. HTML Template for Client Auto-Confirmation Email (0 Watermarks!)
  const clientConfirmationHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
          .header { background: #090d16; padding: 28px 32px; border-bottom: 2px solid #0284c7; }
          .brand-title { color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; letter-spacing: -0.5px; }
          .badge { display: inline-block; background: #0284c7; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px; text-transform: uppercase; margin-left: 6px; }
          .header-sub { color: #94a3b8; font-size: 12px; margin-top: 4px; font-family: monospace; }
          .content { padding: 32px; line-height: 1.6; }
          .greeting { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
          .p-text { font-size: 15px; color: #334155; margin-bottom: 16px; }
          .brief-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 20px 0; }
          .brief-title { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; font-family: monospace; margin-bottom: 8px; }
          .brief-item { font-size: 14px; color: #0f172a; margin-bottom: 6px; }
          .highlight { color: #0284c7; font-weight: 700; }
          .guarantee-box { display: flex; align-items: center; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 14px 16px; margin: 20px 0; font-size: 13px; color: #1e40af; }
          .signature { margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; font-size: 14px; color: #475569; }
          .sig-team { font-weight: 700; color: #0f172a; font-size: 15px; }
          .footer { background: #f8fafc; padding: 18px 32px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="brand-title">AneHit<span class="badge">TECH</span></h1>
            <div class="header-sub">IDEAS TO IMPACT</div>
          </div>
          <div class="content">
            <div class="greeting">Hi ${cleanName},</div>
            <div class="p-text">
              Thank you for reaching out to <strong>AneHit Tech</strong>! We have received your project inquiry for <strong>${cleanProjectType}</strong>.
            </div>
            <div class="p-text">
              Our lead engineering team is already reviewing your brief. We make it a priority to analyze requirements thoroughly and provide thoughtful technical recommendations.
            </div>

            <div class="guarantee-box">
              ⏱ <strong>Fast Response Guarantee:</strong> We reply to all qualified inquiries within 24 hours with an actionable roadmap.
            </div>

            <div class="brief-box">
              <div class="brief-title">Summary of Your Inquiry</div>
              <div class="brief-item"><strong>Service Category:</strong> <span class="highlight">${cleanProjectType}</span></div>
              <div class="brief-item"><strong>Project Details:</strong></div>
              <div style="font-size: 13.5px; color: #475569; margin-top: 4px; padding-left: 8px; border-left: 2px solid #cbd5e1;">
                ${cleanMessage}
              </div>
            </div>

            <div class="p-text">
              If you have any supporting documents, wireframes, or reference links, feel free to reply directly to this email at any time.
            </div>

            <div class="signature">
              Best regards,<br/>
              <span class="sig-team">AneHit Tech Team</span><br/>
              Turning ideas into digital solutions<br/>
              <a href="mailto:anehittech@gmail.com" style="color: #0284c7; text-decoration: none;">anehittech@gmail.com</a>
            </div>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} AneHit Tech. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    // 1. Send team notification
    await transporter.sendMail({
      from: `"AneHit Website Leads" <${userEmail}>`,
      to: notificationRecipient,
      replyTo: cleanEmail,
      subject: `🚀 Lead: ${cleanProjectType} from ${cleanName}`,
      html: teamNotificationHtml
    });

    // 2. Send client confirmation
    await transporter.sendMail({
      from: `"AneHit Tech" <${userEmail}>`,
      to: cleanEmail,
      subject: `We received your inquiry — AneHit Tech`,
      html: clientConfirmationHtml
    });

    return res.status(200).json({ success: true, message: 'Emails dispatched successfully.' });
  } catch (error) {
    console.error('Nodemailer dispatch error:', error);
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Failed to send email via SMTP' 
    });
  }
}
