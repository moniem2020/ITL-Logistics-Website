import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'ITL Logistics Egypt | Global Freight Forwarding Solutions',
    description: 'ITL Logistics Egypt - Your trusted freight forwarding partner. Expert solutions in ocean freight, air freight, and inland transport across the globe.',
    keywords: 'freight forwarding, logistics, ocean freight, air freight, inland transport, Egypt, supply chain',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
