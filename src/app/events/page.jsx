import Link from 'next/link'

export const metadata = {
    title: 'Events & Exhibitions | ITL Logistics Egypt',
    description: 'Exhibition logistics services and our presence at major trade shows including Beauty Eurasia, Arab Health, and Gulfood.',
}

export default function EventsPage() {
    const exhibitions = [
        {
            name: 'Gulfood',
            years: '2023 - 2024',
            location: 'Dubai, UAE',
            description: 'The world\'s largest annual food & beverage trade show. We provide comprehensive logistics for exhibitors bringing food products and equipment.',
            featured: true
        },
        {
            name: 'Arab Health',
            years: '2023 - 2024',
            location: 'Dubai, UAE',
            description: 'The leading healthcare exhibition in the Middle East. We handle sensitive medical equipment and pharmaceutical displays.',
            featured: true
        },
        {
            name: 'Beauty Eurasia',
            years: '2024',
            location: 'Istanbul, Turkey',
            description: 'Turkey\'s largest beauty and cosmetics trade fair. We specialize in fragile beauty product handling and display logistics.',
            featured: false
        }
    ]

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <span className="section-tag">Events & Exhibitions</span>
                        <h1 className="page-title">Exhibition Logistics Excellence</h1>
                        <p className="page-subtitle">
                            From packing and shipping to on-site delivery and return logistics,
                            we ensure your exhibition presence is seamless and stress-free.
                        </p>
                    </div>
                </div>
            </section>

            {/* Exhibition Services */}
            <section className="exhibition-services">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-tag">Our Services</span>
                        <h2 className="section-title">Complete Exhibition Support</h2>
                    </div>
                    <div className="exhibition-services-grid">
                        <div className="exhibition-service-card">
                            <div className="exhibition-service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                                </svg>
                            </div>
                            <h3>Pre-Show Logistics</h3>
                            <p>Professional packing, documentation, and shipping to ensure your exhibits arrive safely and on time.</p>
                        </div>
                        <div className="exhibition-service-card">
                            <div className="exhibition-service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h3>On-Site Delivery</h3>
                            <p>Coordinated delivery to your booth with tracking and dedicated support throughout the event.</p>
                        </div>
                        <div className="exhibition-service-card">
                            <div className="exhibition-service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="1 4 1 10 7 10" />
                                    <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                                </svg>
                            </div>
                            <h3>Return Logistics</h3>
                            <p>Post-show collection, repacking, and return shipping to your warehouse or next event.</p>
                        </div>
                        <div className="exhibition-service-card">
                            <div className="exhibition-service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <path d="M14 2v6h6M16 13H8M16 17H8" />
                                </svg>
                            </div>
                            <h3>ATA Carnet & Customs</h3>
                            <p>Expert handling of temporary import documentation and customs procedures.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Exhibitions */}
            <section className="featured-exhibitions">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-tag">Our Experience</span>
                        <h2 className="section-title">Exhibitions We&apos;ve Supported</h2>
                    </div>
                    <div className="exhibitions-grid">
                        {exhibitions.map((exhibition, index) => (
                            <div key={index} className={`exhibition-card ${exhibition.featured ? 'featured' : ''}`}>
                                {exhibition.featured && <span className="exhibition-badge">Featured</span>}
                                <div className="exhibition-header">
                                    <span className="exhibition-year">{exhibition.years}</span>
                                    <div className="exhibition-location">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <span>{exhibition.location}</span>
                                    </div>
                                </div>
                                <div className="exhibition-content">
                                    <h3>{exhibition.name}</h3>
                                    <p className="exhibition-desc">{exhibition.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="upcoming-events">
                <div className="container">
                    <div className="upcoming-content">
                        <div className="upcoming-text">
                            <h2>Exhibiting Soon?</h2>
                            <p>
                                Let us handle your exhibition logistics so you can focus on what matters
                                – connecting with your audience and growing your business.
                            </p>
                            <ul className="upcoming-benefits">
                                <li>Dedicated exhibition logistics coordinator</li>
                                <li>Door-to-booth delivery worldwide</li>
                                <li>Temporary import expertise</li>
                                <li>24/7 support during events</li>
                            </ul>
                        </div>
                        <div className="cta-card">
                            <h3>Plan Your Exhibition Logistics</h3>
                            <p>Contact us at least 4 weeks before your event for the best rates and service.</p>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Get Exhibition Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready for Your Next Exhibition?</h2>
                        <p className="cta-text">
                            Partner with ITL Logistics for stress-free exhibition logistics.
                        </p>
                        <Link href="/contact" className="btn btn-light btn-lg">
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
