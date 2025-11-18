'use client'

import Image from 'next/image'

export default function Header() {
  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Consultoria', href: '#consultoria' },
    { label: 'Programa ORDEM', href: '#ordem' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#inicio" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo_lei.png"
            alt="Leila Pellegrini"
            width={100}
            height={40}
            className="object-contain h-10 w-auto"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-manrope text-sm lg:text-base text-text-dark hover:text-accent transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button - pode adicionar funcionalidade depois */}
        <button className="md:hidden text-text-dark">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
