'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircleIcon, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm Amtron, your electronics assistant. Need help with PCB design, installation, or service? Just ask!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = inputValue;
    setInputValue('');

    // Add typing indicator
    const typingIndicator: Message = {
      id: Date.now() + 1,
      text: '...',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true,
    };
    setMessages((prev) => [...prev, typingIndicator]);

    try {
      console.log('📤 Sending message to chat API...');
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error('❌ Chat API error:', {
          status: response.status,
          error: data.error || 'No error details'
        });
        throw new Error(data.error || 'Failed to get response from AI service');
      }
      
      const botResponse = data.text || "I'm not sure how to respond to that. Could you try rephrasing?";
      
      setMessages((prev) => [
        ...prev.filter((msg) => !msg.isTyping),
        {
          id: Date.now() + 2,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
      
    } catch (error) {
      console.error('❌ Chat Error:', error);
      setMessages((prev) => [
        ...prev.filter((msg) => !msg.isTyping),
        {
          id: Date.now() + 2,
          text: "⚠️ I'm having trouble connecting to the AI service. Please try again in a moment.",
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
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
                    <p className="text-sm">
                      {message.isTyping ? (
                        <span className="flex space-x-1">
                          <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </span>
                      ) : (
                        message.text
                      )}
                    </p>
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