
export default function TrustBadges() {
  const stats = [
    {
      value: '10M+',
      label: 'Events Tracked Daily',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      value: '50K+',
      label: 'Active Users',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      value: '99.9%',
      label: 'Uptime SLA',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      value: '24/7',
      label: 'Support Available',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const companies = [
    {
      name: 'TechCorp',
      logo: (
        <svg className="h-8" viewBox="0 0 120 40" fill="currentColor">
          <rect x="10" y="10" width="20" height="20" rx="4" />
          <rect x="35" y="10" width="20" height="20" rx="4" opacity="0.7" />
          <rect x="60" y="10" width="20" height="20" rx="4" opacity="0.5" />
          <text x="85" y="25" fontSize="18" fontWeight="bold">TechCorp</text>
        </svg>
      )
    },
    {
      name: 'DataFlow',
      logo: (
        <svg className="h-8" viewBox="0 0 120 40" fill="currentColor">
          <circle cx="20" cy="20" r="8" />
          <circle cx="40" cy="20" r="6" opacity="0.8" />
          <circle cx="58" cy="20" r="4" opacity="0.6" />
          <text x="70" y="25" fontSize="18" fontWeight="bold">DataFlow</text>
        </svg>
      )
    },
    {
      name: 'CloudBase',
      logo: (
        <svg className="h-8" viewBox="0 0 120 40" fill="currentColor">
          <path d="M15 25c-3.5 0-6-2.5-6-6s2.5-6 6-6c.5-3 3-5 6-5 3.5 0 6.5 2.5 7 6 2.5 0 4.5 2 4.5 4.5S30.5 23 28 23z" />
          <text x="45" y="25" fontSize="18" fontWeight="bold">CloudBase</text>
        </svg>
      )
    },
    {
      name: 'AnalyticsPro',
      logo: (
        <svg className="h-8" viewBox="0 0 140 40" fill="currentColor">
          <path d="M10 30 L20 15 L30 20 L40 10" stroke="currentColor" fill="none" strokeWidth="2" />
          <text x="50" y="25" fontSize="18" fontWeight="bold">AnalyticsPro</text>
        </svg>
      )
    },
    {
      name: 'MetricsMaster',
      logo: (
        <svg className="h-8" viewBox="0 0 150 40" fill="currentColor">
          <rect x="10" y="20" width="4" height="10" />
          <rect x="18" y="15" width="4" height="15" />
          <rect x="26" y="12" width="4" height="18" />
          <rect x="34" y="18" width="4" height="12" />
          <text x="45" y="25" fontSize="18" fontWeight="bold">MetricsMaster</text>
        </svg>
      )
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: '🔒' },
    { name: 'GDPR Compliant', icon: '🇪🇺' },
    { name: 'ISO 27001', icon: '✓' },
    { name: 'HIPAA Ready', icon: '🏥' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by Teams Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Companies Section */}
        <div className="mb-16">
          <p className="text-center text-slate-600 mb-8">
            Join thousands of companies using our platform
          </p>
          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-wrap items-center justify-center gap-12 text-slate-400">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="hover:text-slate-700 transition-colors duration-200 cursor-pointer"
                  aria-label={company.name}
                >
                  {company.logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Enterprise-Grade Security & Compliance</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card rounded-lg px-6 py-3 inline-flex items-center gap-3 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <span className="text-2xl">{cert.icon}</span>
                <span className="font-medium text-slate-700">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg font-semibold text-lg transition-colors duration-200 cursor-pointer">
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              Join 50,000+ users already using our platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

