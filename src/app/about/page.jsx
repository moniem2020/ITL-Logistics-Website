import Link from 'next/link'

export const metadata = {
    title: 'About Us | ITL Logistics Egypt',
    description: 'Learn about ITL Logistics Egypt - your trusted freight forwarding partner with over 10 years of combined experience in global logistics.',
}

export default function AboutPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <span className="section-tag">About Us</span>
                        <h1 className="page-title">Your Trusted Logistics Partner</h1>
                        <p className="page-subtitle">
                            Founded in 2023 with a vision to transform freight forwarding in Egypt
                            through innovation, reliability, and exceptional service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <h2>Our Story</h2>
                            <p>
                                ITL Logistics Egypt was founded by industry veterans with a combined experience
                                of over 10 years in international freight forwarding. We saw an opportunity to
                                bring world-class logistics services to Egyptian businesses and international
                                companies shipping to and from the region.
                            </p>
                            <p>
                                Our team brings expertise from leading global logistics companies, ensuring
                                that every shipment benefits from proven best practices and innovative solutions.
                                We&apos;ve built strong partnerships with carriers and agents worldwide, giving us the
                                network strength to handle any logistics challenge.
                            </p>
                        </div>
                        <div className="story-visual">
                            <div className="story-image"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mv-card">
                            <div className="mv-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4M12 8h.01" />
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To deliver seamless, reliable, and cost-effective logistics solutions
                                that empower businesses to grow globally while maintaining the highest
                                standards of service excellence.
                            </p>
                        </div>
                        <div className="mv-card">
                            <div className="mv-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the most trusted freight forwarding partner in Egypt, recognized
                                for our innovation, reliability, and commitment to customer success
                                across all industries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="core-values">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-tag">Our Values</span>
                        <h2 className="section-title">What Drives Us</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <span className="value-number">01</span>
                            <h3>Reliability</h3>
                            <p>Your cargo arrives on time, every time. We take accountability seriously.</p>
                        </div>
                        <div className="value-card">
                            <span className="value-number">02</span>
                            <h3>Transparency</h3>
                            <p>Clear communication and honest pricing with no hidden surprises.</p>
                        </div>
                        <div className="value-card">
                            <span className="value-number">03</span>
                            <h3>Excellence</h3>
                            <p>We continuously improve our services to exceed expectations.</p>
                        </div>
                        <div className="value-card">
                            <span className="value-number">04</span>
                            <h3>Partnership</h3>
                            <p>Your success is our success. We grow together with our clients.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose">
                <div className="container">
                    <div className="choose-grid">
                        <div className="choose-content">
                            <span className="section-tag">The ITL Advantage</span>
                            <h2 className="section-title">Why Choose ITL Logistics</h2>
                            <div className="advantage-list">
                                <div className="advantage-item">
                                    <div className="advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M2 12h20" />
                                            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                                        </svg>
                                    </div>
                                    <div className="advantage-text">
                                        <h4>Global Network</h4>
                                        <p>Partnerships with trusted agents in over 50 countries</p>
                                    </div>
                                </div>
                                <div className="advantage-item">
                                    <div className="advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                    <div className="advantage-text">
                                        <h4>Proven Track Record</h4>
                                        <p>Successful handling of thousands of shipments</p>
                                    </div>
                                </div>
                                <div className="advantage-item">
                                    <div className="advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                                        </svg>
                                    </div>
                                    <div className="advantage-text">
                                        <h4>Dedicated Support</h4>
                                        <p>Personal account managers for every client</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="choose-stats">
                            <div className="stat-box-large">
                                <span className="stat-number-lg">10+</span>
                                <span className="stat-label-lg">Years Combined Experience</span>
                            </div>
                            <div className="stat-box-large">
                                <span className="stat-number-lg">50+</span>
                                <span className="stat-label-lg">Global Partners</span>
                            </div>
                            <div className="stat-box-large">
                                <span className="stat-number-lg">100%</span>
                                <span className="stat-label-lg">Client Satisfaction</span>
                            </div>
                            <div className="stat-box-large">
                                <span className="stat-number-lg">24/7</span>
                                <span className="stat-label-lg">Customer Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Let&apos;s Work Together</h2>
                        <p className="cta-text">
                            Partner with ITL Logistics and experience the difference.
                        </p>
                        <Link href="/contact" className="btn btn-light btn-lg">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
