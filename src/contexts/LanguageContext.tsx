import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.login': 'Sign In',
    'nav.signup': 'Get Started',
    
    // Hero
    'hero.title': 'Optimize Your CV with',
    'hero.title.ai': 'AI Precision',
    'hero.subtitle': 'Match your resume to job opportunities with our advanced AI analysis. Get personalized feedback, matching scores, and tailored CVs that land interviews.',
    'hero.cta': 'Analyze My CV',
    'hero.cta.secondary': 'Watch Demo',
    'hero.stats.users': '10,000+',
    'hero.stats.users.label': 'CVs Optimized',
    'hero.stats.match': '94%',
    'hero.stats.match.label': 'Success Rate',
    'hero.stats.companies': '500+',
    'hero.stats.companies.label': 'Partner Companies',
    
    // Features
    'features.title': 'Powerful Features for Career Success',
    'features.subtitle': 'Everything you need to create winning job applications',
    'features.ai.title': 'AI-Powered Analysis',
    'features.ai.description': 'Advanced algorithms analyze job descriptions and match them with your CV skills and experience.',
    'features.optimization.title': 'Smart CV Optimization',
    'features.optimization.description': 'Get personalized recommendations to improve your CV based on industry standards and job requirements.',
    'features.matching.title': 'Real-time Matching Score',
    'features.matching.description': 'See exactly how well your CV matches any job posting with our detailed percentage breakdown.',
    'features.tailored.title': 'Tailored CV Generation',
    'features.tailored.description': 'Automatically generate optimized CVs specifically designed for each job application.',
    'features.advice.title': 'Career Guidance',
    'features.advice.description': 'Receive expert career advice and discover new opportunities that match your skills.',
    'features.multilingual.title': 'Multi-language Support',
    'features.multilingual.description': 'Create and optimize CVs in multiple languages for global job opportunities.',
    
    // How It Works
    'how.title': 'How It Works',
    'how.subtitle': 'Simple 3-step process to optimize your job applications',
    'how.step1.title': 'Upload & Analyze',
    'how.step1.description': 'Upload your CV and paste the job link for instant AI analysis',
    'how.step2.title': 'Get Insights',
    'how.step2.description': 'Receive detailed feedback and matching percentage with improvement suggestions',
    'how.step3.title': 'Apply with Confidence',
    'how.step3.description': 'Use your optimized CV or get career guidance for better opportunities',
    
    // Pricing
    'pricing.title': 'Choose Your Plan',
    'pricing.subtitle': 'Start optimizing your career today with flexible credit-based pricing',
    'pricing.monthly': 'Monthly',
    'pricing.annual': 'Annual',
    'pricing.starter.title': 'Starter Pack',
    'pricing.starter.price': '$10',
    'pricing.starter.period': '/month',
    'pricing.starter.credits': '10 Analysis Credits',
    'pricing.starter.feature1': 'CV Analysis & Matching',
    'pricing.starter.feature2': 'Basic Optimization Tips',
    'pricing.starter.feature3': 'PDF Export',
    'pricing.starter.feature4': 'Email Support',
    'pricing.pro.title': 'Professional',
    'pricing.pro.price': '$84',
    'pricing.pro.period': '/year',
    'pricing.pro.save': 'Save 30%',
    'pricing.pro.credits': '120+ Analysis Credits',
    'pricing.pro.feature1': 'Everything in Starter',
    'pricing.pro.feature2': 'Advanced AI Optimization',
    'pricing.pro.feature3': 'Custom CV Templates',
    'pricing.pro.feature4': 'Priority Support',
    'pricing.pro.feature5': 'LinkedIn Integration',
    'pricing.additional': 'Additional credits: $1.50 each',
    'pricing.cta': 'Get Started',
    'pricing.popular': 'Most Popular',
    'payment.processing': 'Processing...',
    'payment.complete': 'Complete Payment',
    'payment.secure': 'Your payment information is secure and encrypted',
    'payment.success': 'Payment successful! Your credits have been added to your account.',
    
    // Testimonials
    'testimonials.title': 'Trusted by Professionals Worldwide',
    'testimonials.subtitle': 'See how our platform has helped thousands land their dream jobs',
    
    // Footer
    'footer.description': 'The smart way to optimize your CV and accelerate your career growth.',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.support': 'Support',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    // Header
    'nav.features': 'Recursos',
    'nav.pricing': 'Preços',
    'nav.about': 'Sobre',
    'nav.login': 'Entrar',
    'nav.signup': 'Começar',
    
    // Hero
    'hero.title': 'Otimize seu CV com',
    'hero.title.ai': 'Precisão de IA',
    'hero.subtitle': 'Combine seu currículo com oportunidades de emprego usando nossa análise avançada de IA. Receba feedback personalizado, pontuações de compatibilidade e CVs personalizados que garantem entrevistas.',
    'hero.cta': 'Analisar Meu CV',
    'hero.cta.secondary': 'Ver Demo',
    'hero.stats.users': '10.000+',
    'hero.stats.users.label': 'CVs Otimizados',
    'hero.stats.match': '94%',
    'hero.stats.match.label': 'Taxa de Sucesso',
    'hero.stats.companies': '500+',
    'hero.stats.companies.label': 'Empresas Parceiras',
    
    // Features
    'features.title': 'Recursos Poderosos para o Sucesso Profissional',
    'features.subtitle': 'Tudo que você precisa para criar candidaturas vencedoras',
    'features.ai.title': 'Análise com IA',
    'features.ai.description': 'Algoritmos avançados analisam descrições de vagas e combinam com suas habilidades e experiência.',
    'features.optimization.title': 'Otimização Inteligente',
    'features.optimization.description': 'Receba recomendações personalizadas para melhorar seu CV baseadas em padrões da indústria.',
    'features.matching.title': 'Pontuação em Tempo Real',
    'features.matching.description': 'Veja exatamente quão bem seu CV combina com qualquer vaga com nossa análise detalhada.',
    'features.tailored.title': 'CV Personalizado',
    'features.tailored.description': 'Gere automaticamente CVs otimizados especificamente para cada candidatura.',
    'features.advice.title': 'Orientação de Carreira',
    'features.advice.description': 'Receba conselhos especializados e descubra novas oportunidades que combinam com suas habilidades.',
    'features.multilingual.title': 'Suporte Multilíngue',
    'features.multilingual.description': 'Crie e otimize CVs em vários idiomas para oportunidades globais.',
    
    // How It Works
    'how.title': 'Como Funciona',
    'how.subtitle': 'Processo simples de 3 etapas para otimizar suas candidaturas',
    'how.step1.title': 'Envie e Analise',
    'how.step1.description': 'Envie seu CV e cole o link da vaga para análise instantânea com IA',
    'how.step2.title': 'Receba Insights',
    'how.step2.description': 'Receba feedback detalhado e porcentagem de compatibilidade com sugestões de melhoria',
    'how.step3.title': 'Candidate-se com Confiança',
    'how.step3.description': 'Use seu CV otimizado ou receba orientação de carreira para melhores oportunidades',
    
    // Pricing
    'pricing.title': 'Escolha Seu Plano',
    'pricing.subtitle': 'Comece a otimizar sua carreira hoje com preços flexíveis baseados em créditos',
    'pricing.monthly': 'Mensal',
    'pricing.annual': 'Anual',
    'pricing.starter.title': 'Pacote Inicial',
    'pricing.starter.price': 'R$ 55',
    'pricing.starter.period': '/mês',
    'pricing.starter.credits': '10 Créditos de Análise',
    'pricing.starter.feature1': 'Análise e Compatibilidade',
    'pricing.starter.feature2': 'Dicas Básicas de Otimização',
    'pricing.starter.feature3': 'Exportação PDF',
    'pricing.starter.feature4': 'Suporte por Email',
    'pricing.pro.title': 'Profissional',
    'pricing.pro.price': 'R$ 460',
    'pricing.pro.period': '/ano',
    'pricing.pro.save': 'Economize 30%',
    'pricing.pro.credits': '120+ Créditos de Análise',
    'pricing.pro.feature1': 'Tudo do Pacote Inicial',
    'pricing.pro.feature2': 'Otimização Avançada com IA',
    'pricing.pro.feature3': 'Templates Personalizados',
    'pricing.pro.feature4': 'Suporte Prioritário',
    'pricing.pro.feature5': 'Integração LinkedIn',
    'pricing.additional': 'Créditos adicionais: R$ 8,50 cada',
    'pricing.cta': 'Começar',
    'pricing.popular': 'Mais Popular',
    'payment.processing': 'Processando...',
    'payment.complete': 'Finalizar Pagamento',
    'payment.secure': 'Suas informações de pagamento são seguras e criptografadas',
    'payment.success': 'Pagamento realizado com sucesso! Seus créditos foram adicionados à sua conta.',
    
    // Testimonials
    'testimonials.title': 'Confiado por Profissionais do Mundo Todo',
    'testimonials.subtitle': 'Veja como nossa plataforma ajudou milhares a conseguir o emprego dos sonhos',
    
    // Footer
    'footer.description': 'A maneira inteligente de otimizar seu CV e acelerar o crescimento da sua carreira.',
    'footer.product': 'Produto',
    'footer.features': 'Recursos',
    'footer.pricing': 'Preços',
    'footer.support': 'Suporte',
    'footer.company': 'Empresa',
    'footer.about': 'Sobre Nós',
    'footer.careers': 'Carreiras',
    'footer.contact': 'Contato',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.rights': 'Todos os direitos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};