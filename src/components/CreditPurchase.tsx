import React, { useState } from 'react';
import { Plus, Minus, CreditCard } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PaymentModal from './PaymentModal';

const CreditPurchase = () => {
  const [creditCount, setCreditCount] = useState(1);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { t, language } = useLanguage();

  const creditPrice = language === 'pt' ? 8.50 : 1.50;
  const currency = language === 'pt' ? 'R$' : '$';
  const totalPrice = (creditCount * creditPrice).toFixed(2);

  const handlePurchase = () => {
    const plan = {
      name: `${creditCount} Additional Credit${creditCount > 1 ? 's' : ''}`,
      price: `${currency} ${totalPrice}`,
      credits: `${creditCount} Analysis Credit${creditCount > 1 ? 's' : ''}`,
      priceId: 'price_additional_credits'
    };
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {language === 'pt' ? 'Comprar Créditos Adicionais' : 'Buy Additional Credits'}
          </h3>
          <p className="text-gray-600">
            {language === 'pt' 
              ? 'Precisa de mais análises? Compre créditos individuais.'
              : 'Need more analyses? Purchase individual credits.'
            }
          </p>
        </div>

        <div className="space-y-6">
          {/* Credit Counter */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setCreditCount(Math.max(1, creditCount - 1))}
              className="bg-white border border-gray-300 rounded-lg p-2 hover:border-gray-400 transition-colors"
              disabled={creditCount <= 1}
            >
              <Minus className="h-4 w-4 text-gray-600" />
            </button>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{creditCount}</div>
              <div className="text-sm text-gray-600">
                {creditCount === 1 ? 'Credit' : 'Credits'}
              </div>
            </div>
            
            <button
              onClick={() => setCreditCount(creditCount + 1)}
              className="bg-white border border-gray-300 rounded-lg p-2 hover:border-gray-400 transition-colors"
            >
              <Plus className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {/* Price Display */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {creditCount} × {currency} {creditPrice.toFixed(2)}
              </span>
              <span className="text-2xl font-bold text-gray-900">
                {currency} {totalPrice}
              </span>
            </div>
          </div>

          {/* Purchase Button */}
          <button
            onClick={handlePurchase}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <CreditCard className="h-5 w-5" />
            <span>
              {language === 'pt' ? 'Comprar Créditos' : 'Purchase Credits'}
            </span>
          </button>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        plan={{
          name: `${creditCount} Additional Credit${creditCount > 1 ? 's' : ''}`,
          price: `${currency} ${totalPrice}`,
          credits: `${creditCount} Analysis Credit${creditCount > 1 ? 's' : ''}`,
          priceId: 'price_additional_credits'
        }}
      />
    </>
  );
};

export default CreditPurchase;