// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.


let baseDeDonnees = [];

// Fonction d'inscription
function signUp(nom, email, motDePasse, confirmationMotDePasse) {
  const userExiste = baseDeDonnees.find(u => u.email === email);
  if (userExiste) return "Erreur: cet email existe déjà";
  if (motDePasse !== confirmationMotDePasse) return "Erreur: les mots de passe ne correspondent pas";

  const nouvelUtilisateur = {
    id: Date.now(),
    nom,
    email,
    password: motDePasse, // ✅ clé correcte
    estBloque: false,
    estConnecte: false
  };
  baseDeDonnees.push(nouvelUtilisateur);
  return nouvelUtilisateur;
}

// Fonction de connexion
function login(email, motDePasse) {
  const utilisateur = baseDeDonnees.find(u => u.email === email);
  if (!utilisateur) return "Erreur: utilisateur non trouvé";

  // Vérifier le blocage **avant** le mot de passe
  if (utilisateur.estBloque) return "Erreur: utilisateur bloqué";

  if (utilisateur.password !== motDePasse) return "Erreur: mot de passe incorrect";

  utilisateur.estConnecte = true;
  return utilisateur; // ✅ retourne l'objet utilisateur
}

// Ne pas modifier la ligne suivante
module.exports = { signUp, login, baseDeDonnees }
