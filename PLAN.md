# Site 1 — Studio Lagune (photographe / événementiel)

Site de démonstration fictif pour la vague TikTok. Base technique et effets : template film-festival (8B, licence MIT), entièrement réécrit (textes, sections, photos). Hero : repris de la référence « CREATE » (panneau orange + panneau blanc + sujet détouré au centre).

---

## 1. Variables du site

| Variable | Valeur |
|---|---|
| Secteur | Photographe / événementiel (mariages, dots, baptêmes, anniversaires, entreprises) |
| Nom fictif | **Studio Lagune** (à vérifier : n'existe pas déjà à Abidjan) |
| Quartier | Cocody, Abidjan (adresse fictive : « Rue des Jardins, Cocody Angré ») |
| Mot géant du hero | **CAPTURER** |
| Thème | Hero orange / blanc comme la référence, puis tout le site en sombre |
| Accent | Orange clair |
| Action principale | Réserver une séance par WhatsApp |
| Numéro | fictif : 07 00 00 00 00 |
| Offre visée | Pro (une page longue, galerie, contact) |
| Prix | aucun : « Sur devis » / « Tarifs sur demande » |
| Badge | « Site de démonstration » visible en permanence (coin bas gauche) |

### Palette

| Rôle | Couleur |
|---|---|
| Fond sombre | `#0a0a0a` |
| Panneaux sombres | `#141414` |
| Texte | `#ffffff` |
| Texte secondaire | `#a8a8a8` |
| Filets | `#272727` |
| Accent orange clair | `#ff9a3c` |
| Orange profond (dégradé du hero) | `#c2410c` → `#7c2d12` |
| Panneau blanc du hero | `#ffffff` |

### Polices (Google Fonts)

- Titres : **Anton** ou **Bebas Neue** (lettres hautes et serrées, comme « CREATE »), à valider au premier rendu.
- Texte : **Inter** (400 / 500).
- Petites étiquettes en majuscules : **DM Mono** (comme dans ton programme).

---

## 2. Stack

- **Un seul fichier HTML**, sans étape de build, basé sur la version GSAP du template (`index.gsap.html`) : GSAP + ScrollTrigger + Lenis. Les animations au scroll marchent dans tous les navigateurs, Firefox compris, ce qui n'est pas le cas de la version « sans librairie ».
- `content.js` : tout le contenu de marque (nom, textes, numéro, services, avis, horaires) dans un seul fichier, pour adapter la démo à un client en 1 à 2 heures.
- `images/` : photos téléchargées en local (pas de liens directs vers Unsplash).
- `serve.mjs` : petit serveur Node, port 4385.
- `CREDITS.md` : liste des photos (URL + auteur) et licence MIT du template d'origine.

### Arborescence

```
site evenement/
  PLAN.md
  site/
    index.html
    content.js
    serve.mjs
    CREDITS.md
    LICENSE        (MIT du template d'origine)
    images/
  captures/brut/
  captures/tiktok/
  videos/
  textes/          (description TikTok, accroches)
```

---

## 3. Le hero (copie de la mise en page de la référence)

### Desktop (1440 × 900)

Fond de page orange vif (comme le cadre de la référence), avec la carte centrale en deux panneaux et des coins arrondis.

**Panneau gauche (≈ 55 %), dégradé orange profond :**
- En haut à gauche : logo texte « Studio Lagune » avec un petit symbole (obturateur stylisé en SVG).
- Le mot géant **CAPTURER** en blanc, police haute et condensée.
- Sous-titre : « Vos plus beaux moments, sublimés. Des images qui restent. »
- Bouton pilule blanc : « VOIR LE PORTFOLIO ↗ ».
- En bas : une rangée de 4 vignettes rondes **de photos d'événements** (alliances, gâteau, bouquet, décor), pas de visages, plus une pastille « +120 », et la ligne « Plus de 120 événements couverts à Abidjan ».

**Panneau droit (≈ 45 %), blanc :**
- Navigation : PORTFOLIO · PRESTATIONS · À PROPOS · CONTACT + bouton menu rond.
- « DISPONIBLE POUR ● » (point orange qui pulse) puis « Mariages & événements 2027 ».
- En bas à droite : carte d'avis client (« Studio Lagune a capturé notre mariage mieux que nous l'avions imaginé. » — Aïcha K., mariée, Assinie), avec un **monogramme** à la place de la photo.

