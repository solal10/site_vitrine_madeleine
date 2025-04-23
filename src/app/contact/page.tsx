'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export default function Contact() {
  const searchParams = useSearchParams();
  const propertyParam = searchParams.get('property');
  const property = propertyParam ? JSON.parse(decodeURIComponent(propertyParam)) : null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: property ? `Je suis intéressé(e) par le bien suivant :\n\nTitre : ${property.title}\nType : ${property.type}\nSurface : ${property.surface}\nLocalisation : ${property.location}\n\n` : 'Je suis intéressé(e) par le bien suivant :\n\nTitre : [Nom du bien]\nType : [Bureau/Commerce/Entrepôt]\nSurface : [m²]\nLocalisation : [Arrondissement/Ville]'
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: property
          ? `Je suis intéressé(e) par le bien suivant :\n\nTitre : ${property.title}\nType : ${property.type}\nSurface : ${property.surface}\nLocalisation : ${property.location}\n\n`
          : 'Je suis intéressé(e) par le bien suivant :\n\nTitre : [Nom du bien]\nType : [Bureau/Commerce/Entrepôt]\nSurface : [m²]\nLocalisation : [Arrondissement/Ville]'
      });
    } catch (error) {
      setStatus('error');
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-serif mb-6 text-gray-900">Contactez-nous</h1>
          <p className="text-gray-700 mb-12">
            Vous avez une question ou souhaitez visiter l'un de nos biens ? L'équipe SCI MADELEINE 
            vous répond sous 24 h ouvrées.
          </p>

          {property && (
            <div className="mb-8 p-4 bg-gray-50 rounded-md">
              <h2 className="text-xl font-serif mb-2 text-gray-900">Bien sélectionné :</h2>
              <p className="text-gray-700">
                {property.title} - {property.type} ({property.surface}) à {property.location}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-900"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-800 rounded-md">
                Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-800 rounded-md">
                Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
} 