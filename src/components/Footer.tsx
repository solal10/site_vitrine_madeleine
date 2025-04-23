import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">SCI MADELEINE</h3>
            <p className="text-gray-400">
              Spécialiste des espaces commerciaux à louer depuis 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/nos-biens" className="text-gray-400 hover:text-white transition-colors">
                  Nos biens
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Mentions légales</h3>
            <p className="text-gray-400">
              SCI MADELEINE - Société Civile Immobilière<br />
              Capital social : 100 000 €<br />
              RCS Paris B 123 456 789<br />
              Siège social : 123, rue de l'Immobilier, 75000 Paris
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SCI MADELEINE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 