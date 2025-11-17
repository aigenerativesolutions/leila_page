import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-text-dark text-background py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-playfair text-2xl mb-4">Leila Pellegrini</h3>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/leilapedroso_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/leila-pedroso-31abb576/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <p className="font-manrope text-sm text-background/80">
          &copy; 2025 Leila Pellegrini. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
