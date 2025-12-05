import Link from 'next/link'

export const metadata = {
    title: 'Our Services | ITL Logistics Egypt',
    description: 'Comprehensive freight forwarding services including ocean freight, air freight, and inland transport solutions for your global logistics needs.',
}

export default function ServicesPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <span className="section-tag">Our Services</span>
                        <h1 className="page-title">Comprehensive Logistics Solutions</h1>
                        <p className="page-subtitle">
                            From ocean and air freight to inland transport, we provide end-to-end
                            supply chain solutions tailored to your business needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Ocean Freight */}
            <section className="service-detail" id="ocean">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-detail-content">
                            <span className="service-number">01</span>
                            <h2 className="service-detail-title">Ocean Freight</h2>
                            <p className="service-detail-desc">
                                Our ocean freight services connect Egypt to major ports worldwide.
                                Whether you need FCL (Full Container Load) or LCL (Less than Container Load)
                                solutions, we offer competitive rates with reliable transit times.
                            </p>
                            <div className="service-features-grid">
                                <div className="feature-box">
                                    <h4>FCL Shipping</h4>
                                    <p>Dedicated container for your cargo with flexible sizing options</p>
                                </div>
                                <div className="feature-box">
                                    <h4>LCL Consolidation</h4>
                                    <p>Cost-effective shared container solutions for smaller shipments</p>
                                </div>
                                <div className="feature-box">
                                    <h4>Real-time Tracking</h4>
                                    <p>Monitor your shipment status 24/7 with our tracking system</p>
                                </div>
                                <div className="feature-box">
                                    <h4>Customs Clearance</h4>
                                    <p>End-to-end customs documentation and clearance support</p>
                                </div>
                            </div>
                            <Link href="/contact" className="btn btn-primary btn-lg">Get Ocean Freight Quote</Link>
                        </div>
                        <div className="service-detail-visual">
                            <div className="service-image"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Air Freight */}
            <section className="service-detail alt" id="air">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-detail-content">
                            <span className="service-number">02</span>
                            <h2 className="service-detail-title">Air Freight</h2>
                            <p className="service-detail-desc">
                                When time is critical, our air freight services deliver. We partner with
                                major airlines to provide express and standard air cargo solutions with
                                guaranteed delivery windows.
                            </p>
                            <ul className="service-benefits">
                                <li><span className="check-icon">✓</span> Express & Standard Options</li>
                                <li><span className="check-icon">✓</span> Temperature-Controlled Shipping</li>
                                <li><span className="check-icon">✓</span> Dangerous Goods Handling</li>
                                <li><span className="check-icon">✓</span> Charter Services Available</li>
                                <li><span className="check-icon">✓</span> Door-to-Airport & Airport-to-Airport</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary btn-lg">Get Air Freight Quote</Link>
                        </div>
                        <div className="service-detail-visual">
                            <div className="service-image"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inland Transport */}
            <section className="service-detail" id="inland">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-detail-content">
                            <span className="service-number">03</span>
                            <h2 className="service-detail-title">Inland Transport</h2>
                            <p className="service-detail-desc">
                                Complete your supply chain with our reliable ground transportation services.
                                We connect ports to final destinations across Egypt and neighboring regions.
                            </p>
                            <ul className="service-benefits">
                                <li><span className="check-icon">✓</span> Door-to-Door Delivery</li>
                                <li><span className="check-icon">✓</span> Last-Mile Solutions</li>
                                <li><span className="check-icon">✓</span> Warehousing & Distribution</li>
                                <li><span className="check-icon">✓</span> Cross-Border Transport</li>
                                <li><span className="check-icon">✓</span> Fleet Tracking Technology</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary btn-lg">Get Transport Quote</Link>
                        </div>
                        <div className="service-detail-visual">
                            <div className="service-image"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="additional-services">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-tag">Value-Added Services</span>
                        <h2 className="section-title">Complete Your Supply Chain</h2>
                    </div>
                    <div className="additional-grid">
                        <div className="additional-card">
                            <div className="additional-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                </svg>
                            </div>
                            <h3>Customs Clearance</h3>
                            <p>Expert handling of import/export documentation and regulatory compliance</p>
                        </div>
                        <div className="additional-card">
                            <div className="additional-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                                </svg>
                            </div>
                            <h3>Warehousing</h3>
                            <p>Secure storage solutions with inventory management systems</p>
                        </div>
                        <div className="additional-card">
                            <div className="additional-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3>Cargo Insurance</h3>
                            <p>Comprehensive coverage to protect your valuable shipments</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Ship?</h2>
                        <p className="cta-text">
                            Get a personalized quote for your logistics needs today.
                        </p>
                        <Link href="/contact" className="btn btn-light btn-lg">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
