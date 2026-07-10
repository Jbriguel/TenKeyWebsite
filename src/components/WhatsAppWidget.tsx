import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, MessageCircle } from 'lucide-react';

interface WhatsAppWidgetProps {
  lang: 'en' | 'fr';
}

export default function WhatsAppWidget({ lang }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const agentName = 'Amandine';
  const phoneNumber = '22890901010'; // Lomé number format

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMsg.trim()) return;

    // Build standard WhatsApp URL redirection
    const encodedText = encodeURIComponent(userMsg);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Open WhatsApp in new tab safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setUserMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Mini WhatsApp Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden w-[310px] sm:w-[340px] mb-4 text-left"
          >
            {/* Header */}
            <div className="bg-emerald-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Virtual avatar initials */}
                  <div className="bg-emerald-500 text-white font-extrabold text-sm w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/40 shadow-sm">
                    AM
                  </div>
                  {/* Online dot indicator */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm font-display leading-none mb-1">
                    {agentName}
                  </h4>
                  <p className="text-[10px] text-emerald-100 font-medium">
                    {lang === 'en' ? 'Replies within 5 minutes' : 'Répond en moins de 5 min'}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 hover:bg-emerald-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Window */}
            <div className="p-4 bg-[#f0f2f5] h-52 overflow-y-auto space-y-3 flex flex-col justify-end">
              {/* Message from Virtual Agent */}
              <div className="bg-white rounded-2xl p-3 text-xs text-gray-800 shadow-sm max-w-[85%] self-start relative rounded-tl-none">
                <p className="font-semibold leading-relaxed">
                  {lang === 'en'
                    ? `Hello! I am ${agentName} from TEN KEY. How can I assist you with our English & French language courses or translations today? 🇹🇬💬`
                    : `Bonjour ! Je suis ${agentName} de TEN KEY. Comment puis-je vous aider aujourd'hui pour vos cours de langues ou demandes de traductions ? 🇹🇬💬`}
                </p>
                <span className="text-[8px] text-gray-400 block text-right mt-1 font-bold">
                  Online
                </span>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder={lang === 'en' ? 'Type your message...' : 'Écrivez votre question...'}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold"
              />
              <button
                type="submit"
                disabled={!userMsg.trim()}
                className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-150 disabled:text-gray-400 text-white p-2 rounded-xl transition-colors shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Sticky WhatsApp Bubble Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm pl-4 pr-5 py-3 rounded-full shadow-2xl flex items-center gap-2 cursor-pointer border border-emerald-400/20"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5.5 h-5.5 fill-white text-emerald-500" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
        </div>
        <span className="font-display">
          {lang === 'en' ? 'Chat on WhatsApp' : 'Discuter sur WhatsApp'}
        </span>
      </motion.button>
    </div>
  );
}
