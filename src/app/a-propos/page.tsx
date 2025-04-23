'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-serif mb-8 text-gray-900">À propos de SCI MADELEINE</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-700 mb-6">
              Fondée en 1996, SCI MADELEINE est une société civile immobilière spécialisée 
              dans la détention et la location d'espaces commerciaux à haut potentiel. Notre 
              portefeuille compte aujourd'hui 16 cellules situées dans les pôles d'affaires 
              les plus dynamiques.
            </p>
            
            <h2 className="text-2xl font-serif mt-12 mb-6 text-gray-900">Notre mission</h2>
            <p className="text-gray-700 mb-6">
              Faciliter l'accès des entreprises à des locaux performants et évolutifs, 
              en offrant un accompagnement sur mesure tout au long de leur développement.
            </p>
            
            <h2 className="text-2xl font-serif mt-12 mb-6 text-gray-900">Nos valeurs</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>
                  <strong className="text-gray-900">Excellence :</strong> sélection rigoureuse 
                  et gestion proactive de chaque bien.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>
                  <strong className="text-gray-900">Transparence :</strong> des relations claires, 
                  des loyers sans surprise.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>
                  <strong className="text-gray-900">Engagement :</strong> un interlocuteur dédié 
                  du premier contact à la signature, tout au long de leur projet.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>
                  <strong className="text-gray-900">Innovation :</strong> adaptation permanente aux 
                  évolutions du marché et aux normes environnementales.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">•</span>
                <span>
                  <strong className="text-gray-900">Responsabilité sociétale :</strong> optimisation énergétique 
                  et écosystème fournisseurs locaux.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 