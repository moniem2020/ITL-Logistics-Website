import Link from 'next/link'

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="hero-bg"></div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon">🌍</span>
                            <span>Your Trusted Freight Partner Since 2023</span>
                        </div>

                        <h1 className="hero-title">
                            <span className="title-line">Global Logistics</span>
                            <span className="title-line accent">Solutions</span>
                        </h1>

                        <p className="hero-subtitle">
                            From Egypt to the world, we deliver excellence through precision,
                            reliability, and decades of expertise. We deliver what matters most.
                        </p>

                        <div className="hero-cta">
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                <span>Request a Quote</span>
                                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/services" className="btn btn-outline btn-lg">
                                <span>Explore Services</span>
                            </Link>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Years Combined Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Global Partners</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services" id="services">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-tag">Our Services</span>
                        <h2 className="section-title">Comprehensive Logistics Solutions</h2>
                        <p className="section-subtitle">
                            End-to-end freight forwarding services tailored to your unique requirements
                        </p>
                    </div>

                    <div className="services-grid">
                        {/* Ocean Freight */}
                        <div className="service-card featured">
                            <span className="service-badge">Most Popular</span>
                            <div className="service-icon">
                                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M8 40h48l-8-16H16l-8 16z" />
                                    <path d="M12 40v8h40v-8" />
                                    <circle cx="20" cy="52" r="4" />
                                    <circle cx="44" cy="52" r="4" />
                                </svg>
                            </div>
                            <h3 className="service-title">Ocean Freight</h3>
                            <p className="service-desc">
                                Comprehensive sea freight solutions covering FCL and LCL shipments
                                across major global trade routes with competitive transit times.
                            </p>
                            <ul className="service-features">
                                <li>FCL & LCL Options</li>
                                <li>Real-time Tracking</li>
                                <li>Customs Clearance</li>
                            </ul>
                            <Link href="/services#ocean" className="service-link">
                                Learn More
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Air Freight */}
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M32 8l24 20-24 4-24-4 24-20z" />
                                    <path d="M32 32v24" />
                                    <path d="M24 40l8 16 8-16" />
                                </svg>
                            </div>
                            <h3 className="service-title">Air Freight</h3>
                            <p className="service-desc">
                                Express and standard air cargo services with guaranteed delivery
                                windows and comprehensive handling capabilities.
                            </p>
                            <ul className="service-features">
                                <li>Express & Standard Options</li>
                                <li>Temperature-Controlled</li>
                                <li>Dangerous Goods Handling</li>
                            </ul>
                            <Link href="/services#air" className="service-link">
                                Learn More
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Inland Transport */}
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="8" y="24" width="40" height="20" rx="2" />
                                    <circle cx="16" cy="48" r="4" />
                                    <circle cx="40" cy="48" r="4" />
                                    <path d="M48 32h8l4 8v4h-12" />
                                </svg>
                            </div>
                            <h3 className="service-title">Inland Transport</h3>
                            <p className="service-desc">
                                Reliable ground transportation solutions connecting ports to
                                final destinations with full door-to-door capabilities.
                            </p>
                            <ul className="service-features">
                                <li>Door-to-Door Delivery</li>
                                <li>Last-Mile Delivery</li>
                                <li>Warehousing & Distribution</li>
                            </ul>
                            <Link href="/services#inland" className="service-link">
                                Learn More
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries" id="industries">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-tag">Industries We Serve</span>
                        <h2 className="section-title">Specialized Sector Expertise</h2>
                        <p className="section-subtitle">
                            Tailored logistics solutions designed for the unique demands of your industry
                        </p>
                    </div>

                    <div className="industries-grid">
                        <div className="industry-card">
                            <div className="industry-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="8" y="20" width="32" height="16" rx="4" />
                                    <circle cx="16" cy="40" r="4" />
                                    <circle cx="32" cy="40" r="4" />
                                </svg>
                            </div>
                            <h3>Automotive</h3>
                            <p>Just-in-time delivery and specialized automotive logistics</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="8" y="8" width="32" height="24" rx="2" />
                                    <rect x="16" y="32" width="16" height="8" />
                                </svg>
                            </div>
                            <h3>High-Tech & Electronics</h3>
                            <p>Secure handling for sensitive technology products</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 40V8l12 8 12-8v32l-12-8-12 8z" />
                                </svg>
                            </div>
                            <h3>Retail & E-Commerce</h3>
                            <p>Scalable solutions for omnichannel retail</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M24 8v32M16 16l8-8 8 8M8 28h32" />
                                </svg>
                            </div>
                            <h3>Pharma & Healthcare</h3>
                            <p>GDP-compliant pharmaceutical logistics</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Optimize Your Supply Chain?</h2>
                        <p className="cta-text">
                            Get in touch with our logistics experts today and discover how
                            ITL Logistics can transform your freight operations.
                        </p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="btn btn-light btn-lg">
                                Get Started
                                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/about" className="btn btn-outline-light btn-lg">
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
