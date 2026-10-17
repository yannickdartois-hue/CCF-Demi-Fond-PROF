# CCF EPS Demi-fond — Outil numérique terrain

Outil HTML offline pour la passation et la notation du CCF demi-fond au lycée (GT, PRO, CAP).  
Développé au **Lycée Georges Pompidou, Castelnau-le-Lez**.

🔗 **[Ouvrir l'application](https://votre-compte.github.io/ccf-eps-demi-fond/)**

---

## Structure du dépôt

```
ccf-eps-demi-fond/
├── index.html   ← l'application complète (fichier unique, ~930 Ko)
└── README.md    ← ce fichier
```

L'application est entièrement contenue dans `index.html` — aucune dépendance externe, aucun serveur requis.

---

## Fonctionnalités

- **3 modes** : Terrain (chrono + saisie temps), Bureau (saisie différée), Entraînement (500m + 2×1'30)
- **3 filières** : GT, Professionnel, CAP — barèmes officiels BO 2021 intégrés
- **Chronomètre** : affichage large avec dixièmes de seconde, glisser-déposer du temps sur l'élève, mode rapide
- **Notes automatiques** : calcul instantané /10 et /20 avec zones de vitesse Z1→Z4
- **Export CSV et Excel (XLSX)** — fonctionne sans connexion internet
- **Sauvegarde automatique** toutes les 30 secondes (localStorage)
- **Import/Export JSON** — reprise de session, transfert entre postes
- **PWA installable** sur iPad, iPhone, Galaxy Tab, MacBook (icône écran d'accueil)
- **Dark mode / Light mode** — bascule manuelle
- **Verrouillage de session** par code PIN
- **100 % offline** — un seul fichier HTML, zéro dépendance réseau

---

## Utilisation

### Option 1 — Via GitHub Pages (recommandé)

Ouvrir directement : **`https://votre-compte.github.io/ccf-eps-demi-fond/`**

Puis installer en PWA :
- **iPad/iPhone** → bouton Partager → « Sur l'écran d'accueil »
- **Android** → menu ⋮ → « Ajouter à l'écran d'accueil »
- **MacBook Safari** → menu Fichier → « Ajouter au Dock »

### Option 2 — Fichier local

Télécharger `index.html` et l'ouvrir directement dans Safari ou Chrome.

---

## Compatibilité

| Appareil | Navigateur | Statut |
|----------|------------|--------|
| iPad 8" / 10" | Safari | ✅ Recommandé |
| iPhone | Safari | ✅ |
| Galaxy Tab | Chrome | ✅ |
| MacBook | Safari / Chrome | ✅ |
| PC Windows | Chrome / Edge | ✅ |

---

## Barèmes intégrés

| Filière | Épreuve | Barème |
|---------|---------|--------|
| GT | 500m (F) / 1000m (G) | BO 2021 |
| PRO | 500m (F) / 1000m (G) | BO 2021 |
| CAP | 500m (F) / 500m (G) | BO 2021 |
| Entraînement | 500m + 1'30 | Zones Z1-Z4 |

---

*Lycée Georges Pompidou · Castelnau-le-Lez · EPS Demi-fond CCF*
