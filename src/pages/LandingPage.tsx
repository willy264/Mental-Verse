import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, Check, Play, Users, Globe, DollarSign, Shield, Smartphone, BarChart3, TrendingUp, Menu, X } from 'lucide-react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-white text-xl font-bold">Crypgo</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-green-500 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-300 hover:text-green-500 transition-colors">Benefits</a>
            <a href="#services" className="text-gray-300 hover:text-green-500 transition-colors">Services</a>
            <a href="#upgrade" className="text-gray-300 hover:text-green-500 transition-colors">Upgrade</a>
            <a href="#faq" className="text-gray-300 hover:text-green-500 transition-colors">FAQs</a>
          </nav>
          
          <button className="hidden md:block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
            Book a Call
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-green-500 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-300 hover:text-green-500 transition-colors">Benefits</a>
              <a href="#services" className="text-gray-300 hover:text-green-500 transition-colors">Services</a>
              <a href="#upgrade" className="text-gray-300 hover:text-green-500 transition-colors">Upgrade</a>
              <a href="#faq" className="text-gray-300 hover:text-green-500 transition-colors">FAQs</a>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors w-fit">
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
              Future of crypto trading
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Fast & Secure
              <span className="block text-green-400">Cryptocurrency</span>
              Exchange
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              Trade cryptocurrencies with ease, security, and advanced features on our cutting-edge platform.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
              Explore More
            </button>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 max-w-sm mx-auto shadow-2xl">
                <div className="bg-black rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-white text-sm">Statistics</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Bitcoin</span>
                      <span className="text-green-400">+2.3%</span>
                    </div>
                    <div className="h-20 bg-gradient-to-r from-green-500/20 to-green-500/40 rounded-lg flex items-end p-2">
                      <div className="w-full h-full bg-gradient-to-t from-green-500 to-green-400 rounded opacity-80"></div>
                    </div>
                    <div className="bg-green-500 text-white p-3 rounded-lg">
                      <div className="text-sm opacity-80">Balance</div>
                      <div className="text-lg font-bold">$455 4562 7718 3567</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Trust Indicators Component
