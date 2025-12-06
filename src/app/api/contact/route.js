import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Check if email credentials are configured
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_APP_PASSWORD
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'sales@itlogistic.net'

    if (!emailUser || !emailPass) {
      console.log('Email not configured - logging contact form submission:')
      console.log({ name, email, phone, company, service, message })

      return NextResponse.json({
        success: true,
        message: 'Contact form received (email not configured)',
        data: { name, email }
      })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    // Email content
    const mailOptions = {
      from: emailUser,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0a1628; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">ITL Logistics Egypt</h1>
            <p style="margin: 5px 0 0 0; color: #94a3b8;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #0a1628; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${phone}</td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Company:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${company}</td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Service Interest:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${service}</td>
              </tr>
              ` : ''}
            </table>
            
            <h3 style="color: #0a1628; margin-top: 25px;">Message</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background: #0a1628; color: #94a3b8; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the ITL Logistics website contact form.</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}
