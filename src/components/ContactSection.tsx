'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Client-side only state to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);
  
  // Run once on component mount (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
    // Show success message
    alert(t('success'));
  };

  // Only render the form content when we're on the client
  // This prevents hydration mismatches
  const renderForm = () => {
    if (!isClient) {
      return <div className="min-h-[300px] flex items-center justify-center">
        <div className="animate-pulse w-8 h-8 rounded-full bg-purple-500/20"></div>
      </div>;
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t('form.name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('form.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t('form.message')}</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:ring-purple-500 focus:border-purple-500"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="btn-primary w-full">{t('form.submit')}</button>
      </form>
    );
  };
  
  return (
    <section id="contact" className="section bg-gradient-to-b from-[#151718] to-[#1a1c1e]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 gradient-text">{t('title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="card overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-emerald-500"></div>
            <h3 className="text-xl font-semibold mb-4">{t('info.title')}</h3>
            <p className="text-gray-400 mb-6">{t('info.description')}</p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-300">info@ingio.is</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-300">Munich, Bavaria</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-purple-500"></div>
            {renderForm()}
          </div>
        </div>
      </div>
    </section>
  );
} 