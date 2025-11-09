'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-black border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white font-serif">Become an Author</h3>
          <button onClick={onClose} className="text-white/60 hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-white/70 mb-6">
          Please leave your details so we can contact you.
        </p>

        <ContactForm onSuccess={onClose} />
      </motion.div>
    </motion.div>
  );
}