const TrustIndicators = () => {
  const logos = ['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'];
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-400 mb-8">Trusted by top crypto platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="text-gray-600 text-xl font-semibold hover:text-gray-400 transition-colors cursor-pointer">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Crypto Coins Component
const CryptoCoins = () => {
  const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$107.18', category: 'Highest volume', color: 'bg-orange-500' },
    { name: 'Ethereum', symbol: 'ETH', price: '$3296.01', category: 'Top gainer', color: 'bg-blue-500' },
    { name: 'Litecoin', symbol: 'LTC', price: '$117.15', category: 'New listing', color: 'bg-gray-500' },
    { name: 'Polkadot', symbol: 'DOT', price: '$3.38', category: 'Most traded', color: 'bg-pink-500' },
    { name: 'Solana', symbol: 'SOL', price: '$182.47', category: 'Biggest gainers', color: 'bg-purple-500' },
    { name: 'Chainlink', symbol: 'LINK', price: '$13.50', category: 'Trending', color: 'bg-blue-400' }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-green-400 mb-4">Featured crypto coins</p>
          <h2 className="text-4xl font-bold text-white">Top crypto coins updates</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coins.map((coin, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${coin.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold">{coin.symbol.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{coin.name}</div>
                    <div className="text-gray-400 text-sm">{coin.symbol}</div>
                  </div>
                </div>
                <div className="text-white font-bold text-lg">{coin.price}</div>
              </div>
              <div className="text-green-400 text-sm bg-green-400/20 px-2 py-1 rounded-full w-fit">
                {coin.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Component
const Portfolio = () => {
  const cryptos = [
    { name: 'Bitcoin', symbol: 'BTC', change: '+2.20%', color: 'text-green-400' },
    { name: 'Ethereum', symbol: 'ETH', change: '+150%', color: 'text-green-400' },
    { name: 'Litecoin', symbol: 'LTC', change: '+305%', color: 'text-green-400' },
    { name: 'Polkadot', symbol: 'DOT', change: '+2.80%', color: 'text-green-400' }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">Your portfolio is up 2.3%</h3>
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="h-32 bg-gradient-to-r from-green-500/20 to-green-500/40 rounded-lg mb-4 flex items-end">
                <div className="w-full h-3/4 bg-gradient-to-t from-green-500 to-green-400 rounded-b opacity-80"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {cryptos.map((crypto, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-900 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{crypto.symbol.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{crypto.name}</div>
                    <div className="text-gray-400 text-sm">{crypto.symbol}</div>
                  </div>
                </div>
                <div className={`font-semibold ${crypto.color}`}>
                  {crypto.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Component
const Features = () => {
  const features = [
    {
      title: 'Blockchain Consulting With Your Business',
      description: 'Expert guidance for integrating blockchain technology into your business operations.'
    },
    {
      title: 'Designed for crypto trading platform',
      description: 'Purpose-built interface optimized for cryptocurrency trading and management.'
    },
    {
      title: 'Kickstart your crypto website today',
      description: 'Launch your cryptocurrency platform with our comprehensive template solutions.'
    },
    {
      title: 'Launch your blockchain platform today',
      description: 'Deploy your blockchain solution with enterprise-grade security and performance.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-green-400 mb-4">Why choose Crypgo</p>
          <h2 className="text-4xl font-bold text-white">Features of the crypto framer mobile application</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  const stats = [
    { number: '6M+', label: 'Active users', icon: Users },
    { number: '24/7', label: 'User Support', icon: Shield },
    { number: '160+', label: 'Countries', icon: Globe },
    { number: '$22B+', label: 'Trade Volume', icon: DollarSign }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-800 transition-colors">
              <div className="flex justify-center mb-4">
                <stat.icon className="text-green-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Mobile App Component
const MobileApp = () => {
  const features = [
    { title: 'Planning', description: 'Map the crypto projects scope with Framer template' },
    { title: 'Refinement', description: 'Refine & improve your crypto lending page for better view' },
    { title: 'Prototype', description: 'Build crypto website fast for your product and apps' },
    { title: 'Scale and support', description: 'Deploy product live and ensure expert support' }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-green-400 mb-4">We deliver best solution</p>
          <h2 className="text-4xl font-bold text-white max-w-2xl mx-auto">
            One application with multiple options to give you freedom of buying & selling
          </h2>
        </div>
        
        <div className="relative">
          <div className="text-center mb-8">
            <div className="inline-block bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="w-64 h-96 bg-black rounded-2xl p-4 relative">
                <div className="text-white text-center">
                  <div className="mb-4">Exchange</div>
                  <div className="text-2xl font-bold text-green-400">5,500.25</div>
                  <div className="text-sm text-gray-400">ETH</div>
                  <div className="my-4">
                    <div className="text-xl font-bold">67,362.471</div>
                    <div className="text-sm text-gray-400">Total Portfolio</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg w-full">
                      Exchange now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="text-white" size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Template Section Component
const TemplateSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="bg-gray-900 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Crypgo powered by framer platform
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our landing page empowers Framer developers to have free, safe and more trustworthy experiences get our templates now and build your.
          </p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
            Get Template
          </button>
        </div>
      </div>
    </section>
  );
};

// Portfolio Creation Component
const PortfolioCreation = () => {
  const features = [
    'Manage your portfolio',
    'Vault protection',
    'Mobile apps'
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-400 mb-4">Crypto landing page template</p>
            <h2 className="text-4xl font-bold text-white mb-8">
              Create your cryptocurrency portfolio today
            </h2>
            <p className="text-gray-400 mb-8">
              Coinbase has a variety of features that make it the best place to start trading
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="text-white" size={16} />
                  </div>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-blue-600 rounded-xl p-4 text-center">
                <div className="text-white font-bold">Ethereum</div>
                <div className="text-white text-sm">ETH/USD</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
              <div className="bg-pink-600 rounded-xl p-4 text-center">
                <div className="text-white font-bold">Polkadot</div>
                <div className="text-white text-sm">DOT/USD</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-red-600 rounded-xl p-4 text-center">
                <div className="text-white font-bold">Avalanche</div>
                <div className="text-white text-sm">AVAX/USD</div>
              </div>
              <div className="bg-orange-600 rounded-xl p-4 text-center">
                <div className="text-white font-bold">Bitcoin</div>
                <div className="text-white text-sm">BTC/USD</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Business Upgrade Component
const BusinessUpgrade = () => {
  const leftFeatures = [
    '100% Secure',
    'A fraction of the cost',
    'More durable',
    'Easier to use'
  ];

  const rightFeatures = [
    'Free figma file',
    'Powerful in performance',
    'Designed for crypto',
    '100% free framer template'
  ];

  return (
    <section id="upgrade" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-green-400 mb-4">Crypgo upgrade</p>
          <h2 className="text-4xl font-bold text-white">Upgrade your crypto business</h2>
          <p className="text-gray-400 mt-4">
            Get faster, safer, more affordable cloud object storage no centralized point of failure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {rightFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-orange-400 font-bold">USD/BTC</div>
                <div className="text-white">
                  <div className="text-lg font-bold">78%</div>
                  <div className="text-sm text-gray-400">24h Volume</div>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-r from-green-500/20 to-green-500/40 rounded-lg mb-4 flex items-end justify-around">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`w-4 bg-green-400 rounded-t ${i === 3 ? 'h-full' : 'h-3/4'}`}></div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-lg">$76659.5</div>
                <div className="text-green-400 text-sm">+3.43%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Support Section Component
const Support = () => {
  const pillars = [
    {
      title: '24/7 Support',
      description: 'Need help? Get your requests solved quickly via support team.',
      icon: Shield
    },
    {
      title: 'Community',
      description: 'Join the conversations on our worldwide OKEx communities',
      icon: Users
    },
    {
      title: 'Academy',
      description: 'Learn blockchain and crypto for free with our templates.',
      icon: BarChart3
    }
  ];

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <p className="text-green-400 mb-4">Always by your side</p>
          <h2 className="text-4xl font-bold text-white">Be the first to use our Crypgo!</h2>
          <p className="text-gray-400 mt-4">
            Get faster, safer, more affordable landingpage for your crypto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <pillar.icon className="text-green-400" size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{pillar.title}</h3>
              <p className="text-gray-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Crypgo?',
      answer: 'Crypgo is a modern cryptocurrency exchange platform that provides secure, fast, and user-friendly trading services for digital assets.'
    },
    {
      question: 'Is Crypgo available worldwide?',
      answer: 'Yes, Crypgo is available in over 160 countries worldwide, making it accessible to users globally.'
    },
    {
      question: 'Which cryptocurrencies are supported on Crypgo?',
      answer: 'Crypgo supports over 100 cryptocurrencies including Bitcoin, Ethereum, Litecoin, Polkadot, Solana, and many more.'
    },
    {
      question: 'Is my personal information secure with Crypgo?',
      answer: 'Yes, we use enterprise-grade security measures including encryption, two-factor authentication, and cold storage to protect your data and funds.'
    },
    {
      question: 'Are there any deposit or withdrawal fees?',
      answer: 'We offer competitive fees with transparent pricing. Some transactions may incur minimal network fees depending on the blockchain.'
    },
    {
      question: 'Does Crypgo offer advanced trading tools?',
      answer: 'Yes, we provide professional trading tools including charts, indicators, order types, and portfolio management features.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-green-400 mb-4">Popular questions</p>
          <h2 className="text-4xl font-bold text-white">Learn more about Crypgo</h2>
          <p className="text-gray-400 mt-4">We accept 100+ cryptocurrencies around the world</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <ChevronDown 
                  className={`text-green-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-white text-xl font-bold">Crypgo</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transform your crypto business with Crypgo. Framer, a template for startups and blockchain services.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white">T</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white">I</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white">F</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <a href="#features" className="text-gray-400 hover:text-green-400 transition-colors block">Features</a>
              <a href="#benefits" className="text-gray-400 hover:text-green-400 transition-colors block">Benefits</a>
              <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors block">Services</a>
              <a href="#upgrade" className="text-gray-400 hover:text-green-400 transition-colors block">Upgrade</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Other Pages</h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors block">Error 404</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors block">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors block">Privacy Policy</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Download app</h4>
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">GP</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Google Play</div>
                  <div className="text-gray-400 text-xs">Get it on</div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">AS</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">App Store</div>
                  <div className="text-gray-400 text-xs">Download on the</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Crypgo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TrustIndicators />
      <CryptoCoins />
      <Portfolio />
      <Features />
      <Stats />
      <MobileApp />
      <TemplateSection />
      <PortfolioCreation />
      <BusinessUpgrade />
      <Support />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;