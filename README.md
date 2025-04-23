# Site Vitrine SCI MADELEINE

Site vitrine professionnel pour la société SCI MADELEINE, spécialisée dans la location de biens commerciaux.

## Fonctionnalités

- Design moderne et responsive
- Animations fluides avec Framer Motion
- Formulaire de contact fonctionnel
- Galerie de biens immobiliers
- Optimisé pour le SEO

## Technologies utilisées

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd site_vitrine_madeleine
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Déploiement

### Préparation pour le déploiement

1. Générez la version de production :
```bash
npm run build
```

2. Testez la version de production localement :
```bash
npm start
```

### Déploiement sur Infomaniak

1. Connectez-vous à votre espace client Infomaniak
2. Accédez à votre hébergement web
3. Utilisez le gestionnaire de fichiers ou FTP pour uploader le contenu du dossier `out` (généré après le build)
4. Assurez-vous que le fichier `.htaccess` est présent à la racine avec les règles de réécriture appropriées

## Configuration du formulaire de contact

Pour rendre le formulaire de contact fonctionnel, vous devez :

1. Configurer un service d'email (comme SendGrid, Mailgun, etc.)
2. Modifier le fichier `src/app/contact/page.tsx` pour intégrer l'API de votre service d'email
3. Ajouter les variables d'environnement nécessaires dans un fichier `.env.local`

## Personnalisation

- Images : Remplacez les images placeholder dans le dossier `public/images`
- Contenu : Modifiez les textes directement dans les composants React
- Styles : Personnalisez les couleurs et les polices dans `tailwind.config.ts`

## Licence

Ce projet est sous licence MIT.
