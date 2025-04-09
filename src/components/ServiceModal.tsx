'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import ServiceContent from './ServiceContent';

interface ServiceModalProps {
  isOpen: boolean;
  serviceId: string | null;
  onClose: () => void;
}

export default function ServiceModal({ isOpen, serviceId, onClose }: ServiceModalProps) {
  const router = useRouter();
  const t = useTranslations('services');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Prevent background scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Handle escape key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  // Fallback for SSR or non-JS environments
  if (!isClient) return null;
  
  return (
    <AnimatePresence>
      {isOpen && serviceId && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Global close button */}
          <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[70]">
            <motion.button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/90 hover:bg-gray-700 text-white shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
          
          {/* Modal */}
          <motion.div 
            className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20 md:pt-24 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative bg-[#18191b] w-full max-w-5xl sm:rounded-xl shadow-xl overflow-hidden max-h-[85vh] overflow-y-auto mb-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Modal content */}
              <ServiceContent serviceId={serviceId} isModal={true} isCompact={true} />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 