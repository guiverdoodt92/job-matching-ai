import React from 'react';
import { Brain, Target, FileText, TrendingUp, MessageSquare, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t('features.ai.title'),
      description: t('features.ai.description'),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: t('features.optimization.title'),
      description: t('features.optimization.description'),
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Target,
      title: t('features.matching.title'),
      description: t('features.matching.description'),
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: t('features.tailored.title'),
      description: t('features.tailored.description'),
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: MessageSquare,
      title: t('features.advice.title'),
      description: t('features.advice.description'),
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description'),
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;