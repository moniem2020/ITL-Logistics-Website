# ITL Logistics Egypt - Website

Modern, professional website for ITL Logistics Egypt - a leading freight forwarding company.

## 🚀 Features

- **Next.js 14** with App Router
- **6 Pages:** Home, Services, About, Industries, Events, Contact
- **Email Backend:** Contact form and quote request APIs using Nodemailer
- **Responsive Design:** Mobile-friendly navigation
- **Modern UI:** Premium design with smooth animations

## 🛠️ Tech Stack

- Next.js 14
- React 18
- Nodemailer (email sending)
- CSS (custom styling)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/moniem2020/ITL-Logistics-Website.git
cd ITL-Logistics-Website

# Install dependencies
npm install
```

## ⚙️ Configuration

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
RECIPIENT_EMAIL=info@itlogistic.net
```

**Note:** For Gmail, you'll need to create an [App Password](https://support.google.com/accounts/answer/185833).

## 🚦 Running Locally

```bash
# Development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## 📧 Email Forms

The website includes two API routes for email functionality:

- `/api/contact` - General contact form
- `/api/quote` - Shipping quote requests

Both routes use Nodemailer to send emails to the configured recipient.

## 📄 License

© 2024 ITL Logistics Egypt. All rights reserved.
