import React from 'react';
import { ArrowRight, Play, FileText, Target, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-indigo-100 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">{t('hero.title')}</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  {t('hero.title.ai')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 flex items-center justify-center">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center hover:shadow-md">
                <Play className="mr-2 h-5 w-5" />
                {t('hero.cta.secondary')}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <div className="grid grid-cols-3 gap-8 text-center sm:text-left">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{t('hero.stats.users')}</div>
                  <div className="text-sm text-gray-600 mt-1">{t('hero.stats.users.label')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{t('hero.stats.match')}</div>
                  <div className="text-sm text-gray-600 mt-1">{t('hero.stats.match.label')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{t('hero.stats.companies')}</div>
                  <div className="text-sm text-gray-600 mt-1">{t('hero.stats.companies.label')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* CV Preview Mock */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="h-3 w-32 bg-gray-300 rounded"></div>
                    <div className="h-2 w-24 bg-gray-200 rounded mt-2"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                  <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                </div>

                {/* Match Percentage */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-700">Job Match Score</span>
                    <Target className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="mt-2">
                    <div className="text-2xl font-bold text-green-800">94%</div>
                    <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-[94%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
              <FileText className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white p-3 rounded-xl shadow-lg">
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;