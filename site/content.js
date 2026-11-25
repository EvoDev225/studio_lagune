// Tout le contenu de marque du site. Pour adapter la démo à un client :
// modifier ce fichier et remplacer les photos du dossier images/.
window.SITE = {
  brand: {
    name: 'Studio Lagune',
    tagline: 'Photographe & événementiel à Abidjan',
    city: 'Cocody, Abidjan'
  },

  // Numéro fictif (format international sans +, puis affichage)
  whatsapp: {
    number: '2250700000000',
    display: '07 00 00 00 00',
    message: "Bonjour Studio Lagune, je voudrais réserver une séance photo."
  },

  demoBadge: 'Site de démonstration',

  nav: [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Prestations', href: '#prestations' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Contact', href: '#contact' }
  ],

  hero: {
    word: 'CAPTURER',
    subtitle: ['Vos plus beaux moments, sublimés.', 'Des images qui restent.'],
    cta: 'Voir le portfolio',
    ctaHref: '#portfolio',
    silhouette: { src: 'images/hero-silhouette.png', alt: 'Silhouette d’un photographe à contre-jour, appareil à l’œil' },
    windowPhoto: 'images/fenetre-couple-plage.jpg',
    thumbs: [
      { src: 'images/vignette-alliances.jpg', alt: 'Alliances dorées' },
      { src: 'images/vignette-gateau.jpg', alt: 'Gâteau de mariage' },
      { src: 'images/vignette-bouquet.jpg', alt: 'Bouquet de la mariée' },
      { src: 'images/vignette-decor.jpg', alt: 'Décor de cérémonie' }
    ],
    proofCount: '+120',
    proofText: 'Plus de 120 événements couverts à Abidjan.',
    availableLabel: 'Disponible pour',
    availableText: ['Mariages &', 'événements 2027'],
    testimonial: {
      quote: 'Studio Lagune a capturé notre mariage mieux que nous l’avions imaginé.',
      name: 'Aïcha K.',
      role: 'Mariée · Assinie',
      initials: 'AK'
    }
  },

  // Deuxième écran : la photo qui sort du mot CAPTURER
  reveal: {
    statement: ['Un jour.', 'Mille émotions.', 'Une seule chance', 'de les garder.'],
    cardLabel: 'Réservations 2027',
    cardTitle: 'Le calendrier est ouvert',
    cardText: 'Mariages, dots, baptêmes, anniversaires et événements d’entreprise, à Abidjan et partout en Côte d’Ivoire.',
    cardCta: 'Réserver sur WhatsApp'
  },

  // Barre fixe (après le hero)
  topbar: { cta: 'Réserver' },

  manifesto: {
    caption: '[ 01 ] À propos',
    statement: 'Chaque événement raconte une histoire. Notre métier : la garder intacte, image après image.',
    photo: { src: 'images/manifeste-appareil.jpg', alt: 'Mains tenant un appareil photo argentique' },
    paragraphs: [
      'Depuis 2016, Studio Lagune photographie les mariages, les dots et les grandes fêtes de famille à Abidjan. On arrive tôt, on se fait discrets, et on ne rate aucun regard qui compte.',
      'Chaque reportage est retouché à la main et livré dans une galerie en ligne privée, prête à partager avec vos proches, ici comme à l’étranger.'
    ],
    signature: { name: 'Kader O.', role: 'Photographe fondateur' }
  },

  works: {
    caption: '[ 02 ] Réalisations',
    title: 'Réalisations',
    lead: 'Quatre reportages récents, parmi plus de cent vingt événements couverts.',
    items: [
      { title: 'Mariage à Assinie', meta: ['Avril 2026', 'Assinie-Mafia', '640 photos'], text: 'Une cérémonie les pieds dans le sable, du lever du soleil au dernier slow.', img: 'images/real-mariage-assinie.jpg', alt: 'Couple marchant sur une plage au coucher du soleil' },
      { title: 'Dot à Cocody', meta: ['Février 2026', 'Cocody Riviera', '410 photos'], text: 'Pagnes, chants et bénédictions : la tradition racontée dans ses moindres détails.', img: 'images/real-dot-cocody.jpg', alt: 'Scène de cérémonie décorée de fleurs rouges et blanches' },
      { title: 'Gala au Plateau', meta: ['Décembre 2025', 'Le Plateau', '380 photos'], text: 'Discours, remises de prix et soirée : un reportage livré en 48 heures pour la communication.', img: 'images/real-gala-plateau.jpg', alt: 'Longue table de gala dressée aux chandelles' },
      { title: '40 ans à Bassam', meta: ['Novembre 2025', 'Grand-Bassam', '290 photos'], text: 'Une surprise gardée secrète jusqu’au bout, et des bougies soufflées en musique.', img: 'images/real-anniversaire-bassam.jpg', alt: 'Bougies d’anniversaire allumées dans la pénombre' }
    ]
  },

  services: {
    caption: '[ 03 ] Prestations',
    title: 'Prestations',
    items: [
      { name: 'Mariages', detail: 'civil, religieux, coutumier' },
      { name: 'Dots & fiançailles', detail: 'cérémonies traditionnelles' },
      { name: 'Baptêmes', detail: 'et communions' },
      { name: 'Anniversaires', detail: 'toutes les décennies' },
      { name: 'Entreprises', detail: 'galas, séminaires, lancements' },
      { name: 'Portraits studio', detail: 'familles, couples, solo' },
      { name: 'Shooting mode', detail: 'créateurs, lookbooks' },
      { name: 'Vidéo & drone', detail: 'films souvenirs, vues aériennes' }
    ]
  },

  gallery: {
    caption: '[ 04 ] Galerie',
    title: 'Galerie',
    filters: [
      { key: 'all', label: 'Tout' },
      { key: 'mariage', label: 'Mariages' },
      { key: 'event', label: 'Événements' },
      { key: 'detail', label: 'Détails' }
    ],
    items: [
      { src: 'images/g02-ceremonie-jardin.jpg', alt: 'Cérémonie en plein air sous une arche fleurie', cat: 'mariage' },
      { src: 'images/g07-bougies-table.jpg', alt: 'Bougies et fleurs sur une table de réception', cat: 'detail' },
      { src: 'images/g03-couple-lumieres.jpg', alt: 'Couple sous des guirlandes lumineuses la nuit', cat: 'mariage' },
      { src: 'images/g09-table-nuit.jpg', alt: 'Table de dîner éclairée aux chandelles', cat: 'event' },
      { src: 'images/g01-mains-bague.jpg', alt: 'Mains enlacées avec bague de fiançailles', cat: 'detail' },
      { src: 'images/g06-reception-tentes.jpg', alt: 'Réception sous des voilages blancs', cat: 'event' },
      { src: 'images/g05-bouquet-mariee.jpg', alt: 'Bouquet de la mariée', cat: 'mariage' },
      { src: 'images/g04-gateau-bois.jpg', alt: 'Gâteau de mariage à trois étages', cat: 'detail' },
      { src: 'images/g11-allee-fleurs.jpg', alt: 'Allée fleurie dans une salle de réception', cat: 'event' },
      { src: 'images/g08-autel-plage.jpg', alt: 'Autel fleuri sur une plage', cat: 'mariage' },
      { src: 'images/g18-appareil-mains.jpg', alt: 'Appareil photo tenu dans une lumière chaude', cat: 'detail' },
      { src: 'images/g13-sortie-ceremonie.jpg', alt: 'Sortie de cérémonie dans un jardin', cat: 'mariage' },
      { src: 'images/g10-bougies.jpg', alt: 'Bougies allumées dans le noir', cat: 'event' },
      { src: 'images/g14-robe.jpg', alt: 'Robe de mariée suspendue', cat: 'detail' }
    ]
  },

  jourJ: {
    caption: '[ 05 ] Le jour J',
    words: ['Le jour', 'J'],
    img: 'images/jour-j-allee.jpg',
    alt: 'Allée de mariage illuminée la nuit',
    intro: 'Un mariage se joue en une journée. On la vit avec vous, du premier bouton de robe au dernier pas de danse.',
    steps: [
      { time: '08 h', title: 'Préparatifs', text: 'Robe, costume, détails et émotions des proches.' },
      { time: '14 h', title: 'Cérémonie', text: 'Mairie, église ou coutume, sans flash intrusif.' },
      { time: '17 h', title: 'Séance couple', text: 'Trente minutes à la lumière dorée, rien que pour vous.' },
      { time: '20 h', title: 'Soirée', text: 'Entrée des mariés, discours, gâteau et piste de danse.' }
    ]
  },

  reviews: {
    caption: '[ 06 ] Avis clients',
    title: 'Ils racontent',
    items: [
      { quote: 'On revit notre mariage à chaque photo. Bien mieux que ce que nous avions imaginé.', name: 'Aïcha K.', event: 'Mariage · Assinie', img: 'images/avis-robe.jpg', alt: 'Robe de mariée suspendue à un arbre' },
      { quote: 'Photos livrées en 48 heures, propres et prêtes pour nos réseaux. Équipe discrète et très pro.', name: 'Marc-Éric T.', event: 'Gala · Le Plateau', img: 'images/avis-table.jpg', alt: 'Table de gala dressée' },
      { quote: 'Ils ont compris la valeur de chaque geste de la cérémonie. Ma mère a pleuré devant l’album.', name: 'Fatou D.', event: 'Dot · Cocody', img: 'images/avis-alliances.jpg', alt: 'Alliances dorées sur un tissu' },
      { quote: 'Une soirée surprise réussie et des souvenirs pour toute la famille. Merci pour votre patience !', name: 'Christelle A.', event: '40 ans · Bassam', img: 'images/g10-bougies.jpg', alt: 'Bougies d’anniversaire' }
    ]
  },

  process: {
    caption: '[ 07 ] Réserver',
    title: 'Réserver',
    lead: 'Votre date compte. Bloquez-la en trois étapes, sans vous déplacer.',
    img: 'images/reserver-photographe.jpg',
    alt: 'Photographe accroupi pendant une séance de mariage',
    steps: [
      { num: '01', title: 'Écrivez-nous sur WhatsApp', text: 'Dites-nous la date, le lieu et le type d’événement. Réponse en moins d’une heure.' },
      { num: '02', title: 'On prépare ensemble', text: 'Rendez-vous au studio ou en appel, repérage des lieux et déroulé de la journée.' },
      { num: '03', title: 'Le jour J, puis la galerie', text: 'On s’occupe des images. Votre galerie en ligne arrive en 10 jours.' }
    ],
    cta: 'Bloquer ma date'
  },

  places: {
    caption: '[ 08 ] Lieux',
    title: 'Où on intervient',
    items: [
      { name: 'Le studio', where: 'Cocody Angré', text: 'Fond blanc, lumière naturelle et loge : idéal pour portraits et shootings.', img: 'images/lieu-studio.jpg', alt: 'Studio photo avec éclairages' },
      { name: 'En extérieur', where: 'Assinie · Bassam · Jacqueville', text: 'Plages, jardins et lagune : on se déplace partout en Côte d’Ivoire.', img: 'images/lieu-plage.jpg', alt: 'Autel fleuri sur une plage' },
      { name: 'Salles de réception', where: 'Tout Abidjan', text: 'Hôtels, salles des fêtes, résidences privées : on s’adapte à chaque lumière.', img: 'images/lieu-salle.jpg', alt: 'Salle de réception dressée' }
    ]
  },

  offers: {
    caption: '[ 09 ] Formules',
    title: 'Formules',
    toggle: [
      { key: 'half', label: 'Demi-journée' },
      { key: 'full', label: 'Journée entière' }
    ],
    price: 'Sur devis',
    note: 'Tarifs sur demande, selon la date et le lieu.',
    cta: 'Demander un devis',
    cards: [
      { name: 'Séance portrait',
        half: { duration: '2 heures', items: ['Au studio ou en extérieur', '30 photos retouchées', 'Galerie en ligne privée'] },
        full: { duration: '4 heures', items: ['Deux lieux au choix', '60 photos retouchées', 'Galerie en ligne et 10 tirages'] } },
      { name: 'Reportage événement',
        half: { duration: '5 heures de présence', items: ['Cérémonie ou soirée', '300 photos retouchées', 'Galerie livrée en 10 jours'] },
        full: { duration: '12 heures de présence', items: ['Des préparatifs à la soirée', '600 photos retouchées', 'Album photo de 30 pages en option'] } }
    ]
  },

  faq: {
    caption: '[ 10 ] Questions',
    title: 'Questions',
    items: [
      { q: 'Quand recevons-nous nos photos ?', a: 'Une sélection de 20 photos sous 72 heures, puis la galerie complète en 10 jours.' },
      { q: 'Vous déplacez-vous hors d’Abidjan ?', a: 'Oui, partout en Côte d’Ivoire. Les frais de déplacement sont indiqués dans le devis.' },
      { q: 'Faut-il verser un acompte ?', a: 'Un acompte de 50 % par Mobile Money réserve votre date. Le solde est réglé le jour J.' },
      { q: 'Proposez-vous des albums et des tirages ?', a: 'Oui : albums imprimés, tirages grand format et cadres, sur demande.' },
      { q: 'Faites-vous des images au drone ?', a: 'Oui, en extérieur, quand le lieu et la météo le permettent.' }
    ]
  },

  contact: {
    caption: '[ 11 ] Contact',
    title: 'Une date en tête ?',
    lead: 'Écrivez-nous, on vous répond en moins d’une heure.',
    cta: 'Écrire sur WhatsApp',
    lines: [
      { label: 'WhatsApp', value: '07 00 00 00 00' },
      { label: 'Studio', value: 'Rue des Jardins, Cocody Angré, Abidjan' },
      { label: 'Horaires', value: 'Lundi – samedi : 9 h – 19 h · Dimanche sur rendez-vous' },
      { label: 'Instagram', value: '@studiolagune.demo' }
    ]
  },

  footer: {
    wordmark: 'Studio Lagune',
    closing: 'À très vite derrière l’objectif.',
    copyright: '© 2026 Studio Lagune · Abidjan',
    demo: 'Site de démonstration — entreprise fictive'
  }
};
