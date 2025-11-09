'use client';

import { useState } from 'react';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validatePhone = (value: string) => /^\d{10,15}$/.test(value.replace(/\D/g, ''));
  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    if (!validatePhone(phone)) {
      setPhoneError('Enter a valid phone number (e.g., +380 555 444 3322)');
      valid = false;
    } else setPhoneError('');

    if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else setEmailError('');

    if (!valid) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setPhone('');
      setEmail('');
      onSuccess();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-8"
      >
        <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
        <p className="text-lg font-medium text-white mb-2">Your data has been sent.</p>
        <p className="text-sm text-white/70">We will contact you soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1.5">Phone Number</label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 w-5 h-5 text-white/40" />
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="+380 XX XXX XXXX"
            className={`
              w-full pl-10 pr-3 py-3 bg-white/10 border rounded-lg text-white
              placeholder-white/40 focus:outline-none focus:border-white/50 transition
              ${phoneError ? 'border-red-400' : 'border-white/20'}
            `.trim()}
          />
        </div>
        {phoneError && <p className="mt-1 text-xs text-red-400">{phoneError}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-1.5">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-white/40" />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="author@example.com"
            className={`
              w-full pl-10 pr-3 py-3 bg-white/10 border rounded-lg text-white
              placeholder-white/40 focus:outline-none focus:border-white/50 transition
              ${emailError ? 'border-red-400' : 'border-white/20'}
            `.trim()}
          />
        </div>
        {emailError && <p className="mt-1 text-xs text-red-400">{emailError}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full bg-white text-black font-bold rounded-xl py-3 transition
          hover:bg-white/90 disabled:opacity-50
        `.trim()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </motion.button>
    </form>
  );
}