**Au centre, à cheval sur les deux panneaux :** la silhouette détourée d'un photographe à contre-jour, appareil à l'œil, de profil ou de dos (visage non reconnaissable). Photo libre de droits, détourée (fond transparent PNG/WebP).

### Mobile (390 × 844)

- Panneau orange en plein écran : logo, mot CAPTURER sur toute la largeur, silhouette en bas à droite, bouton.
- Le panneau blanc passe dessous en carte : « Disponible pour », avis client.
- Menu plein écran (repris du template).

### Moment signature (les 3 premières secondes)

1. 0,0 s : écran noir, un **flash d'appareil photo** (éclair blanc) avec bruit d'obturateur visuel (deux lamelles qui s'ouvrent).
2. 0,3 s : le panneau orange glisse depuis la gauche, le panneau blanc depuis la droite.
3. 0,7 s : les lettres de CAPTURER montent une à une derrière un masque.
4. 1,2 s : la silhouette apparaît en passant du flou au net (mise au point d'objectif), léger zoom.
5. 1,8 s : sous-titre, bouton, vignettes et navigation montent en cascade.
6. 2,4 s : la carte d'avis rebondit en place, le point « disponible » se met à pulser.

### Transition au scroll (reprise de l'effet du template)

Le mot CAPTURER devient une **fenêtre** : une photo de mariage apparaît à travers les lettres, puis la fenêtre grandit jusqu'au plein écran pendant que les panneaux s'écartent. La photo plein écran devient le deuxième écran, et le site bascule sur le fond sombre.

---

## 4. Sections après le hero

Chaque section reprend un effet du template, avec un contenu propre au photographe.

| # | Section | Contenu | Effet repris du template |
|---|---|---|---|
| 2 | **Plein écran** | La photo de mariage + phrase « Un jour. Mille émotions. Une seule chance de les garder. » + carte « Réservations 2027 ouvertes » | Fenêtre du titre qui devient plein écran |
| 3 | **Manifeste** | « Chaque événement raconte une histoire. Notre métier : la garder intacte, image après image. » + photo (mains et appareil) + 2 paragraphes signés du photographe fictif | Mots qui s'allument un par un (lueur orange) |
| 4 | **Réalisations** | 4 reportages vedettes : Mariage à Assinie · Dot à Cocody · Gala d'entreprise au Plateau · 40 ans à Grand-Bassam. Pour chacun : lieu, date, nombre de photos livrées, une phrase | Photo qui s'ouvre depuis une fente + barre orange qui se remplit |
| 5 | **Prestations** | 8 lignes géantes : Mariages · Dots & fiançailles · Baptêmes · Anniversaires · Entreprises · Portraits studio · Shooting mode · Vidéo & drone, chacune avec un détail entre crochets | Noms coupés en deux moitiés qui se rejoignent |
| 6 | **Galerie masonry** | 12 à 16 photos en colonnes de hauteurs variées (style du PDF), filtres Mariages / Événements / Portraits | Apparition en cascade + léger zoom au survol |
| 7 | **Le Jour J** | Section épinglée : une pilule de photo s'élargit au plein écran pendant que les mots « LE JOUR » et « J » partent aux bords ; puis le déroulé d'une journée de mariage (préparatifs, cérémonie, soirée) | Opening Night épinglé |
| 8 | **Avis clients** | 4 avis (prénom + initiale, type d'événement, lieu) avec chacun une photo de leur événement, **sans visage** | Photos qui passent du négatif au positif (développement en chambre noire) |
| 9 | **Comment réserver** | 3 étapes numérotées : 1. Écrivez-nous sur WhatsApp · 2. On prépare ensemble (rendez-vous, repérage) · 3. Le jour J, puis la galerie en ligne livrée en 10 jours | Titre découpé, photo depuis une fente, filets qui se tracent |
| 10 | **Où on intervient** | 3 panneaux : Le studio (Cocody) · En extérieur (plages d'Assinie, Bassam) · Salles de réception (tout Abidjan) | Rangée épinglée qui défile à l'horizontale |
| 11 | **Formules** | 2 cartes : « Séance portrait » et « Reportage événement », interrupteur « Demi-journée / Journée entière » qui change la durée et le contenu, prix remplacé par **« Sur devis »**, bouton « Réserver sur WhatsApp » | Talons de ticket qui tombent puis se raccrochent |
| 12 | **Questions** | 5 questions : délai de livraison · déplacements hors Abidjan · acompte · albums et tirages · drone | Accordéon, filets tracés |
| 13 | **Contact** | Gros bouton vert WhatsApp, numéro 07 00 00 00 00, adresse fictive, horaires (lun-sam 9 h-19 h, dimanche sur rendez-vous), Instagram fictif | Panneau qui s'ouvre depuis une fente |
| 14 | **Footer** | « STUDIO LAGUNE » sur toute la largeur, « À très vite derrière l'objectif. », liens, mention « Site de démonstration — entreprise fictive » | Mot-symbole depuis une fente |

En plus, partout :
- Bouton WhatsApp flottant (en bas à droite) qui apparaît après le hero.
- Badge discret « Site de démonstration » (en bas à gauche).
- Navigation fixe qui se cache au scroll vers le bas et revient au scroll vers le haut (reprise du template).

---

## 5. Photos à trouver (≈ 30, Unsplash / Pexels, libres de droits)

| Usage | Nombre | Recherche |
|---|---|---|
| Silhouette du hero (à détourer) | 1 | photographer silhouette backlit, camera |
| Photo de la fenêtre / plein écran | 1 | african wedding couple, golden hour (de dos ou de loin) |
| Vignettes rondes du hero | 4 | wedding rings, wedding cake, bouquet, event decor |
| Manifeste | 1 | hands holding camera |
| Réalisations | 4 | beach wedding, traditional ceremony, corporate gala, birthday party |
| Galerie masonry | 14 | mariage, fête, décor, détails, portraits de dos |
| Le Jour J | 1 | wedding reception lights |
| Avis clients | 4 | détails d'événements (mains, robe, table, danse floue) |
| Comment réserver | 1 | photographer at work |
| Où on intervient | 3 | photo studio, beach, reception hall |

Règle : aucun visage reconnaissable, aucune marque visible. Chaque photo est notée dans `CREDITS.md`.

---

## 6. Contrôle avant captures

- [ ] Affichage propre de 360 à 1440 px, aucun texte qui déborde
- [ ] Aucune erreur dans la console
- [ ] Aucun prix chiffré nulle part
- [ ] Badge « Site de démonstration » visible
- [ ] Aucun visage reconnaissable, aucune marque réelle
- [ ] `prefers-reduced-motion` : la page se lit en entier sans animation
- [ ] Moment signature lisible dans les 3 premières secondes
- [ ] Scroll régulier d'environ 40 s sans trou ni zone vide

Puis : les 7 captures et les 2 vidéos dans `captures/brut/` et `videos/` (liste dans le programme).

---

## 7. Ordre de travail

1. Valider ce plan (une retouche si besoin).
2. Trouver et télécharger les photos dans `site/images/`, détourer la silhouette.
3. Construire le hero seul et le valider à l'écran (desktop + mobile).
4. Construire les sections 2 à 14.
5. Contrôle complet, puis captures et vidéos.
