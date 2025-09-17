import React, { useState } from 'react';
import {
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Zap,
  Target,
  DollarSign,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Activity,
  Globe,
  Heart
} from 'lucide-react';

const JoinUs = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What trading experience do I need to join?",
      answer: "No prior trading experience is required! We welcome traders of all levels, from complete beginners to experienced professionals. Our platform provides educational resources and personalized guidance for everyone."
    },
    {
      question: "How much capital do I need to start trading?",
      answer: "You can start with as little as $100. We provide strategies and risk management techniques that work with any account size. Our focus is on percentage returns rather than absolute dollar amounts."
    },
    {
      question: "What trading strategies do you provide?",
      answer: "We offer a comprehensive range of strategies including day trading, swing trading, options strategies, and long-term investing approaches. All strategies come with detailed explanations and risk management guidelines."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with our services within the first 30 days, we'll provide a full refund, no questions asked."
    },
    {
      question: "How often do you provide trading signals?",
      answer: "We provide daily market analysis and trading opportunities. Premium members receive real-time alerts and multiple trading signals per day, while basic members get daily market updates and weekly opportunities."
    },
    {
      question: "Do you offer live trading sessions?",
      answer: "Yes! Premium members get access to live trading sessions where our experts demonstrate strategies in real-time. We also conduct weekly educational webinars and Q&A sessions."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "per month",
      description: "Perfect for beginners getting started",
      features: [
        "Daily market analysis",
        "Weekly trading opportunities",
        "Basic educational resources",
        "Email support",
        "Community access",
        "Risk management guide"
      ],
      popular: false,
      color: "primary"
    },
    {
      name: "Premium",
      price: "$99",
      period: "per month",
      description: "Most popular for serious traders",
      features: [
        "Everything in Basic",
        "Real-time trading alerts",
        "Live trading sessions",
        "Advanced strategies",
        "Priority support",
        "Portfolio tracking tools",
        "1-on-1 consultation (monthly)",
        "Exclusive webinars"
      ],
      popular: true,
      color: "accent"
    },
    {
      name: "Pro",
      price: "$199",
      period: "per month",
      description: "For professional traders",
      features: [
        "Everything in Premium",
        "Custom trading strategies",
        "Advanced analytics tools",
        "Direct expert access",
        "White-label solutions",
        "API access",
        "Unlimited consultations",
        "Priority feature requests"
      ],
      popular: false,
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24˜ relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">Join Our Trading Community</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Start Your Trading
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join thousands of successful traders who trust our proven strategies,
              real-time insights, and expert guidance to maximize their trading potential.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="btn btn-accent btn-lg group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-secondary btn-lg">
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-20 animate-fadeInUp">
            <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">Why Join Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools, education, and support
              you need to become a successful trader.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp">
            {/* Row 1 */}
            <div className="card text-center group hover-lift">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Strategies</h3>
              <p className="text-gray-600">
                Access our battle-tested trading strategies with a 95% success rate
                and detailed explanations for every trade.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Learn advanced risk management techniques to protect your capital
                and maximize your profit potential.
              </p>
            </div>

            {/* Row 2 */}
            <div className="card text-center group hover-lift">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Community</h3>
              <p className="text-gray-600">
                Join a community of successful traders and learn from experienced
                professionals in our exclusive groups.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Get access to advanced market analytics and real-time trading signals
                to make informed decisions.
              </p>
            </div>

            {/* Row 3 */}
            <div className="card text-center group hover-lift">
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Get help whenever you need it with our dedicated support team
                and active community members.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Alerts</h3>
              <p className="text-gray-600">
                Receive instant notifications for market opportunities and important
                trading signals via multiple channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your trading journey with our flexible pricing plans designed for every level of trader.
            </p>
          </div>

          {/* Pricing Cards Side by Side */}
          <div className="overflow-x-auto px-8">
            <div className="flex flex-row gap-12 max-w-8xl mx-auto justify-center items-stretch min-w-[1200px] py-12 animate-fadeInUp">
              {/* Free Plan */}
              <div className="relative w-[30%] min-w-[350px] group mx-2">
                <div className="rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-green-200 h-full bg-gradient-to-br from-green-50 to-emerald-50">
                  {/* Top Section - Green */}
                  <div className="px-8 py-16 text-center relative overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-white/10"></div>
                    <div className="absolute top-6 right-6 w-24 h-24 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/20 rounded-full"></div>

                    <div className="relative z-10">
                      <h3 className="text-4xl font-bold text-gray-800 mb-4">Free</h3>
                      <div className="text-gray-600 text-lg font-medium">Perfect for beginners</div>
                    </div>
                  </div>

                  {/* Bottom Section - Light Green */}
                  <div className="px-8 text-center bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="mb-10">
                      <span className="text-7xl font-bold text-gray-900">$0</span>
                      <span className="text-gray-600 ml-4 text-2xl font-medium">/month</span>
                    </div>

                    <ul className="text-left space-y-5 mb-12 text-gray-700 px-4">
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Basic market analysis</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Community access</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Email support</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Basic educational content</span>
                      </li>
                    </ul>

                    <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 py-5 px-10 rounded-2xl font-bold text-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Get Started Free
                    </button>
                  </div>
                </div>
              </div>

              {/* Gold Plan - Popular */}
              <div className="relative w-[30%] min-w-[350px] group mx-2">
                <div className="rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 border-4 border-purple-200 h-full transform scale-105 bg-gradient-to-br from-purple-50 to-indigo-50">
                  {/* Top Section - Purple */}
                  <div className="px-8 py-16 text-center relative overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-white/10"></div>
                    <div className="absolute top-6 right-6 w-28 h-28 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white/10 rounded-full"></div>

                    <div className="relative z-10">
                      <h3 className="text-4xl font-bold text-gray-800 mb-4">Gold</h3>
                      <div className="text-gray-600 text-lg font-medium">For serious traders</div>
                    </div>
                  </div>

                  {/* Bottom Section - Light Purple */}
                  <div className="px-8 text-center bg-gradient-to-br from-purple-50 to-indigo-50">
                    <div className="mb-10">
                      <span className="text-7xl font-bold text-gray-900">$29</span>
                      <span className="text-gray-600 ml-4 text-2xl font-medium">/month</span>
                    </div>

                    <ul className="text-left space-y-5 mb-12 text-gray-700 px-4">
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Everything in Free</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Daily trading signals</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Advanced strategies</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Priority support</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Risk management tools</span>
                      </li>
                    </ul>

                    <button className="w-full mb-10 bg-gradient-to-r from-purple-600 to-indigo-600 py-5 px-10 rounded-2xl font-bold text-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Start Gold Plan
                    </button>
                  </div>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="relative w-[30%] min-w-[350px] group mx-2">
                <div className="rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 border-2 border-red-200 h-full bg-gradient-to-br from-red-50 to-pink-50">
                  {/* Top Section - Red */}
                  <div className="px-8 py-16 text-center relative overflow-hidden bg-gradient-to-br from-red-100 to-pink-100">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-white/10"></div>
                    <div className="absolute top-6 right-6 w-24 h-24 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/20 rounded-full"></div>
                    <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/10 rounded-full"></div>

                    <div className="relative z-10">
                      <h3 className="text-4xl font-bold text-gray-800 mb-4">Premium</h3>
                      <div className="text-gray-600 text-lg font-medium">For professionals</div>
                    </div>
                  </div>

                  {/* Bottom Section - Light Red */}
                  <div className="px-8 text-center bg-gradient-to-br from-red-50 to-pink-50">
                    <div className="mb-10">
                      <span className="text-7xl font-bold text-gray-900">$49</span>
                      <span className="text-gray-600 ml-4 text-2xl font-medium">/month</span>
                    </div>

                    <ul className="text-left space-y-5 mb-12 text-gray-700 px-4">
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Everything in Gold</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Live trading sessions</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">1-on-1 consultations</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Custom strategies</span>
                      </li>
                      <li className="flex items-center gap-5">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-lg font-medium">Advanced analytics</span>
                      </li>
                    </ul>

                    <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 py-5 px-10 rounded-2xl font-bold text-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Go Premium
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-20 animate-fadeInUp">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from our community members who have achieved their trading goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
            <div className="card group hover-lift">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Wealthify Trading has completely transformed my approach to investing.
                The strategies are clear, the community is supportive, and the results speak for themselves."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-sm text-gray-500">Professional Trader</div>
                </div>
              </div>
            </div>

            <div className="card group hover-lift">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The risk management tools and real-time alerts have saved me thousands.
                I can't imagine trading without Wealthify's support."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Johnson</div>
                  <div className="text-sm text-gray-500">Day Trader</div>
                </div>
              </div>
            </div>

            <div className="card group hover-lift">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "From beginner to profitable trader in just 6 months.
                The educational resources and community support are exceptional."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">DR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">David Rodriguez</div>
                  <div className="text-sm text-gray-500">Retail Investor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Start Your Trading Journey Today
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
                to help you get started.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 animate-fadeInUp">
              {/* Contact Form */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="form-label">Trading Experience</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                        <option value="professional">Professional</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Trading Goals</label>
                    <select
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">What are your trading goals?</option>
                      <option value="income">Generate additional income</option>
                      <option value="wealth">Build long-term wealth</option>
                      <option value="learning">Learn trading strategies</option>
                      <option value="career">Pursue trading as a career</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="4"
                      placeholder="Tell us more about your trading interests and any specific questions you have..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-accent btn-lg w-full">
                    Send Application
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
