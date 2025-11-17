# Leila Pellegrini - Landing Page

Landing page para consultoria de negócios focada em estruturação de negócios e experiência do cliente.

## Tecnologias

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (ícones)

## Cores do Branding

- Background: `#F5F4F2`
- Accent: `#9D805D`
- Text Dark: `#292323`
- Text Secondary: `#524335`
- Gray Medium: `#605B5B`

## Fontes

- **Playfair Display**: Títulos e headings
- **Manrope**: Corpo de texto

## Como Executar

1. Instalar dependências:
```bash
npm install
```

2. Executar em modo desenvolvimento:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) no navegador

## Build para Produção

```bash
npm run build
npm start
```

## Deploy na Vercel

O projeto está pronto para deploy na Vercel. Basta conectar o repositório Git e a Vercel irá fazer o deploy automaticamente.

## Estrutura do Projeto

```
├── app/
│   ├── layout.tsx      # Layout principal com fontes
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globais
├── components/
│   ├── Header.tsx      # Navegação
│   └── Footer.tsx      # Rodapé
├── public/             # Imagens
└── tailwind.config.ts  # Configuração Tailwind
```

## Seções da Página

1. **Hero**: Imagem de fundo com título principal
2. **Para Quem**: Dores e desejos do público-alvo
3. **Sobre Mim**: Biografia e missão
4. **Consultoria**: Três pilares da consultoria
5. **CTA Final**: Chamada para ação
6. **Footer**: Redes sociais e copyright
