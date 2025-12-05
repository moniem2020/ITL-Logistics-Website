import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const body = await request.json()
        const {
            name,
            email,
            phone,
            company,
            cargoType,
            weight,
            origin,
            destination,
            serviceType,
            urgency,
            additionalInfo
        } = body

        // Validate required fields
        if (!name || !email || !origin || !destination) {
            return NextResponse.json(
                { error: 'Name, email, origin, and destination are required' },
                { status: 400 }
            )
        }

        // Check if email credentials are configured
        const emailUser = process.env.EMAIL_USER
        const emailPass = process.env.EMAIL_APP_PASSWORD
        const recipientEmail = process.env.RECIPIENT_EMAIL || 'info@itlogistic.net'

        if (!emailUser || !emailPass) {
            console.log('Email not configured - logging quote request:')
            console.log(body)

            return NextResponse.json({
                success: true,
                message: 'Quote request received (email not configured)',
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
            subject: `🚚 New Quote Request from ${name} - ${origin} to ${destination}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%); color: white; padding: 25px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">ITL Logistics Egypt</h1>
            <p style="margin: 10px 0 0 0; color: #dc2626; font-weight: bold;">NEW QUOTE REQUEST</p>
          </div>
          
          <div style="background: #dc2626; color: white; padding: 15px; text-align: center;">
            <strong>${origin}</strong> → <strong>${destination}</strong>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #0a1628; margin-top: 0; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Client Information</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 40%;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #dc2626;">${email}</a></td>
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
            </table>
            
            <h2 style="color: #0a1628; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Shipment Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 40%;"><strong>Origin:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${origin}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Destination:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${destination}</td>
              </tr>
              ${serviceType ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Service Type:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${serviceType}</td>
              </tr>
              ` : ''}
              ${cargoType ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Cargo Type:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${cargoType}</td>
              </tr>
              ` : ''}
              ${weight ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Weight:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${weight}</td>
              </tr>
              ` : ''}
              ${urgency ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Urgency:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="background: ${urgency === 'Urgent' ? '#dc2626' : '#10b981'}; color: white; padding: 3px 8px; border-radius: 4px; font-size: 12px;">${urgency}</span>
                </td>
              </tr>
              ` : ''}
            </table>
            
            ${additionalInfo ? `
            <h3 style="color: #0a1628; margin-top: 25px;">Additional Information</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
              ${additionalInfo.replace(/\n/g, '<br>')}
            </div>
            ` : ''}
          </div>
          
          <div style="background: #0a1628; color: #94a3b8; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This quote request was submitted via the ITL Logistics website.</p>
            <p style="margin: 5px 0 0 0;">Please respond within 24 hours.</p>
          </div>
        </div>
      `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({
            success: true,
            message: 'Quote request sent successfully',
        })

    } catch (error) {
        console.error('Quote request error:', error)
        return NextResponse.json(
            { error: 'Failed to send quote request', details: error.message },
            { status: 500 }
        )
    }
}
