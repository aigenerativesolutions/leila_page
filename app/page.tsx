'use client'

import Image from 'next/image'
import { Target, CheckSquare, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/IMG-20251116-WA0034.jpg"
              alt="Leila Pellegrini"
              fill
              className="object-cover object-[center_20%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
          </div>

          <motion.div
            className="relative z-10 text-center px-4 text-background max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="font-playfair text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Estruture seu Negócio.<br />Eleve sua Experiência.
            </motion.h1>
            <motion.p
              className="font-manrope text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ajudo empreendedoras a alinhar posicionamento e experiência do cliente para faturar mais, com autenticidade e ordem.
            </motion.p>
            <motion.a
              href="https://form.respondi.app/o6txpLuK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-text-dark font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Preencher Aplicação
            </motion.a>
          </motion.div>
        </section>

        {/* Para Quem Section */}
        <section id="para-quem" className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal direction="up">
              <h2 className="font-playfair text-4xl md:text-5xl text-center mb-16 text-text-dark">
                Esta consultoria é para si?
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Dores */}
              <ScrollReveal direction="left">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <h3 className="font-playfair text-2xl mb-6 text-text-dark">Você sente que...</h3>
                  <ul className="space-y-4 font-manrope text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">•</span>
                      <span>...falta um posicionamento premium?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">•</span>
                      <span>...tem &quot;obesidade mental&quot; de tanto conhecimento sem prática?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">•</span>
                      <span>...está refém do Instagram sem resultados?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">•</span>
                      <span>...seu faturamento não é satisfatório?</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Desejos */}
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-accent/10 p-8 rounded-lg shadow-lg border-2 border-accent hover:shadow-2xl hover:border-accent/80 transition-all">
                  <h3 className="font-playfair text-2xl mb-6 text-text-dark">Você deseja...</h3>
                  <ul className="space-y-4 font-manrope text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <span>...ter um negócio de alto valor e ser bem paga?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <span>...liberdade para focar na estratégia (e na vida)?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <span>...um faturamento acima de 20k/mês?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 text-xl">✓</span>
                      <span>...ser referência na sua área?</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Sobre Mim Section */}
        <section id="sobre" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Imagem */}
              <ScrollReveal direction="left">
                <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <Image
                    src="/IMG-20251116-WA0040.jpg"
                    alt="Leila Pellegrini"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>

              {/* Texto */}
              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <h2 className="font-playfair text-4xl md:text-5xl mb-4 text-text-dark">
                    Leila Pellegrini
                  </h2>
                  <h3 className="font-manrope text-xl md:text-2xl text-accent mb-6 italic">
                    &quot;Minha identidade é a melhor estratégia.&quot;
                  </h3>

                  <div className="space-y-4 font-manrope text-text-secondary leading-relaxed">
                    <p>
                      Minha trajetória profissional começou no RH, onde atuei por 7 anos desenvolvendo pessoas e liderando projetos de gestão. Em 2020, durante a pandemia, fiz uma transição para o digital e me tornei Social Media, atendendo 15 clientes e construindo uma base sólida no ambiente online.
                    </p>
                    <p>
                      Hoje, atuo como mentora em posicionamento e estruturação de negócios, unindo minha experiência em gestão de pessoas com estratégias digitais. Acredito que o autoconhecimento é a base de tudo — quando você compreende quem é verdadeiramente, consegue criar um negócio autêntico que reflete seus valores e atrai as pessoas certas.
                    </p>
                    <p className="font-semibold text-text-dark italic">
                      &quot;A ordem acelera os meus resultados.&quot;
                    </p>
                    <p className="font-semibold text-text-dark">
                      Minha missão é guiar mulheres na sua jornada de transformação, capacitando-as a assumir o comando de suas vidas e negócios através da ordem e prosperidade. Acredito que cada mulher tem o potencial de construir um império baseado em sua essência única.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Consultoria Section */}
        <section id="consultoria" className="py-20 px-4 bg-gray-100">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-4xl md:text-5xl mb-4 text-text-dark">
                  A Consultoria de Negócios
                </h2>
                <p className="font-manrope text-xl text-text-secondary max-w-3xl mx-auto">
                  Baseada em três pilares arquetípicos: transformação (Mago), liderança (Governante) e descoberta (Exploradora). Uma jornada completa para estruturar e elevar seu negócio.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <ScrollReveal direction="up" delay={0}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-playfair text-2xl mb-4 text-text-dark">
                    Posicionamento Autêntico
                  </h3>
                  <p className="font-manrope text-text-secondary leading-relaxed">
                    Alinhe sua essência e comunicação para atrair o público premium que você deseja.
                  </p>
                </div>
              </ScrollReveal>

              {/* Card 2 */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <CheckSquare className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-playfair text-2xl mb-4 text-text-dark">
                    Estruturação e Ordem
                  </h3>
                  <p className="font-manrope text-text-secondary leading-relaxed">
                    Crie um ecossistema de negócios que funcione com ordem, acelerando seus resultados.
                  </p>
                </div>
              </ScrollReveal>

              {/* Card 3 */}
              <ScrollReveal direction="up" delay={0.4}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-playfair text-2xl mb-4 text-text-dark">
                    Experiência do Cliente (CX)
                  </h3>
                  <p className="font-manrope text-text-secondary leading-relaxed">
                    Desenvolva uma experiência inesquecível que transforma clientes em fãs e aumenta seu faturamento.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ORDEM Program Section */}
        <section id="ordem" className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-4xl md:text-6xl mb-6 text-text-dark font-bold">
                  SEJA UMA ORDENADA!
                </h2>
                <p className="font-manrope text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-4 leading-relaxed">
                  Tenha meu acompanhamento por <span className="font-bold text-accent">12 meses</span> para <span className="font-bold">POSICIONAR e ESTRUTURAR</span> sua marca no mundo sem perder a sua essência!
                </p>
                <p className="font-manrope text-lg md:text-xl text-text-dark max-w-4xl mx-auto leading-relaxed">
                  Eu, Leila Pedroso, vou trabalhar pessoalmente na construção do seu posicionamento, aumentando a sua percepção de valor e fazer do seu nome reconhecido e bem pago!
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Card 1 - 12 Consultas */}
              <ScrollReveal direction="left" delay={0}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all border-t-4 border-accent">
                  <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-text-dark font-bold">
                    12 Consultorias Individuais
                  </h3>
                  <p className="font-manrope text-text-secondary leading-relaxed">
                    Muito além de um plano de implementação, a metodologia ORDEM é uma escolha e estilo para viver. Encontros personalizados para construir seu posicionamento único.
                  </p>
                </div>
              </ScrollReveal>

              {/* Card 2 - Sessões Grupais */}
              <ScrollReveal direction="right" delay={0.1}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all border-t-4 border-accent">
                  <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-text-dark font-bold">
                    Sessões Mensais em Grupo
                  </h3>
                  <p className="font-manrope text-text-secondary leading-relaxed">
                    Encontros em formato hotseat, em grupo que acontecem online (via Zoom) para tirar dúvidas, resolver problemas e aprender com outras empreendedoras.
                  </p>
                </div>
              </ScrollReveal>

              {/* Card 3 - Suporte WhatsApp */}
              <ScrollReveal direction="left" delay={0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all border-t-4 border-accent">
                  <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-text-dark font-bold">
                    Suporte Diário WhatsApp
                  </h3>
                  <p className="font-manrope text-text-secondary leading-relaxed">
                    Acesso exclusivo ao grupo com contato direto com o time para suporte contínuo, dúvidas rápidas e acompanhamento constante da sua evolução.
                  </p>
                </div>
              </ScrollReveal>

              {/* Card 4 - Breakthrough Session */}
              <ScrollReveal direction="right" delay={0.3}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all border-t-4 border-accent">
                  <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-text-dark font-bold">
                    Sessão de Breakthrough de Mindset
                  </h3>
                  <p className="font-manrope text-text-secondary leading-relaxed">
                    Um encontro exclusivo para você fortalecer sua mentalidade, identificando o que está te paralisando e desbloqueando seu potencial máximo.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* CTA e Disclaimer */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="text-center">
                <motion.a
                  href="https://form.respondi.app/o6txpLuK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-text-dark font-manrope font-bold text-lg px-12 py-5 rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl mb-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  QUERO PREENCHER A APLICAÇÃO
                </motion.a>
                <p className="font-manrope text-sm text-text-secondary max-w-3xl mx-auto italic">
                  <span className="font-semibold">Importante:</span> a aplicação não garante sua vaga, ela será analisada e, caso você seja aprovada, meu time entrará em contato via WhatsApp.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Final Section */}
        <section id="contato" className="py-20 px-4 bg-text-secondary">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <ScrollReveal direction="left">
                <div className="text-background">
                  <h2 className="font-playfair text-4xl md:text-5xl mb-6">
                    Vamos transformar seu negócio?
                  </h2>
                  <p className="font-manrope text-lg md:text-xl mb-8 leading-relaxed">
                    Chegou a hora de aplicar seu conhecimento, criar ordem e ter a liberdade que você merece. O controle é transformado em liberdade.
                  </p>
                  <motion.a
                    href="https://wa.me/5554999810605"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent text-text-dark font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Quero Agendar minha Consultoria
                  </motion.a>
                </div>
              </ScrollReveal>

              {/* Imagem */}
              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <Image
                    src="/IMG-20251116-WA0038.jpg"
                    alt="Leila Pellegrini - Consultoria"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
