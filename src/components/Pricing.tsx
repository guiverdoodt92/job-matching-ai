import React from 'react';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PaymentModal from './PaymentModal';
import CreditPurchase from './CreditPurchase';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState<any>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false);
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter.title'),
      price: isAnnual ? (t('nav.login').includes('Entrar') ? 'R$ 46' : '$7') : (t('nav.login').includes('Entrar') ? 'R$ 55' : '$10'),
      period: isAnnual ? '/ano' : t('pricing.starter.period'),
      priceId: isAnnual ? 'price_starter_annual' : 'price_starter_monthly',
      credits: t('pricing.starter.credits'),
      features: [
        t('pricing.starter.feature1'),
        t('pricing.starter.feature2'),
        t('pricing.starter.feature3'),
        t('pricing.starter.feature4')
      ],
      popular: false,
      gradient: 'from-gray-50 to-gray-100',
      button: 'bg-gray-900 hover:bg-gray-800 text-white'
    },
    {
      name: t('pricing.pro.title'),
      price: isAnnual ? (t('nav.login').includes('Entrar') ? 'R$ 460' : '$84') : (t('nav.login').includes('Entrar') ? 'R$ 660' : '$120'),
      period: isAnnual ? '/ano' : '/ano',
      priceId: isAnnual ? 'price_pro_annual' : 'price_pro_monthly',
      credits: t('pricing.pro.credits'),
      features: [
        t('pricing.pro.feature1'),
        t('pricing.pro.feature2'),
        t('pricing.pro.feature3'),
        t('pricing.pro.feature4'),
        t('pricing.pro.feature5')
      ],
      popular: true,
      gradient: 'from-blue-50 to-indigo-50',
      button: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
    }
  ];

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('pricing.monthly')}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isAnnual 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('pricing.annual')}
            </button>
          </div>
          {isAnnual && (
            <p className="text-sm text-green-600 font-medium mt-2">
              {t('pricing.pro.save')}
            </p>
          )}
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${plan.gradient} rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-blue-200 ring-2 ring-blue-100' 
                  : 'border-gray-200'
              } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{t('pricing.popular')}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 font-medium">{plan.credits}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${plan.button}`}
                onClick={() => handlePlanSelect(plan)}
              >
                {t('pricing.cta')}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Credits */}
        <div className="mt-16">
          <CreditPurchase />
        </div>
      </div>
    </section>

    <PaymentModal
      isOpen={isPaymentModalOpen}
      onClose={() => setIsPaymentModalOpen(false)}
      plan={selectedPlan}
    />
    </>
  );
};

export default Pricing;
