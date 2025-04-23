'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const properties = [
  {
    id: 1,
    title: 'Bureau moderne',
    description: 'Espace de travail lumineux et fonctionnel, idéal pour les professionnels.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    type: 'Bureau',
    surface: '50m²',
    location: 'Mouans Sartoux'
  },
  {
    id: 2,
    title: 'Local commercial',
    description: 'Emplacement idéal pour votre commerce, grande vitrine et bonne visibilité.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    type: 'Commerce',
    surface: '80m²',
    location: 'Mouans Sartoux'
  },
  {
    id: 3,
    title: 'Entrepôt logistique',
    description: 'Espace de stockage sécurisé, adapté à vos besoins logistiques.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    type: 'Entrepôt',
    surface: '200m²',
    location: 'Mouans Sartoux'
  }
];

export default function NosBiens() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif mb-6 text-gray-900">Notre portefeuille professionnel</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Découvrez une sélection de 16 espaces modulables, pensés pour répondre aux exigences des entreprises : bureaux high-tech, locaux commerciaux à forte visibilité et entrepôts logistiques sécurisés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif text-gray-900">{property.title}</h3>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {property.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{property.description}</p>
                <div className="flex justify-between text-sm text-gray-600 mb-6">
                  <span>{property.surface}</span>
                  <span>{property.location}</span>
                </div>
                <Link
                  href={`/contact?property=${encodeURIComponent(JSON.stringify({
                    title: property.title,
                    type: property.type,
                    surface: property.surface,
                    location: property.location
                  }))}`}
                  className="block w-full bg-gray-900 text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Contacter pour ce bien
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 