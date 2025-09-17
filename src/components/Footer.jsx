import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container">
        <div className="grid grid-4 gap-8 animate-fadeInUp">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-primary p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-dark font-display">Wealthify Trading</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Empowering traders with cutting-edge strategies and real-time market insights.
              Your success is our mission.
            </p>
 
          </div>

          {/* Quick Links */}

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-dark font-display">Quick Links</h4>
            <div className="space-y-3 flex flex-col gap-2">
              <Link to="/" className="block text-primary hover:text-secondary transition-colors underline">
                Home
              </Link>
              <Link to="/about" className="block text-primary hover:text-secondary transition-colors underline">
                About Us
              </Link>
              <Link to="/contact" className="block text-primary hover:text-secondary transition-colors underline">
                Contact Us
              </Link>
              <Link to="/join-us" className="block text-primary hover:text-secondary transition-colors underline">
                Join Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-dark font-display">Services</h4>
            <div className="space-y-3">
              <span className="block text-gray-600">Stock Trading</span>
              <span className="block text-gray-600">Market Analysis</span>
              <span className="block text-gray-600">Investment Strategies</span>
              <span className="block text-gray-600">Risk Management</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-dark font-display">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@wealthifytrading.com" className="text-gray-600 hover:text-primary transition-colors">
                  info@wealthifytrading.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+918460983231" className="text-gray-600 hover:text-primary transition-colors">
                  +91 8460983231
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-gray-600">
                  Rajkot, Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-4 gap-8 mt-12 animate-fadeInUp">
          <p className="text-xs text-gray-600 leading-relaxed">
           <b>Disclaimer: </b> All information provided by Wealthify Trading is for educational purposes only and does not constitute financial, investment, or trading advice. We do not provide recommendations to buy or sell any securities. Trading and investing involve risk, including the potential loss of capital. Conduct your own research and consult a licensed financial advisor before making any decisions.
          </p>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8c pt-8 animate-fadeInUp">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Wealthify Trading. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;