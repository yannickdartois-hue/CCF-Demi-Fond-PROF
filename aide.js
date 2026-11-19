/* aide.js — mode d'emploi de l'outil CCF demi-fond (lu par eps-aide.js) */
window.EPS_AIDE={appli:'CCF demi-fond · prof',bouton:false,
pied:'Les données restent sur cet appareil. Exportez toujours en Excel après l’épreuve.',
publics:[{id:'prof',titre:'Professeur',chapitres:[
{t:'Démarrer (avant l’épreuve)',html:`<ol>
<li>Choisissez l’examen : <b>Bac G&T</b> (2×500 m + 1’30), <b>Bac Pro</b> ou <b>CAP</b> (500 m + 2×1’30).</li>
<li>Choisissez le mode : <b>Terrain</b> (saisie pendant l’épreuve), <b>Bureau</b> (temps déjà relevés, à coller depuis un tableur) ou <b>Entraînement</b> (épreuve blanche, notes par course).</li>
<li>Onglet <b>Import</b> : glissez le fichier de la classe exporté de Pronote (CSV, XLSX, ODS : nom, prénom, classe, sexe sont reconnus). <span class="bouton">🎭 Données démo</span> pour essayer. Nommez la session (ex. « TG06 — 12 mars ») : ce nom apparaît dans les exports.</li>
<li>Ouvrez l’outil une fois avec du réseau : ensuite il marche sans réseau. Sur iPad : Safari → Partager → « Sur l’écran d’accueil ». Pas de navigation privée.</li></ol>`},
{t:'500 m : chronométrer et attribuer les temps',html:`<ul>
<li>Sur les onglets 500 m, le <b>chrono</b> flotte en bas. <span class="bouton">▶ Start</span> au départ commun.</li>
<li>Touchez le gros bouton <span class="bouton">● PASSAGE</span> à chaque arrivée : les temps s’empilent dans l’ordre d’arrivée. « ← Annuler dernier passage » corrige un appui de trop.</li>
<li><span class="bouton">■ Stop</span> quand le dernier est arrivé, puis <b>glissez chaque temps sur la case de l’élève</b>. Une case déjà remplie refuse le dépôt (pas d’écrasement par erreur).</li>
<li>Vous pouvez aussi taper le temps au format <b>m:ss</b> (ex. 2:18). La note s’affiche aussitôt.</li>
<li>Le chrono survit à un rechargement ou à une mise en veille : il est calculé sur l’heure réelle, et les passages non attribués sont gardés.</li></ul>
<p class="astuce">Un élève dispensé peut noter l’ordre d’arrivée pendant que vous touchez « Passage » : l’attribution des temps est ensuite immédiate.</p>`},
{t:'1’30 : projet et zone d’arrivée',html:`<ul>
<li>Saisissez la <b>distance prévue</b> annoncée par l’élève (ex. 450 m), puis touchez la <b>zone</b> où il se trouve au coup de sifflet.</li>
<li>La note tient compte de l’écart entre le projet et la réalisation (barème des zones : bouton ❓ → page Barèmes).</li>
<li><b>Mode rapide</b> : masque les zones et les totaux pour saisir plus vite sur le terrain.</li></ul>`},
{t:'Absents, dispensés, ordre de passage',html:`<ul>
<li><span class="bouton">ABS</span> / <span class="bouton">DISP</span> à droite du nom : l’élève sort de la moyenne de classe.</li>
<li>▲ ▼ : remettez les élèves dans l’ordre des séries.</li></ul>`},
{t:'Grand écran d’attribution, changer de place, écran allumé',html:`<ul>
<li>Après <span class="bouton">■ Stop</span>, le <b>grand écran d’attribution</b> s’ouvre : élèves à gauche, temps à droite (flèches ▲ ▼ ou barre de défilement). Le 1er temps est déjà choisi : touchez l’élève, le temps lui est donné et le suivant est choisi. Touchez un autre temps pour en choisir un autre. Erreur de chrono ou temps relevé à la main : bouton <span class="bouton">✎</span> à droite de l’élève, puis tapez le temps (ex. 1:52) ou effacez-le. <span class="bouton">↩ Annuler</span> reprend la dernière attribution. Rouvrir : bouton <span class="bouton">⇔ Grand écran</span> du chrono.</li>
<li>Le bouton <span class="bouton">↺ Reset</span> est en haut du chrono, loin de PASSAGE, et demande confirmation s’il reste des temps.</li>
<li>Pendant la course, la liste des passages du petit chrono défile seule : le dernier passage reste visible.</li>
<li><b>Changer la place d’un élève</b> : touchez son numéro (pastille ↕), tapez la nouvelle place (ex. 3). Les flèches ▲ ▼ restent disponibles.</li>
<li><b>Mode démo</b> (bouton sur l’accueil) : classe fictive de 28 élèves pour s’entraîner. <span class="bouton">⏱ Simuler 12 arrivées</span> remplit le chrono et ouvre le grand écran. Rien n’est enregistré : en sortant (<span class="bouton">Quitter</span> ou ⚙), la vraie session revient telle quelle.</li>
<li>L’écran de la tablette <b>reste allumé</b> tant que l’outil est ouvert (il se remet en veille normalement à l’accueil ou si on quitte l’outil).</li></ul>`},
{t:'Résultats, exports, sauvegarde',html:`<ul>
<li><b>Résultats</b> : notes /20 (G&T : AFL1 /12 calculée ; Pro et CAP : /8), <b>Stats</b> : moyennes et répartition.</li>
<li>Exports : <b>Excel</b> (données + récapitulatif), <b>CSV</b>, <b>impression</b> A4 paysage, <b>JSON</b> pour passer la session sur une autre tablette sans réseau.</li>
<li>Sauvegarde automatique sur l’appareil (toutes les 30 s et dès que l’outil passe en arrière-plan). Au retour : bandeau « Reprendre ».</li></ul>
<p class="attention"><b>Exportez en Excel après chaque épreuve.</b> Vider le cache du navigateur efface la session.</p>`},
{t:'Barèmes, lecture facilitée',html:`<ul>
<li>Barèmes officiels BO 2021 (G&T, Pro, CAP), zones du 1’30 et calcul détaillé : <span class="bouton" onclick="EPSAide.fermer();goTab('aide')" style="cursor:pointer">Ouvrir la page Barèmes</span>.</li>
<li><b>Lecture facilitée</b> (case en haut) : police plus lisible et lettres espacées, utile en cas de dyslexie. Le choix vaut pour toutes les applis EPS de l’appareil.</li>
<li>Suivi des séances du cycle : appli <b>Demi-fond · Prof</b>, qui renvoie ici pour l’épreuve.</li></ul>`}]}]};
