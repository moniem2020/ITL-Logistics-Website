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
                                    {/* Cargo Ship Icon */}
                                    <path d="M8 36h48v8l-4 4H12l-4-4v-8z" />
                                    <rect x="16" y="20" width="32" height="16" />
                                    <rect x="20" y="12" width="24" height="8" />
                                    <path d="M28 12V8h8v4" />
                                    <circle cx="16" cy="50" r="2" />
                                    <circle cx="32" cy="50" r="2" />
                                    <circle cx="48" cy="50" r="2" />
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
                                    {/* Cargo Airplane Icon */}
                                    <path d="M32 16L8 32h48L32 16z" />
                                    <path d="M32 32v16" />
                                    <path d="M20 36l12 12 12-12" />
                                    <line x1="16" y1="32" x2="16" y2="40" />
                                    <line x1="48" y1="32" x2="48" y2="40" />
                                    <rect x="28" y="8" width="8" height="8" />
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
                                    {/* Delivery Truck Icon */}
                                    <rect x="8" y="24" width="32" height="16" rx="2" />
                                    <path d="M40 32h12l6 8v8H40" />
                                    <circle cx="18" cy="52" r="4" />
                                    <circle cx="46" cy="52" r="4" />
                                    <line x1="14" y1="28" x2="34" y2="28" />
                                    <line x1="14" y1="32" x2="28" y2="32" />
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
                                    {/* Car Icon for Automotive */}
                                    <path d="M8 28l4-8h24l4 8v8H8v-8z" />
                                    <circle cx="16" cy="36" r="3" />
                                    <circle cx="32" cy="36" r="3" />
                                    <line x1="16" y1="20" x2="18" y2="20" />
                                    <line x1="30" y1="20" x2="32" y2="20" />
                                </svg>
                            </div>
                            <h3>Automotive</h3>
                            <p>Just-in-time delivery and specialized automotive logistics</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">
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
                            <h3>High-Tech & Electronics</h3>
                            <p>Secure handling for sensitive technology products</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Shopping Bag Icon for Retail */}
                                    <path d="M8 16h32l2 24H6l2-24z" />
                                    <path d="M16 16v-4a8 8 0 0116 0v4" />
                                    <line x1="16" y1="24" x2="16" y2="24" />
                                    <line x1="32" y1="24" x2="32" y2="24" />
                                </svg>
                            </div>
                            <h3>Retail & E-Commerce</h3>
                            <p>Scalable solutions for omnichannel retail</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                    {/* Medical Cross Icon for Pharma */}
                                    <path d="M24 8v32M12 20h24M12 28h24" />
                                    <rect x="20" y="12" width="8" height="24" rx="1" />
                                    <rect x="14" y="18" width="20" height="12" rx="1" />
                                </svg>
                            </div>
                            <h3>Pharma & Healthcare</h3>
                            <p>GDP-compliant pharmaceutical logistics</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Customers */}
            <section className="customers-section">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-tag">Our Customers</span>
                        <h2 className="section-title">Trusted by Leading Brands</h2>
                    </div>
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <div className="customer-industries">
                            <div className="customer-logo">
                                <img src="/customers/Fresh.webp" alt="Fresh" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Kandil.png" alt="Kandil" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/SASCO Brands.png" alt="SASCO Brands" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Tanta Motors.png" alt="Tanta Motors" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/ITACO.png" alt="ITACO" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Ezz Elarab.png" alt="Ezz Elarab" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Elhelow Style.png" alt="Elhelow Style" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Al Amal for non-woven.png" alt="Al Amal" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Tredco El Sayad.webp" alt="Tredco El Sayad" />
                            </div>
                            {/* Duplicate for infinite scroll */}
                            <div className="customer-logo">
                                <img src="/customers/Fresh.webp" alt="Fresh" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Kandil.png" alt="Kandil" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/SASCO Brands.png" alt="SASCO Brands" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Tanta Motors.png" alt="Tanta Motors" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/ITACO.png" alt="ITACO" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Ezz Elarab.png" alt="Ezz Elarab" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Elhelow Style.png" alt="Elhelow Style" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Al Amal for non-woven.png" alt="Al Amal" />
                            </div>
                            <div className="customer-logo">
                                <img src="/customers/Tredco El Sayad.webp" alt="Tredco El Sayad" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Networks */}
            <section className="networks-section">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-tag">Our Global Network</span>
                        <h2 className="section-title">Worldwide Partnerships</h2>
                        <p className="section-subtitle">
                            Member of leading freight forwarding networks ensuring global reach and reliability
                        </p>
                    </div>
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <div className="network-regions">
                            <div className="network-logo">
                                <img src="/networks/GLA Global Logistics Alliance.webp" alt="GLA Global Logistics Alliance" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/AO Partners, global freight forwarding network.jpg" alt="AO Partners" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/C5C, connecting 5 continents network logo.png" alt="C5C Network" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/EIFFA-logo.png" alt="EIFFA" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/iata-logo-parceiro-travelcare.png" alt="IATA" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/Fédération_Internationale_des_Associations_de_Transitaires_et_Assimilés_(logo).svg.png" alt="FIATA" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/rs=w_512,h_191,cg_true.webp" alt="Network Partner" />
                            </div>
                            {/* Duplicate for infinite scroll */}
                            <div className="network-logo">
                                <img src="/networks/GLA Global Logistics Alliance.webp" alt="GLA Global Logistics Alliance" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/AO Partners, global freight forwarding network.jpg" alt="AO Partners" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/C5C, connecting 5 continents network logo.png" alt="C5C Network" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/EIFFA-logo.png" alt="EIFFA" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/iata-logo-parceiro-travelcare.png" alt="IATA" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/Fédération_Internationale_des_Associations_de_Transitaires_et_Assimilés_(logo).svg.png" alt="FIATA" />
                            </div>
                            <div className="network-logo">
                                <img src="/networks/rs=w_512,h_191,cg_true.webp" alt="Network Partner" />
                            </div>
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
