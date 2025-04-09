'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function ConsultationSection() {
  const t = useTranslations('consultation');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    console.log('Consultation form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', company: '', phone: '', message: '' });
    // Show success message
    setIsSubmitted(true);
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  // Benefits list
  const benefits = [
    { key: 'one', icon: '🔍' },
    { key: 'two', icon: '💡' },
    { key: 'three', icon: '🗺️' },
    { key: 'four', icon: '❓' }
  ];

  // Only render the form content when we're on the client
  const renderForm = () => {
    if (!isClient) {
      return <div className="min-h-[300px] flex items-center justify-center">
        <div className="animate-pulse w-8 h-8 rounded-full bg-purple-500/20"></div>
      </div>;
    }
    
    if (isSubmitted) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
          <div className="mb-4 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">{t('success')}</h3>
        </div>
      );
    }
    
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
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
          
          <div>
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">{t('form.company')}</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">{t('form.phone')}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t('form.message')}</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formState.message}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:ring-purple-500 focus:border-purple-500"
            required
          ></textarea>
        </div>
        
        <div>
          <button type="submit" className="btn-primary w-full">{t('form.submit')}</button>
          <p className="mt-2 text-xs text-gray-500 text-center">{t('form.privacy')}</p>
        </div>
      </form>
    );
  };
  
  return (
    <section id="consultation" className="section bg-gradient-to-b from-[#1a1c1e] to-[#151718]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 gradient-text">{t('title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="card overflow-hidden relative bg-gradient-to-br from-purple-900/20 to-emerald-900/20">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-emerald-500"></div>
            <h3 className="text-xl font-semibold mb-4">{t('description')}</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-3">{t('benefits.title')}</h4>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit.key} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center mr-3">
                      {benefit.icon}
                    </span>
                    <span className="text-gray-300">{t(`benefits.items.${benefit.key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-purple-900/20 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-400">
                  No strings attached. Our consultations are completely free with no obligation to purchase.
                </p>
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
