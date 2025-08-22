import React from 'react';
import { Check, Star, Clock, Users, Shield, Target, TrendingUp, BookOpen, Play, Gift, MessageCircle, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="grid grid-cols-12 gap-4 opacity-5">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: `${i * 100}ms` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="relative py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Glowing Badge */}
              <div className="inline-block relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm border border-blue-400 shadow-2xl">
                  🎯 TREINAMENTO FOOTPRINT CHART
                </div>
              </div>

              {/* Main Title with Glow Effect */}
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="relative">
                  <span className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text blur-sm">
                    Footprint Chart
                  </span>
                  <span className="relative text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                    Footprint Chart
                  </span>
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed font-light">
                Transforme suas operações com o método que realmente funciona.
              </p>

              {/* Futuristic CTA Button */}
              <div className="relative inline-block mb-16">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <a href="https://pay.herospark.com/treinamento-em-footprint-chart-442003" target="_blank" rel="noopener noreferrer" className="relative inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl border border-green-400/50 hover:shadow-green-500/50">
                  <span className="flex items-center">
                    <Zap className="w-6 h-6 mr-3 animate-pulse" />
                    QUERO ACESSO AGORA
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-center text-gray-400">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                <span>Acesso imediato após pagamento</span>
              </div>
            </div>
          </div>
        </header>

        {/* Product Image Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                  Conheça o Treinamento Completo
                </span>
              </h2>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-blue-500/30 overflow-hidden">
                  <img 
                    src="https://i.imgur.com/QQUo7bK.png" 
                    alt="Treinamento Footprint Chart - Produto Completo"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <p className="text-2xl md:text-3xl text-gray-300 mt-8 mb-8 leading-relaxed font-light">
                Domine o gráfico de footprint e aumente em 80% a sua assertividade
              </p>
              
              {/* Purchase Button */}
              <div>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                  <a href="https://pay.herospark.com/treinamento-em-footprint-chart-442003" target="_blank" rel="noopener noreferrer" className="relative inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl border border-green-400/50">
                    <span className="flex items-center">
                      <Zap className="w-6 h-6 mr-3 animate-pulse" />
                      QUERO ACESSO AGORA
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                  Você terá acesso imediato a:
                </span>
              </h2>
            </div>
            
            {/* Main Modules */}
            <div className="max-w-6xl mx-auto mb-20">
              <h3 className="text-3xl font-bold text-blue-400 mb-12 text-center">Módulos Principais</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Play className="w-8 h-8" />,
                    title: "Boas-vindas",
                    description: "Instruções para aproveitar ao máximo a estratégia."
                  },
                  {
                    icon: <BookOpen className="w-8 h-8" />,
                    title: "Conhecendo o Gráfico de Footprint",
                    description: "Entenda cada detalhe do gráfico de forma simples e objetiva."
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: "Funcionalidades do Footprint",
                    description: "Aprenda as ferramentas que aumentam sua assertividade."
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Configurando o Gráfico",
                    description: "Passo a passo para um layout limpo e funcional."
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Lógica Operacional",
                    description: "Como usar o footprint de forma prática e estratégica para operar com segurança."
                  }
                ].map((module, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105">
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white mx-auto w-fit mb-6">
                          {module.icon}
                        </div>
                        <h4 className="text-white font-bold text-xl mb-4">{module.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{module.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bonus Section */}
            <div className="max-w-6xl mx-auto mb-20">
              <h3 className="text-3xl font-bold text-blue-400 mb-12 text-center">Bônus Exclusivos</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: "Bônus 01 – Timing de Entrada",
                    description: "Descubra o momento certo de iniciar suas operações."
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Bônus 02 – Footprint na Prática",
                    description: "Exemplos reais que consolidam a leitura."
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Bônus 03 – Take Profit / Stop Loss",
                    description: "Mapeie o risco e o alvo no gráfico."
                  },
                  {
                    icon: <MessageCircle className="w-8 h-8" />,
                    title: "Bônus 04 – Grupo de Suporte no WhatsApp",
                    description: "Tire dúvidas, receba feedbacks e conecte-se com outros traders."
                  }
                ].map((bonus, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/70 transition-all duration-500 transform hover:scale-105">
                      <div className="flex items-start gap-6">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white">
                          {bonus.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-xl mb-3">{bonus.title}</h4>
                          <p className="text-gray-300 leading-relaxed">{bonus.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-transparent bg-gradient-to-r from-[#2C8AD1] to-blue-400 bg-clip-text">
                    O que nossos alunos estão dizendo
                  </span>
                </h2>
                <p className="text-xl text-gray-300">Resultados reais de quem já conseguiu resultados</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    image: "https://i.imgur.com/UKXE0PN.png",
                    name: "Aluno Satisfeito",
                    result: "Resultado Comprovado"
                  },
                  {
                    image: "https://i.imgur.com/JVpUF1s.png",
                    name: "Aluno Satisfeito",
                    result: "Resultado Comprovado"
                  },
                  {
                    image: "https://i.imgur.com/UfHYVEK.png",
                    name: "Aluno Satisfeito",
                    result: "Resultado Comprovado"
                  },
                  {
                    image: "https://i.imgur.com/FkjxYGl.png",
                    name: "Aluno Satisfeito",
                    result: "Resultado Comprovado"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2C8AD1]/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[#2C8AD1]/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={`Depoimento ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-[#2C8AD1] font-semibold">{testimonial.result}</p>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional testimonial image */}
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2C8AD1]/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[#2C8AD1]/50 transition-all duration-500 overflow-hidden">
                  
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-2xl text-white font-semibold mb-8">
                  Junte-se a centenas de traders que já transformaram seus resultados
                </p>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                  <a href="https://pay.herospark.com/treinamento-em-footprint-chart-442003" target="_blank" rel="noopener noreferrer" className="relative inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl border border-green-400/50">
                    <span className="flex items-center">
                      <Zap className="w-6 h-6 mr-3 animate-pulse" />
                      QUERO ACESSO AGORA MESMO!
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Point Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-orange-900/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-8xl mb-8 animate-pulse">🔥</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Eu sei como é difícil sair no "loss" todos os dias e sentir que nunca vai conseguir consistência.
              </h2>
              <p className="text-2xl text-blue-400 font-semibold">
                A virada acontece quando você para de adivinhar e passa a operar com método.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-6xl mb-6 animate-bounce">💰</div>
                <h2 className="text-4xl font-bold text-white mb-4">Condições Especiais</h2>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30">
                  <div className="text-center mb-12">
                    <div className="text-gray-400 line-through text-2xl mb-3">Valor original: R$ 197</div>
                    <div className="text-blue-400 text-3xl mb-3">Preço promocional: R$ 97</div>
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl inline-block mb-6 animate-pulse">
                      <span className="font-bold">HOJE APENAS</span>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text blur-sm text-7xl font-bold">
                        R$ 47
                      </div>
                      <div className="relative text-7xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text mb-4">
                        R$ 47
                      </div>
                    </div>
                    <div className="text-red-400 font-bold text-2xl">(76% OFF)</div>
                  </div>

                  {/* Módulos Inclusos */}
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-white mb-8 text-center">
                      <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                        Módulos Principais Inclusos
                      </span>
                    </h4>
                    <div className="space-y-4 mb-8">
                      {[
                        "Boas-vindas – Instruções para aproveitar ao máximo a estratégia",
                        "Conhecendo o Gráfico de Footprint – Entenda cada detalhe do gráfico",
                        "Funcionalidades do Footprint – Ferramentas que aumentam sua assertividade",
                        "Configurando o Gráfico – Passo a passo para um layout limpo e funcional",
                        "Lógica Operacional – Como usar o footprint de forma prática e estratégica"
                      ].map((module, index) => (
                        <div key={index} className="flex items-start text-white">
                          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-1 rounded-full mr-4 mt-1 flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-lg leading-relaxed">{module}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-8 text-center">
                      <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                        Bônus Exclusivos
                      </span>
                    </h4>
                    <div className="space-y-4 mb-8">
                      {[
                        "Bônus 01 – Timing de Entrada: descubra o momento certo de iniciar suas operações",
                        "Bônus 02 – Footprint na Prática: exemplos reais que consolidam a leitura",
                        "Bônus 03 – Take Profit / Stop Loss: mapeie risco e alvo direto no gráfico",
                        "Bônus 04 – Grupo de Suporte no WhatsApp: tire dúvidas e conecte-se com outros traders"
                      ].map((bonus, index) => (
                        <div key={index} className="flex items-start text-white">
                          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-1 rounded-full mr-4 mt-1 flex-shrink-0">
                            <Gift className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-lg leading-relaxed">{bonus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6 mb-12">
                    {[
                      "Acesso imediato",
                      "Suporte via grupo",
                      "Garantia de 7 dias"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center justify-center text-white">
                        <Check className="w-8 h-8 text-green-400 mr-4" />
                        <span className="text-xl">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                    <a href="https://pay.herospark.com/treinamento-em-footprint-chart-442003" target="_blank" rel="noopener noreferrer" className="relative block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white py-8 rounded-2xl font-bold text-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl border border-green-400/50">
                      <span className="flex items-center justify-center">
                        <Zap className="w-8 h-8 mr-4 animate-pulse" />
                        GARANTIR MINHA VAGA AGORA
                      </span>
                    </a>
                  </div>
                  
                  <div className="text-center mt-6 text-gray-400">
                    🔒 Pagamento 100% seguro • SSL Certificado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm p-12 rounded-3xl border border-blue-500/30">
                  <Shield className="w-20 h-20 text-blue-400 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-3xl font-bold text-white mb-6">Garantia de 7 dias</h3>
                  <p className="text-white text-xl leading-relaxed">
                    Se você não ficar satisfeito com o treinamento, devolvemos 100% do seu dinheiro. 
                    Sem perguntas, sem complicações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                  Perguntas Frequentes
                </span>
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    question: "Quanto tempo tenho acesso ao treinamento?",
                    answer: "O acesso é vitalício. Você pode assistir quantas vezes quiser, no seu próprio ritmo."
                  },
                  {
                    question: "Preciso ter experiência prévia?",
                    answer: "Não! O treinamento foi desenvolvido para quem está começando do zero até quem quer aperfeiçoar suas técnicas."
                  },
                  {
                    question: "Como funciona o suporte?",
                    answer: "Você terá acesso ao nosso grupo exclusivo no WhatsApp, onde poderá tirar dúvidas e interagir com outros traders."
                  },
                  {
                    question: "Posso cancelar se não gostar?",
                    answer: "Sim! Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
                  }
                ].map((faq, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500">
                      <h4 className="text-white font-bold text-xl mb-4">{faq.question}</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Não perca essa oportunidade única!
              </h2>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Transforme sua operação hoje mesmo com o método que realmente funciona.
              </p>
              
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text mb-3">R$ 47</div>
                  <div className="text-red-400 font-semibold text-xl">76% DE DESCONTO</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <a href="https://pay.herospark.com/treinamento-em-footprint-chart-442003" target="_blank" rel="noopener noreferrer" className="relative inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-16 py-8 rounded-2xl font-bold text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl border border-green-400/50">
                  <span className="flex items-center">
                    <Zap className="w-8 h-8 mr-4 animate-pulse" />
                    COMEÇAR AGORA
                  </span>
                </a>
              </div>
              
              <div className="mt-8 text-blue-400 text-lg">
                ⚡ Acesso liberado em menos de 2 minutos
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-400">
              <p className="text-lg">&copy; 2025 Treinamento Footprint Chart. Todos os direitos reservados.</p>
              <p className="text-sm mt-4 max-w-3xl mx-auto leading-relaxed">
                Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho passado não garante resultados similares no futuro.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
