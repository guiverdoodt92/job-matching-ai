import React from 'react';
import { Upload, Search, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Upload,
      title: t('how.step1.title'),
      description: t('how.step1.description'),
      color: 'blue'
    },
    {
      icon: Search,
      title: t('how.step2.title'),
      description: t('how.step2.description'),
      color: 'emerald'
    },
    {
      icon: CheckCircle,
      title: t('how.step3.title'),
      description: t('how.step3.description'),
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      icon: 'text-blue-600',
      line: 'border-blue-200'
    },
    emerald: {
      bg: 'bg-emerald-100',
      icon: 'text-emerald-600',
      line: 'border-emerald-200'
    },
    purple: {
      bg: 'bg-purple-100',
      icon: 'text-purple-600',
      line: 'border-purple-200'
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('how.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('how.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gray-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colorClasses[step.color].bg} mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`h-8 w-8 ${colorClasses[step.color].icon}`} />
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105">
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;