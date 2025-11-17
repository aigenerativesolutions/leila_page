'use client'

export default function Header() {
  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Consultoria', href: '#consultoria' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#inicio" className="font-playfair text-2xl font-bold text-text-dark hover:text-accent transition-colors">
          Leila Pellegrini
        </a>

        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-manrope text-text-dark hover:text-accent transition-colors"
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
