'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/95" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80")'
          }}
        />
        
        <div className="relative h-full flex items-center pt-32">
          <div className="container mx-auto px-4 pl-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white [text-shadow:_0_1px_12px_rgb(0_0_0_/_90%)]"
            >
              <h1 className="text-4xl md:text-6xl font-serif mb-6">
                Des espaces qui font grandir votre entreprise
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                SCI MADELEINE met à votre disposition 16 cellules commerciales – bureaux, boutiques et entrepôts – 
                idéalement situées à Mouans Sartoux en région PACA. Trouvez l'adresse qui donnera de l'élan à 
                votre activité.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Obtenir une proposition
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-serif mb-4 text-gray-900">Bureaux</h3>
              <p className="text-gray-600">
                Des espaces de travail modernes et fonctionnels pour votre entreprise.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-serif mb-4 text-gray-900">Commerces</h3>
              <p className="text-gray-600">
                Des emplacements stratégiques pour développer votre activité commerciale.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-serif mb-4 text-gray-900">Entrepôts</h3>
              <p className="text-gray-600">
                Des espaces de stockage adaptés à vos besoins logistiques.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
