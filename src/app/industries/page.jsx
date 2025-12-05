import Link from 'next/link'

export const metadata = {
    title: 'Industries We Serve | ITL Logistics Egypt',
    description: 'Specialized logistics solutions for Automotive, High-Tech, Retail, and Pharma industries with tailored services.',
}

export default function IndustriesPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <span className="section-tag">Industries</span>
                        <h1 className="page-title">Specialized Sector Solutions</h1>
                        <p className="page-subtitle">
                            We understand that different industries have unique logistics requirements.
                            Our specialized solutions are designed to meet the specific demands of your sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* Automotive */}
            <section className="industry-detail" id="automotive">
                <div className="container">
                    <div className="industry-detail-grid">
                        <div className="industry-detail-content">
                            <div className="industry-icon-large">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="8" y="20" width="32" height="16" rx="4" />
                                    <circle cx="16" cy="40" r="4" />
                                    <circle cx="32" cy="40" r="4" />
                                </svg>
                            </div>
                            <h2>Automotive Industry</h2>
                            <p className="industry-intro">
                                Just-in-time delivery is critical in automotive logistics. Our services
                                ensure your parts and vehicles arrive exactly when needed.
                            </p>
                            <div className="industry-services">
                                <h4>Our Services Include:</h4>
                                <ul>
                                    <li>JIT (Just-in-Time) Delivery</li>
                                    <li>Spare Parts Logistics</li>
                                    <li>Vehicle Transportation</li>
                                    <li>Production Line Supply</li>
                                    <li>Reverse Logistics</li>
                                </ul>
                            </div>
                            <Link href="/contact" className="btn btn-primary">Get Automotive Solutions</Link>
                        </div>
                        <div className="industry-detail-visual">
                            <div className="industry-image"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* High-Tech */}
            <section className="industry-detail alt" id="high-tech">
                <div className="container">
                    <div className="industry-detail-grid reverse">
                        <div className="industry-detail-content">
                            <div className="industry-icon-large">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="8" y="8" width="32" height="24" rx="2" />
                                    <rect x="16" y="32" width="16" height="8" />
                                </svg>
                            </div>
                            <h2>High-Tech & Electronics</h2>
                            <p className="industry-intro">
                                Technology products require careful handling and secure transportation.
                                Our solutions protect sensitive electronics throughout the journey.
                            </p>
                            <div className="industry-services">
                                <h4>Our Services Include:</h4>
                                <ul>
                                    <li>Anti-Static Packaging</li>
                                    <li>Temperature Control</li>
                                    <li>Secure Chain of Custody</li>
                                    <li>High-Value Cargo Insurance</li>
                                    <li>White Glove Delivery</li>
                                </ul>
                            </div>
                            <Link href="/contact" className="btn btn-primary">Get Tech Solutions</Link>
                        </div>
                        <div className="industry-detail-visual">
                            <div className="industry-image"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Retail */}
            <section className="industry-detail" id="retail">
                <div className="container">
                    <div className="industry-detail-grid">
                        <div className="industry-detail-content">
                            <div className="industry-icon-large">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 40V8l12 8 12-8v32l-12-8-12 8z" />
                                </svg>
                            </div>
                            <h2>Retail & E-Commerce</h2>
                            <p className="industry-intro">
                                Fast, reliable delivery is essential for retail success. We help you
                                meet customer expectations with scalable fulfillment solutions.
                            </p>
                            <div className="industry-services">
                                <h4>Our Services Include:</h4>
                                <ul>
                                    <li>E-Commerce Fulfillment</li>
                                    <li>Peak Season Capacity</li>
                                    <li>Returns Management</li>
                                    <li>Cross-Docking</li>
                                    <li>Last-Mile Delivery</li>
                                </ul>
                            </div>
                            <Link href="/contact" className="btn btn-primary">Get Retail Solutions</Link>
                        </div>
                        <div className="industry-detail-visual">
                            <div className="industry-image"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pharma */}
            <section className="industry-detail alt" id="pharma">
                <div className="container">
                    <div className="industry-detail-grid reverse">
                        <div className="industry-detail-content">
                            <div className="industry-icon-large">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M24 8v32M16 16l8-8 8 8M8 28h32" />
                                </svg>
                            </div>
                            <h2>Pharma & Healthcare</h2>
                            <p className="industry-intro">
                                Healthcare logistics requires strict compliance and temperature control.
                                Our GDP-compliant solutions ensure product integrity.
                            </p>
                            <div className="industry-services">
                                <h4>Our Services Include:</h4>
                                <ul>
                                    <li>GDP-Compliant Transport</li>
                                    <li>Cold Chain Solutions</li>
                                    <li>Temperature Monitoring</li>
                                    <li>Regulatory Documentation</li>
                                    <li>Clinical Trial Logistics</li>
                                </ul>
                            </div>
                            <Link href="/contact" className="btn btn-primary">Get Pharma Solutions</Link>
                        </div>
                        <div className="industry-detail-visual">
                            <div className="industry-image"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Industry Not Listed?</h2>
                        <p className="cta-text">
                            We serve many more industries. Contact us to discuss your specific requirements.
                        </p>
                        <Link href="/contact" className="btn btn-light btn-lg">
                            Talk to Our Experts
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
