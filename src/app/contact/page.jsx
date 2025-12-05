'use client'

import { useState } from 'react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: '', message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' })
                setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <span className="section-tag">Contact Us</span>
                        <h1 className="page-title">Get in Touch</h1>
                        <p className="page-subtitle">
                            Have questions about our services? Ready to start shipping?
                            Our team is here to help you find the perfect logistics solution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-page">
                <div className="container">
                    <div className="contact-page-grid">
                        {/* Contact Info */}
                        <div className="contact-info-section">
                            <h2>Let&apos;s Start a Conversation</h2>
                            <p className="contact-intro">
                                Whether you need a quick quote or have complex logistics requirements,
                                our experienced team is ready to assist you.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="contact-method-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div className="contact-method-content">
                                        <h4>Visit Us</h4>
                                        <p>Cairo, Egypt</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-method-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div className="contact-method-content">
                                        <h4>Email Us</h4>
                                        <p><a href="mailto:info@itlogistic.net">info@itlogistic.net</a></p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-method-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                        </svg>
                                    </div>
                                    <div className="contact-method-content">
                                        <h4>Call Us</h4>
                                        <p><a href="tel:+201234567890">+20 123 456 7890</a></p>
                                        <p className="contact-note">Sunday - Thursday: 9AM - 5PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <div className="contact-form-card">
                                <h3>Send Us a Message</h3>
                                <p className="form-intro">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                                {status.message && (
                                    <div className={`form-status ${status.type}`}>
                                        {status.message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+20 123 456 7890"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company">Company Name</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service">Service Interest</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="ocean-freight">Ocean Freight</option>
                                            <option value="air-freight">Air Freight</option>
                                            <option value="inland-transport">Inland Transport</option>
                                            <option value="customs-clearance">Customs Clearance</option>
                                            <option value="exhibition-logistics">Exhibition Logistics</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us about your logistics needs..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block btn-lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Quote CTA */}
            <section className="quick-quote">
                <div className="container">
                    <div className="quick-quote-content">
                        <div className="quick-quote-text">
                            <h2>Need a Quick Quote?</h2>
                            <p>Get a competitive rate for your shipment in minutes.</p>
                        </div>
                        <div className="quick-quote-actions">
                            <a href="mailto:info@itlogistic.net" className="btn btn-light btn-lg">
                                Email for Quote
                            </a>
                            <a href="tel:+201234567890" className="btn btn-outline-light btn-lg">
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
