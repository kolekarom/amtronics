'use client';

import { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '+918983417716';
  const whatsappNumber = '918983417716';
  const whatsappMessage = 'Hello%20Amtronics%2C%20I%20have%20a%20question...';

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start space-y-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">Contact Us</h3>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              </div>
              
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg mb-2 hover:bg-blue-100 transition-colors"
              >
                <Phone size={16} className="mr-2" />
                <span>+91 89834 17716</span>
              </a>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
              >
                <MessageCircle size={16} className="mr-2" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        {isExpanded ? (
          <X size={24} />
        ) : (
          <div className="flex items-center">
            <Phone size={20} className="mr-1" />
            <span className="text-sm font-medium">Contact</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
