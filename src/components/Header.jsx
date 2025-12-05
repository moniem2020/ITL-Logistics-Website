'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About Us' },
        { href: '/industries', label: 'Industries' },
        { href: '/events', label: 'Events' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav container">
                <Link href="/" className="nav-logo">
                    <img src="/logo.png" alt="ITL Logistics Egypt" className="logo-img" />
                </Link>

                <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href} className="nav-item">
                            <Link
                                href={link.href}
                                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
                    <button
                        className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger"></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}
