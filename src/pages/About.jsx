import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Award,
  CheckCircle,
  Shield,
  Clock,
  Heart,
  Zap,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white pt-20 pb-16 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Award className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-medium text-emerald-100">About Wealthify Trading</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                Building Financial
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              We're dedicated to democratizing access to professional-grade trading strategies
              and market insights, helping traders of all levels achieve their financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building the Future of Trading
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fadeInUp">
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Founded in 2020 by a team of experienced traders and financial analysts,
                    Wealthify Trading was born from a simple yet powerful vision: to democratize
                    access to professional-grade trading strategies and market insights.
                  </p>
                  <p className="text-lg leading-relaxed">
                    What started as a small group of traders sharing strategies has evolved into
                    a comprehensive platform serving over 10,000 active traders worldwide.
                    Our mission is to help both beginners and experienced traders achieve their
                    financial goals through education, technology, and community support.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, we're proud to be at the forefront of trading innovation, combining
                    traditional market analysis with cutting-edge technology to deliver
                    consistent results for our community.
                  </p>
                </div>

                <div className="pt-6">
                  <Link to="/join-us" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Join Our Journey
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl border border-blue-100 animate-fadeInUp">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">4+</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">10K+</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Active Members</div>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Success Rate</div>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">$2M+</div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Profits Generated</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-green-50 text-green-600 rounded-full px-6 py-3 mb-8">
                <Target className="w-5 h-5" />
                <span className="text-sm font-medium">Our Purpose</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mission & Vision
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do at Wealthify Trading
              </p>
            </div>

            {/* Cards Container */}
            <div className="space-y-16">
              {/* Mission Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-4xl mx-auto">
                <div className="text-center mb-8 mt-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                  To empower traders of all levels with the knowledge, tools, and community
                  support needed to achieve consistent profitability in the stock market.
                  We believe that financial success should be accessible to everyone,
                  regardless of their background or experience level.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                  To become the world's leading trading education platform, where millions
                  of traders learn, grow, and succeed together. We envision a future where
                  every trader has access to professional-grade strategies and the support
                  needed to build lasting wealth through intelligent investing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to your trading success
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-bold">AS</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Alex Smith</h3>
                <div className="text-blue-600 font-semibold mb-3 text-sm">Chief Trading Strategist</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  15+ years in equity markets, former hedge fund manager,
                  CFA charterholder with expertise in technical analysis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 text-xl font-bold">MJ</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Maria Johnson</h3>
                <div className="text-green-600 font-semibold mb-3 text-sm">Head of Risk Management</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Former investment banker with 12+ years experience in portfolio
                  risk assessment and derivatives trading.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-purple-600 text-xl font-bold">DR</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">David Rodriguez</h3>
                <div className="text-purple-600 font-semibold mb-3 text-sm">Lead Market Analyst</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Quantitative analyst with PhD in Finance, specializing in
                  algorithmic trading and market microstructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 bg-white mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover what makes Wealthify Trading the preferred choice for traders worldwide
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our strategies have consistently delivered positive returns with a 95% success rate
                      over the past 4 years.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Get help whenever you need it with our dedicated support team and
                      active community members.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Educational Resources</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive learning materials from beginner to advanced trading strategies
                      with regular updates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Risk Management</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced risk management tools to protect your capital and maximize
                      your profit potential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Join Us?</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Become part of our growing community of successful traders and start
                  your journey to financial independence today.
                </p>
                <div className="space-y-4">
                  <Link to="/join-us" className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Join Our Community
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/contact" className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300">
                    Contact Us
                    <MessageCircle className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;