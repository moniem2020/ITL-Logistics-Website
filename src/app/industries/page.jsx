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
                                    {/* Car Icon for Automotive */}
                                    <path d="M8 28l4-8h24l4 8v8H8v-8z" />
                                    <circle cx="16" cy="36" r="3" />
                                    <circle cx="32" cy="36" r="3" />
                                    <line x1="16" y1="20" x2="18" y2="20" />
                                    <line x1="30" y1="20" x2="32" y2="20" />
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
                                    {/* Microchip Icon for High-Tech */}
                                    <rect x="14" y="14" width="20" height="20" rx="2" />
                                    <line x1="10" y1="18" x2="14" y2="18" />
                                    <line x1="10" y1="24" x2="14" y2="24" />
                                    <line x1="10" y1="30" x2="14" y2="30" />
                                    <line x1="34" y1="18" x2="38" y2="18" />
                                    <line x1="34" y1="24" x2="38" y2="24" />
                                    <line x1="34" y1="30" x2="38" y2="30" />
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
                                    {/* Shopping Bag Icon for Retail */}
                                    <path d="M8 16h32l2 24H6l2-24z" />
                                    <path d="M16 16v-4a8 8 0 0116 0v4" />
                                    <line x1="16" y1="24" x2="16" y2="24" />
                                    <line x1="32" y1="24" x2="32" y2="24" />
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
                                    {/* Medical Cross Icon for Pharma */}
                                    <path d="M24 8v32M12 20h24M12 28h24" />
                                    <rect x="20" y="12" width="8" height="24" rx="1" />
                                    <rect x="14" y="18" width="20" height="12" rx="1" />
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
