'use client';

import { useState } from 'react';
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
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'company':
        if (!value.trim()) error = 'Company name is required';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        break;
    }
    
    return error;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormState({
      ...formState,
      [name]: value
    });
    
    // Validate on change for immediate feedback
    setFormErrors({
      ...formErrors,
      [name]: validateField(name, value)
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const errors = {
      name: validateField('name', formState.name),
      email: validateField('email', formState.email),
      company: validateField('company', formState.company),
      message: validateField('message', formState.message)
    };
    
    setFormErrors(errors);
    
    // Check if there are any errors
    if (Object.values(errors).some(error => error)) {
      return; // Don't submit if there are validation errors
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    setIsSubmitted(false); // Reset success state on new submission

    try {
      // Note: Backend not implemented yet
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        // Try to get error message from response, fallback to generic message
        let errorMsg = `HTTP error! Status: ${response.status}`;
        try {
            const errorData = await response.json();
            errorMsg = errorData.message || errorMsg;
        } catch (jsonError) {
            // Ignore if response body isn't valid JSON
        }
        throw new Error(errorMsg);
      }

      // Success
      setIsSubmitted(true);
      setFormState({ name: '', email: '', company: '', phone: '', message: '' }); // Clear form

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
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
    if (isSubmitted) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center" role="status" aria-live="polite">
          <div className="mb-4 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">{t('success')}</h3>
        </div>
      );
    }
    
    return (
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t('form.name')} *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className={`w-full rounded-md bg-gray-800 border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} text-gray-300 focus:ring-purple-500 focus:border-purple-500 disabled:opacity-50`}
              required
              disabled={isSubmitting}
              autoComplete="name"
              aria-describedby={formErrors.name ? "name-error" : undefined}
              aria-invalid={formErrors.name ? "true" : "false"}
            />
            {formErrors.name && <p id="name-error" className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('form.email')} *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full rounded-md bg-gray-800 border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} text-gray-300 focus:ring-purple-500 focus:border-purple-500 disabled:opacity-50`}
              required
              disabled={isSubmitting}
              autoComplete="email"
              aria-describedby={formErrors.email ? "email-error" : undefined}
              aria-invalid={formErrors.email ? "true" : "false"}
            />
            {formErrors.email && <p id="email-error" className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">{t('form.company')} *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              className={`w-full rounded-md bg-gray-800 border ${formErrors.company ? 'border-red-500' : 'border-gray-700'} text-gray-300 focus:ring-purple-500 focus:border-purple-500 disabled:opacity-50`}
              required
              disabled={isSubmitting}
              autoComplete="organization"
              aria-describedby={formErrors.company ? "company-error" : undefined}
              aria-invalid={formErrors.company ? "true" : "false"}
            />
            {formErrors.company && <p id="company-error" className="mt-1 text-sm text-red-500">{formErrors.company}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">{t('form.phone')}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:ring-purple-500 focus:border-purple-500 disabled:opacity-50"
              disabled={isSubmitting}
              autoComplete="tel"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t('form.message')} *</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formState.message}
            onChange={handleChange}
            className={`w-full rounded-md bg-gray-800 border ${formErrors.message ? 'border-red-500' : 'border-gray-700'} text-gray-300 focus:ring-purple-500 focus:border-purple-500 disabled:opacity-50`}
            required
            disabled={isSubmitting}
            aria-describedby={formErrors.message ? "message-error" : undefined}
            aria-invalid={formErrors.message ? "true" : "false"}
          ></textarea>
          {formErrors.message && <p id="message-error" className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
        </div>
        
        <div>
          <button 
            type="submit" 
            className="btn-primary w-full py-3 text-lg font-medium disabled:opacity-70" 
            disabled={isSubmitting}
            aria-busy={isSubmitting ? "true" : "false"}
          >
            {isSubmitting ? 'Submitting...' : t('form.submit')}
          </button>
          {submitError && (
              <p className="mt-2 text-sm text-red-500 text-center" role="alert">{submitError}</p>
          )}
          <p className="mt-2 text-xs text-gray-500 text-center">* {t('form.privacy')}</p>
        </div>
      </form>
    );
  };
  
  return (
    <section id="consultation" className="section bg-gradient-to-b from-[#1a1c1e] to-[#151718]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <span>{t(`benefits.items.${benefit.key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-purple-500"></div>
            {renderForm()}
          </div>
        </div>
      </div>
    </section>
  );
}
