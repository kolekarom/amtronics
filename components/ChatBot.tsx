// components/ChatBot.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, MessageCircleIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm Amtron, your electronics assistant. Need help with PCB design, service, or installation? Just ask!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      let responseText = "I'll connect you to our support team soon. Could you please leave your email?";
      
      const lowerInput = inputValue.toLowerCase();
      if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
        responseText = "Hello! How can I assist you with your electronics or Amtronics services today?";
      } else if (lowerInput.includes('pcb')) {
        responseText = "We offer comprehensive PCB design and assembly services. Our team can help with everything from prototype to production. Would you like a quote?";
      } else if (lowerInput.includes('installation') || lowerInput.includes('install')) {
        responseText = "Our team provides professional installation services for all our power systems. Could you share more details about your installation requirements?";
      } else if (lowerInput.includes('pricing') || lowerInput.includes('quote') || lowerInput.includes('cost')) {
        responseText = "Pricing varies based on your specific requirements. Could you share more details about your project so I can provide an accurate quote?";
      } else if (lowerInput.includes('contact') || lowerInput.includes('support')) {
        responseText = "You can reach our support team at support@amtronics.com or call us at +1 (555) 123-4567. How can we assist you today?";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-80 h-[32rem] bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 backdrop-blur-md shadow-lg shadow-slate-900/30 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-800/80 border-b border-slate-700">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-white text-lg">Need Help? 💬</h3>
                  <p className="text-xs text-slate-300">Ask anything about electronics or our services</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-sky-600 text-white rounded-br-none'
                        : 'bg-slate-700/80 text-white rounded-bl-none backdrop-blur-sm'
                    } shadow-md`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700 bg-slate-800/50 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-700/80 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500/50 border border-slate-600/50 transition-all duration-200"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-sky-500/20 flex items-center justify-center"
                  aria-label="Send message"
                >
                  <Send size={18} className="transform -rotate-45" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-200 flex items-center justify-center"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircleIcon size={24} className="text-white" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;