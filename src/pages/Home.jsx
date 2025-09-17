import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  BarChart3,
  Award,
  Clock,
  DollarSign,
  Activity,
  Zap,
  Globe,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>
        
        {/* Light Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-200/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-200/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent-300/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container relative z-10">
          <div className="grid grid-2 gap-20 items-center">
            <div className="animate-fadeInLeft">
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-5 py-3 mb-8 border border-primary-200">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-primary">Live Market Updates</span>
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              
              <h1 className="text-dark mb-8 font-display">
                Master the Markets with{' '}
                <span className="text-accent">Wealthify Trading</span>
              </h1>
              
              <p className="text-xl mb-10 text-secondary leading-relaxed font-medium">
                Join thousands of successful traders who trust our proven strategies, 
                real-time insights, and expert guidance to maximize their trading potential 
                and build lasting wealth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-10">
                <Link to="/join-us" className="btn btn-accent btn-lg group">
                  Start Trading Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="btn btn-secondary btn-lg">
                  Learn More About Us
                </Link>
              </div>
              
              <div className="flex items-center gap-10 text-sm text-muted">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="font-medium">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="font-medium">Risk-Free Trial</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fadeInRight">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-primary-200 shadow-lg">
                <div className="grid grid-2 gap-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/90 transition-all duration-300 group shadow-sm">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-dark mb-2">95%</div>
                    <div className="text-sm text-muted font-medium">Success Rate</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/90 transition-all duration-300 group shadow-sm">
                    <Users className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-dark mb-2">10K+</div>
                    <div className="text-sm text-muted font-medium">Active Traders</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/90 transition-all duration-300 group shadow-sm">
                    <Target className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-dark mb-2">$2M+</div>
                    <div className="text-sm text-muted font-medium">Profits Generated</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/90 transition-all duration-300 group shadow-sm">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-dark mb-2">24/7</div>
                    <div className="text-sm text-muted font-medium">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-primary text-white rounded-full px-5 py-3 mb-8">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="mb-8 font-display text-dark">Professional Trading Solutions</h2>
            <p className="text-xl text-secondary max-w-4xl mx-auto font-medium">
              We provide everything you need to succeed in the stock market with 
              professional-grade tools, expert guidance, and a supportive community.
            </p>
          </div>
          
          <div className="grid grid-3 gap-12">
            <div className="card text-center group hover-lift">
              <h3 className="mb-6 font-display text-dark">Advanced Analytics</h3>
              <p className="text-secondary font-medium">
                Get real-time market data, technical analysis, and AI-powered insights 
                to make informed trading decisions with confidence.
              </p>
            </div>

            <div className="card text-center group hover-lift">

              <h3 className="mb-6 font-display text-dark">Risk Management</h3>
              <p className="text-secondary font-medium">
                Protect your investments with our proven risk management strategies 
                and advanced stop-loss mechanisms.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <h3 className="mb-6 font-display text-dark">Expert Community</h3>
              <p className="text-secondary font-medium">
                Join a community of successful traders and learn from experienced 
                professionals in our exclusive groups.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <h3 className="mb-6 font-display text-dark">Portfolio Tracking</h3>
              <p className="text-secondary font-medium">
                Monitor your investments with comprehensive portfolio tracking 
                and detailed performance analytics.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <h3 className="mb-6 font-display text-dark">Custom Strategies</h3>
              <p className="text-secondary font-medium">
                Personalized trading strategies tailored to your risk tolerance 
                and specific investment goals.
              </p>
            </div>

            <div className="card text-center group hover-lift">
              <h3 className="mb-6 font-display text-dark">Real-Time Alerts</h3>
              <p className="text-secondary font-medium">
                Get instant notifications for market opportunities and important 
                trading signals via multiple channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gradient-light text-dark relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-dark mb-8 font-display">Our Track Record</h2>
            <p className="text-xl text-secondary font-medium">
              Numbers that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-4 gap-12">
            <div className="text-center group">
              <div className="text-6xl font-bold text-accent mb-4 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-xl font-semibold mb-3 text-dark">Success Rate</div>
              <div className="text-secondary font-medium">Consistent profitable trades</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold text-accent mb-4 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-xl font-semibold mb-3 text-dark">Active Members</div>
              <div className="text-secondary font-medium">Growing community</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold text-accent mb-4 group-hover:scale-110 transition-transform duration-300">$2M+</div>
              <div className="text-xl font-semibold mb-3 text-dark">Profits Generated</div>
              <div className="text-secondary font-medium">For our members</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-bold text-accent mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-xl font-semibold mb-3 text-dark">Support</div>
              <div className="text-secondary font-medium">Always available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="mb-8 font-display text-dark">What Our Traders Say</h2>
            <p className="text-xl text-secondary font-medium">
              Real feedback from our community members
            </p>
          </div>

          <div className="grid grid-3 gap-12">
            <div className="card group hover-lift">
              <div className="flex items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>
              <p className="text-secondary mb-8 italic font-medium">
                "Wealthify Trading has completely transformed my approach to investing. 
                The strategies are clear, the community is supportive, and the results speak for themselves."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JS</span>
                </div>
                <div>
                  <div className="font-semibold text-dark">John Smith</div>
                  <div className="text-sm text-muted">Professional Trader</div>
                </div>
              </div>
            </div>

            <div className="card group hover-lift">
              <div className="flex items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>
              <p className="text-secondary mb-8 italic font-medium">
                "The risk management tools and real-time alerts have saved me thousands. 
                I can't imagine trading without Wealthify's support."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-dark">Maria Johnson</div>
                  <div className="text-sm text-muted">Day Trader</div>
                </div>
              </div>
            </div>

            <div className="card group hover-lift">
              <div className="flex items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-current" />
                ))}
              </div>
              <p className="text-secondary mb-8 italic font-medium">
                "From beginner to profitable trader in just 6 months. 
                The educational resources and community support are exceptional."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DR</span>
                </div>
                <div>
                  <div className="font-semibold text-dark">David Rodriguez</div>
                  <div className="text-sm text-muted">Retail Investor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;