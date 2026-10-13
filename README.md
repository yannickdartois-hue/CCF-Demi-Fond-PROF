# CCF EPS Demi-fond — Outil numérique terrain

Outil HTML offline pour la passation et la notation du CCF demi-fond au lycée (GT, PRO, CAP).  
Développé au **Lycée Georges Pompidou, Castelnau-le-Lez**.

---

## Fonctionnalités

- **3 modes de passation** : Terrain (chrono + saisie temps), Bureau (saisie différée), Entraînement (500m + 2×1'30)
- **3 filières** : GT, Professionnel, CAP — barèmes officiels intégrés
- **Chronomètre terrain** : affichage large, dixièmes de seconde, glisser-déposer du temps sur l'élève, mode rapide 500m
- **Notes automatiques** : calcul instantané /10 et /20 avec zones de vitesse (Z1→Z4)
- **Export CSV et Excel (XLSX)** — fonctionne sans connexion internet
- **Sauvegarde automatique** toutes les 30 secondes (localStorage)
- **Import/Export JSON** — reprise de session, multi-poste
- **Mode Entraînement** : 1×500m + 2 passages 1'30, barèmes indépendants
- **PWA installable** sur iPad, iPhone, Galaxy Tab, MacBook (icône écran d'accueil)
- **Dark mode / Light mode** — bascule manuelle
- **Verrouillage de session** par code PIN
- **100 % offline** — aucune dépendance réseau, un seul fichier HTML

---

## Installation

### Option 1 — Téléchargement direct

1. Téléchargez **[ccf_eps_v3.html](./ccf_eps_v3.html)**
2. Ouvrez le fichier dans **Safari (iPad/iPhone)** ou **Chrome (Android/PC)**
3. C'est tout — aucune installation requise

### Option 2 — Installer en application (PWA)

**iPad / iPhone (Safari)**  
Ouvrir le fichier → bouton Partager → « Sur l'écran d'accueil »

**Android (Chrome)**  
Ouvrir le fichier → menu ⋮ → « Ajouter à l'écran d'accueil »

**MacBook (Safari)**  
Ouvrir le fichier → menu Fichier → « Ajouter au Dock »

> **Important :** Ouvrir le fichier **directement dans le navigateur** (ne pas passer par un lecteur de fichiers ou une application tierce). Sur iPad, utiliser **Safari** pour que la PWA et la sauvegarde automatique fonctionnent.

---

## Utilisation rapide

### Terrain
1. Sélectionner la filière (GT / PRO / CAP)
2. Entrer la liste des élèves (un par ligne)
3. Onglet **Terrain** → lancer le chrono → glisser le temps sur l'élève
4. La note /10 et /20 s'affiche instantanément
5. Exporter en **CSV** ou **XLSX** en fin de séance

### Bureau
Même fonctionnement sans le chrono — saisie manuelle des temps en `mm'ss` ou `m'ss`.

### Entraînement
Saisir les temps **500m** et les distances **1'30** — les notes sont calculées indépendamment selon les barèmes entraînement.

---

## Barèmes intégrés

| Filière | Distance | Barème |
|---------|----------|--------|
| GT      | 500m (filles) / 1000m (garçons) | BO 2021 |
| PRO     | 500m (filles) / 1000m (garçons) | BO 2021 |
| CAP     | 500m (filles) / 500m (garçons)  | BO 2021 |
| Entrainement | 500m + 1'30 | Barèmes zones Z1-Z4 |

---

## Compatibilité

| Appareil | Navigateur | Statut |
|----------|------------|--------|
| iPad (8" / 10") | Safari | ✅ Recommandé |
| iPhone | Safari | ✅ |
| Galaxy Tab | Chrome | ✅ |
| MacBook | Safari / Chrome | ✅ |
| PC Windows | Chrome / Edge | ✅ |

---

## Fichiers du dépôt

```
ccf-eps-demi-fond/
├── ccf_eps_v3.html   ← l'outil complet (fichier unique, ~930 Ko)
├── index.html        ← page de présentation GitHub Pages
└── README.md         ← ce fichier
```

---

## Licence

Usage pédagogique libre. Redistribution autorisée sans modification commerciale.

---

*Lycée Georges Pompidou — Castelnau-le-Lez — EPS Demi-fond CCF*
