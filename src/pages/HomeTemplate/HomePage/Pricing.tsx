
export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started with analytics',
      features: [
        'Up to 10,000 events/month',
        '3 custom dashboards',
        'Real-time data streaming',
        'Email support',
        'Basic integrations',
        '7-day data retention'
      ],
      cta: 'Start Free Trial',
      popular: false,
      colorScheme: 'blue'
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'For growing teams that need advanced features',
      features: [
        'Up to 100,000 events/month',
        'Unlimited dashboards',
        'Real-time + historical data',
        'Priority support',
        'Advanced integrations',
        '90-day data retention',
        'Custom alerts',
        'Team collaboration',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true,
      colorScheme: 'orange'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited events',
        'Unlimited dashboards',
        'Advanced analytics & AI',
        'Dedicated support',
        'Custom integrations',
        'Unlimited data retention',
        'SLA guarantee',
        'White-label options',
        'On-premise deployment',
        'Custom training'
      ],
      cta: 'Contact Sales',
      popular: false,
      colorScheme: 'slate'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <span className="text-sm font-medium text-slate-700">Monthly</span>
            <button className="relative w-12 h-6 bg-blue-600 rounded-full transition-colors cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
            </button>
            <span className="text-sm font-medium text-slate-700">
              Annual <span className="text-green-600 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                plan.popular
                  ? 'glass-card border-2 border-orange-500 shadow-2xl scale-105 lg:scale-110'
                  : 'glass-card hover:shadow-2xl hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-slate-600 ml-2">{plan.period}</span>}
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 mb-8 ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-orange-500' : 'text-blue-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            All plans include SSL security, 99.9% uptime SLA, and GDPR compliance
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2 cursor-pointer group">
            Compare all features
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
